import {event1,event2} from '../Abstract/Mock'

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if (serializedState===null){
            console.log("null")
            return undefined;
        }
        var state = JSON.parse(serializedState);
        return state;
    }
    catch(err){
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
    }
};