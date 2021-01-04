import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post List</div>
    }
}

export default connect(null, { fetchPosts: fetchPosts })(PostList); // 1

/*
//1
ES2015 refactor 
export default connect(null, { fetchPosts })(PostList); // 1

*/