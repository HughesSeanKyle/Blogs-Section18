export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS': 
            return action.payload;
        default: 
            return state; 
    }
};


/*
Handling action types with if statements
export default (state = [], action) => {
    if (action.type === 'FETCH_POST') {
        return action.payload;
    }

    // Case where appropriate action type not found
    return state;
};
*/