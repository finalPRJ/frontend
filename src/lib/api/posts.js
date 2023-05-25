import client from './client';

export const writePost = ({ writerId, title, content, options1, options2, options3, options4, options5 }) => 
client.post('/board/register', { writerId, title, content, options1, options2, options3, options4, options5 });