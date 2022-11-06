import { useState, useEffect } from 'react';
import {
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton
} from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { toastifyAlertError } from 'helpers/toastify';
import { getPosts } from 'services/postService';
import { DisplayPostTypes } from 'types/views/Posts';
import { headerCellStyle, bodyCellStyle, paperStyle } from 'styles/views/dashboard/IndexStyle';
import { ERROR_MESSAGES, ROUTES, TABLE_HEADER } from 'constants/index';

const Index = (): JSX.Element => {
  const [posts, setPosts] = useState<DisplayPostTypes[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchPosts = async (): Promise<any> => {
    try {
      const { data }: { data: object[] } = await getPosts();
      const fetchedPosts: DisplayPostTypes[] = data?.map(({ id, title, content }: DisplayPostTypes) => ({
        id,
        title,
        content
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      toastifyAlertError(ERROR_MESSAGES.SOMETHING_WRONG);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box sx={{ p: 6 }}>
      <Paper sx={paperStyle}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {TABLE_HEADER?.map((column) => (
                  <TableCell
                    key={column?.key}
                    align={column?.align}
                    style={{ ...headerCellStyle, minWidth: column?.minWidth }}
                  >
                    {column?.label}
                  </TableCell>
                ))}
                <TableCell align="center" style={headerCellStyle}>
                  Edit post
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow hover tabIndex={-1} key={`${row?.id}${row?.content}`}>
                    {TABLE_HEADER?.map((column) => (
                      <TableCell key={column?.key} style={bodyCellStyle}>
                        {row[column?.key]}
                      </TableCell>
                    ))}
                    <TableCell align="center">
                      <IconButton>
                        <Link to={`${ROUTES.EDIT_POST}/${row?.id}`}>
                          <EditOutlined fontSize="medium" sx={{ color: 'primary.main' }} />
                        </Link>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={posts?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default Index;
