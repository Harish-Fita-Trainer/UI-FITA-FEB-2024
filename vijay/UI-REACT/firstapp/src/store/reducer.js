const InitialState = {
    CartCount: 0
}
export function counterReducer(state = InitialState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                CartCount: state.CartCount + 1
            }
        case 'incrementexplicit':
            return {
                ...state,
                CartCount: state.CartCount + action.payload
            }

        case 'decrementexplicit':
            return {
                ...state,
                CartCount: state.CartCount - action.payload
            }
        case 'decrement':
            return {
                ...state,
                CartCount: state.CartCount - 1
            }
        default:
            return state
    }
}
