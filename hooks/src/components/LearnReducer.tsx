import { useReducer, useState } from "react";
const ACTIONS = {
    INCREAMENT : 'INCREMENT'
    

}
function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decerement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const LearnReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const [count, setCount] = useState(0);
  function increament() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({type : 'increment'})
  }
  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({type : 'increment'})

  }
  return (
    <>
      <button onClick={decrement}> - </button>
      {/* <span>{count}</span> */}
      <span>{state.count}</span>
      <button onClick={increament}> + </button>
    </>
  );
};
export default LearnReducer;
