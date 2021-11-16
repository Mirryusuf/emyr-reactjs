import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { minusWithCheckingAction, plus } from "../../../app/features/CounterFeatures/action";

const Counter = () => {
    let count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return(
        <div>
            {/* <button onClick={() => dispatch({type: 'MINUS'})}>-</button> */}
            <button onClick={() => dispatch(minusWithCheckingAction(1))}>-</button>
            {' '} <span>{count.count}</span> {' '}
            {/* <button onClick={() => dispatch({type: 'PLUS'})}>+</button> */}
            <button onClick={() => dispatch(plus(1))}>-</button>
        </div>
    )
}

export default Counter;