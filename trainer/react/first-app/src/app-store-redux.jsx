import Button from "./button";
import { Increment, IncrementExplicit } from "./store/action";
import { SelectCartCount } from "./store/selector"
import store from "./store/store"
import { Provider, useDispatch, useSelector } from 'react-redux'

export function AppStoreRedux() {
    return <Provider store={store}>
        <App />
    </Provider>
}


function App() {
    const Count = useSelector(SelectCartCount);
    const dispatch = useDispatch();
    console.log("Count", Count)
    const OnIncrement = function () {
        dispatch(Increment())
    }

    const OnIncrementExplicit = function () {
        dispatch(IncrementExplicit(5))
    }
    return <>
        <h1>Welcome to redux App {Count}</h1>
        <Button Text={"Increment"} OnClick={OnIncrement}></Button>
        <Button Text={"Increment Explicit"} OnClick={OnIncrementExplicit}></Button>

    </>
}