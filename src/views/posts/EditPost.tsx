import { useState, useEffect } from 'react';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { ContentPasteOutlined, CreateOutlined, EditOutlined } from '@mui/icons-material';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from 'components/TextField';
import {
  titleStyle,
  parentStyle,
  mainParentContainerStyle,
  titleIconParentStyle,
  actionsParentStyle
} from 'styles/views/posts/AddPostStyle';
import linkStyle from 'styles/GlobalStyles';
import { PostTypes } from 'types/views/Posts';
import { toastifyAlertError, toastifyAlertSuccess } from 'helpers/toastify';
import { ERROR_MESSAGES, ROUTES, VALIDATION_MESSAGES } from 'constants/index';
import { updatePost, getPostById } from 'services/postService';

const EditPost = (): JSX.Element => {
  const { postId = '' } = useParams<string>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
      .typeError(VALIDATION_MESSAGES.INVALID_INPUT)
      .min(4, 'Minimum number of characters for "Title" field is 4')
      .max(80, 'Maximum number of characters for "Title" field is 80'),
    content: Yup.string()
      .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
      .typeError(VALIDATION_MESSAGES.INVALID_INPUT)
      .min(4, 'Minimum number of characters for "Content" field is 4')
      .max(250, 'Maximum number of characters for "Content" field is 250')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PostTypes>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange'
  });

  const fetchPostData = async (): Promise<any> => {
    try {
      const { data } = await getPostById(postId);
      const { title, content }: PostTypes = data[0];
      reset(
        {
          title,
          content
        }
      );
    } catch (error) {
      toastifyAlertError(ERROR_MESSAGES.SOMETHING_WRONG);
    }
    setIsLoading(false);
  };

  const onSubmitHandler: SubmitHandler<PostTypes> = (data) => {
    (async () => {
      try {
        setIsSaving(true);
        await updatePost(data, postId);
        toastifyAlertSuccess('Successfully updated post');
        navigate(`${ROUTES.DASHBOARD}`);
      } catch (error) {
        toastifyAlertError(ERROR_MESSAGES.SOMETHING_WRONG);
      }
      setIsSaving(false);
    })();
  };

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  return (
    <Box sx={mainParentContainerStyle}>
      <Box sx={parentStyle}>
        <Box sx={titleIconParentStyle}>
          <EditOutlined sx={{ fontSize: 80, color: 'primary.main', mb: 2 } } />
          <Typography variant="h5" sx={titleStyle}>
                Edit post
          </Typography>
        </Box>
        <FormControl component="form" onSubmit={handleSubmit(onSubmitHandler)} sx={{ width: '100%' }}>
          <TextField
            required
            label="Title"
            iconStart={<CreateOutlined />}
            error={Boolean(errors?.title)}
            register={register}
            fieldName="title"
            helperText={errors?.title?.message}
          />
          <TextField
            required
            multiline
            rows={5}
            label="Content"
            iconStart={<ContentPasteOutlined />}
            error={Boolean(errors?.content)}
            register={register}
            fieldName="content"
            helperText={errors?.content?.message}
          />
          <Box sx={actionsParentStyle}>
            <Button variant="outlined" disabled={isSaving || isLoading}>
              <Link to={`${ROUTES.DASHBOARD}`} style={linkStyle}>
                Cancel
              </Link>
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              disableElevation
              loading={isSaving || isLoading}
              disabled={isSaving || isLoading}
            >
                Save changes
            </LoadingButton>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default EditPost;
