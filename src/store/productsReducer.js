const initState = {
    allProducts: [
        {
            name: 'TV',
            description: 'See all the things',
            img: 'https://images.unsplash.com/photo-1579894059380-1866b68bce6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 5,
            price: 400,
            category: 'electronics',
            selected: false,
        },
        {
            name: 'Macbook',
            description: 'Do all the things',
            img: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 7,
            price: 1200,
            category: 'electronics',
            selected: false,
        },
        {
            name: 'Carrot',
            description: 'Crunch all the things',
            img: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 25,
            price: 0.3,
            category: 'food',
            selected: false,
        },
        {
            name: 'Cake',
            description: 'Lie all the things',
            img: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            stock: 10,
            price: 5,
            category: 'food',
            selected: false,
        },
    ],
};

const reducer = (state = initState, action) => {
    console.log('products reducer called');
    let newState = { ...state };

    switch (action.type) {
        // define our application's acceptable actions

        case 'ADD_PRODUCT':
            newState.allProducts.push(action.payload);
            break;
        case 'CONSOLE_LOG':
            console.log('products');
            break;
        case 'ADD_TO_CART':
            for (let i = 0; i < newState.allProducts.length; i++) {
                if (action.payload.name === newState.allProducts[i].name) {
                    newState.allProducts[i].stock = newState.allProducts[i].stock - 1;
                    newState.allProducts = [...newState.allProducts];
                    break;
                }
            }
            break;
        case 'REMOVE_FROM_CART':
            for (let i = 0; i < newState.allProducts.length; i++) {
                if (action.payload.name === newState.allProducts[i].name) {
                    newState.allProducts[i].stock = newState.allProducts[i].stock + 1;
                    newState.allProducts = [...newState.allProducts];
                    break;
                }
            }
            break;
        default:
            break;
    }

    return newState;
};

export default reducer;
