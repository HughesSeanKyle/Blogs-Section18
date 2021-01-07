import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    };

    
    render() {
        const { user } = this.props;

        // If NO user 
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>
    }
};

// Give component access to redux level state
const mapStateToProps = (state, ownProps) => { // 1
    // Finds the appropriate USER
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);

/*
The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

// 1
ownProps is a reference to the props that is about to be sent into the userHeader
*/