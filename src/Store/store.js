import createStore from 'redux-zero';

const initialState = {
    gender: ["male", "female"], 
    age: ["adult", "children", "baby"], 
};

const store = createStore(initialState);
export default store;

