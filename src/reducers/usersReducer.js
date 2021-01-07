export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default: 
            return state;
    }   
};

// Think of reducer as processing the matched action payload and sending the updated info to store. 