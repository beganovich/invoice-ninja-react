import axios from 'helpers/axios';
import { PostTypes } from 'types/views/Posts';

export const getPosts = async (): Promise<any> => await axios.get('posts');

export const addPost = async (post: PostTypes): Promise<any> => await axios.post('posts', post);

export const updatePost = async (post: PostTypes, postId: string): Promise<any> => await axios.put(`posts/${postId}`, post);

export const getPostById = async (postId: string): Promise<any> => await axios.get(`posts/?id=${postId}`);
