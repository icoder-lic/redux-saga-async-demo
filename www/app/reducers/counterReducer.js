export default (state = { "a" : 100}, action) =>{
    if(action.type == "ADD"){
        return {
            ...state,
            a : state.a + action.n
        }
    }else if (action.type == "MINUS"){
        return {
            ...state,
            a : state.a - 1
        }
    }
    return state;
}