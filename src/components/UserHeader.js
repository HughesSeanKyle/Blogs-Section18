import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    };

    
    render() {
        const user = this.props.users.find((user) => {
            return user.id === this.props.userId;
        });

        // If NO user
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>
    }
};

// Give component access to redux level state
const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);

/*
The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
*/