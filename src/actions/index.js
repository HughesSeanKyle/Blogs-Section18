import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder'; 

export const fetchPosts = () => async dispatch => { // 1.1
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data } )
};

export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

// _ indicates that this is a pvt function                          //2
const _fetchUser = _.memoize(async(id, dispatch) => {               //2.1
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
});

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

//2
Side-effect of solution - If you ever wanted to 'Refetch' as user you would not be able to do it again using the same action creator (_fetchUser). Can only fetch each user exactly one time. To get user again another action creator with the same logic must be made without the memoization step.  

// 2.1
Async moved to here because the private function contains await.
*/

