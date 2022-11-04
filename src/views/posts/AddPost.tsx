import { useState } from 'react';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { ContentPasteOutlined, CreateOutlined, PostAddOutlined } from '@mui/icons-material';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
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
import { PostTypes, DisplayPostTypes } from 'types/views/Posts';
import { toastifyAlertError, toastifyAlertSuccess } from 'helpers/toastify';
import { ERROR_MESSAGES, ROUTES, VALIDATION_MESSAGES } from 'constants/index';
import { addPost } from 'services/postService';

const AddPost = (): JSX.Element => {
  const navigate = useNavigate();
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
    formState: { errors }
  } = useForm<PostTypes>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange'
  });

  const onSubmitHandler: SubmitHandler<PostTypes> = (formData) => {
    (async () => {
      try {
        setIsSaving(true);
        const { data }: { data: DisplayPostTypes } = await addPost(formData);
        const postId: string | undefined = data?.id;
        toastifyAlertSuccess('Successfully added post');
        navigate(`${ROUTES.EDIT}/${postId}`);
      } catch (error) {
        toastifyAlertError(ERROR_MESSAGES.SOMETHING_WRONG);
      }
      setIsSaving(false);
    })();
  };

  return (
    <Box sx={mainParentContainerStyle}>
      <Box sx={parentStyle}>
        <Box sx={titleIconParentStyle}>
          <PostAddOutlined sx={{ fontSize: 80, color: 'primary.main', mb: 2 } } />
          <Typography variant="h5" sx={titleStyle}>
                Add post
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
            <Button variant="outlined" disabled={isSaving}>
              <Link to={`${ROUTES.DASHBOARD}`} style={linkStyle}>
                Cancel
              </Link>
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              disableElevation
              loading={isSaving}
              disabled={isSaving}
            >
                Save
            </LoadingButton>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AddPost;
