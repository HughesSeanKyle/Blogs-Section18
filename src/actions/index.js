import jsonPlaceholder from '../apis/jsonPlaceholder'; 

export const fetchPosts = async () => {// 1
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
 
What is wrong with 'fetchPosts'?
Action creators must return plain JS objects with a type property - we are not!

By the time our action gets to a reducer, we won't have fetched our data. 
*/

