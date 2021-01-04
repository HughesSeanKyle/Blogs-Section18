import jsonPlaceholder from '../apis/jsonPlaceholder'; 

export const fetchPosts = async () => {
    // Bad approach! Will get error // 1
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};

/*
// 1
First error
- Actions must be plain objects

Second error
- Use custom middleware for async actions
*/

