import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return <div>Post List</div>
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList); // 1

/*
**General Data Loading with Redux
=============
V252
=============
1. Component gets rendered onto the screen
2. Components 'componentDidMount' lifecycle method gets called
3. We call action creator from 'componentDidMount'
=============
V253 - V258
=============
4. Action creator runs code to make an API request
5. API responds with data
6. Action creator returns an 'action' with the fetched data on the 'payload' property
=============
V259 - 
=============
7. Some reducer sees the action, returns the data off the 'payload'
8. Because we generated some new state object, redux/react-redux causes our React app to be rerendered. 



//1
ES2015 refactor 
export default connect(null, { fetchPosts })(PostList); // 1


*/