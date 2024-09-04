import { createStore } from "redux";

const INITIAL_STORE = {
    counter : 0,
    privacy: false
}

const reducer = (store = INITIAL_STORE, action) => {
    
    if(action.type === "ADD")
        return {...store, counter: store.counter + 1};
    else if(action.type === "DELETE")
        return {...store, counter: store.counter - 1};
    else if(action.type === "INCREMENT")
        return {...store, counter: store.counter + parseInt(action.payload.num)}
    else if(action.type === "DECREMENT")
        return {...store, counter: store.counter - parseInt(action.payload.num)}
    else if(action.type === "PRIVACY")
        return {...store, privacy: !store.privacy}
    return store
}

const store = createStore(reducer);






export default store;