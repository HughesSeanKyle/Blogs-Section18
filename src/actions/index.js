import jsonPlaceholder from '../apis/jsonPlaceholder'; 

export const fetchPosts = () => async dispatch => { // 1.1
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data } )
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
};

/*
// 1
First error
- Actions must be plain objects

Second error
- Use custom middleware for async actions
 
What is wrong with 'fetchPosts'?
Action creators must return plain JS objects with a type property - we are not!
    - The async await syntax causes transpiled code to NOT return a plain object. 

By the time our action gets to a reducer, we won't have fetched our data. 

With redux thunk we can manually dispatch a function at some point in time. 

// 1.1
Above fix implemented and refactor.
*/

