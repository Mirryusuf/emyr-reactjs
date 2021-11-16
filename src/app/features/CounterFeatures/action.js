export const plus = (value) => {
    return{
        type: 'PLUS',
        value: value
    }
}

export const minus = (value) => {
    return{
        type: 'MINUS',
        value: value
    }
}

export const minusWithCheckingAction = (value) => {
    return(dispatch, getState) => {
        if(getState().counter.count > 0){
            dispatch(minus(value))
        }
    }
}