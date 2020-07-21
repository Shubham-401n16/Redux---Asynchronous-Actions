// xx - define the initial state
// define the reducer
// -- defining the action types
// -- define the behavior for each action type
// redux magic to combine the init state and reducer into a redux store

// useState(initState)
// this.state = initState

import { createStore } from 'redux';


const initState = {
    cart: 0,
    total: 0,
    categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: '' },
    ],
    products: [
        {
            name: 'TV',
            description: 'See all the things',
            img : 'https://images.unsplash.com/photo-1579894059380-1866b68bce6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 5,
            price: 400,
            category: 'electronics',
            selected: false,
        },
        {
            name: 'Macbook',
            description: 'Do all the things',
            img:'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 7,
            price: 1200,
            category: 'electronics',
            selected: false,
        },
        {
            name: 'Carrot',
            description: 'Crunch all the things',
            img:'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 25,
            price: 0.3,
            category: 'food',
            selected: false,
        },
        {
            name: 'Cake',
            description: 'Lie all the things',
            img:'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 10,
            price: 5,
            category: 'food',
            selected: false,
        },
    ],
    currentCategory: 'food',
};

const reducer = (state = initState, action) => {
    // state = the current state (non mutable)
    // action = an object containing type and payload

    let newState = { ...state };

    switch (action.type) {
        // define our application's acceptable actions

        case 'ADD_TO_CART':
            newState.cart = action.payload;
            newState.total = action.payload;
            break;
        case 'CHANGE_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        default:
            break;
    }

    return newState;
};

export default createStore(reducer);
