import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  // const renderCount = useRef(1);
  // const [renderCount, setRenderCount] = useState(0)
  // useEffect(()=>{
  //   setRenderCount(prevREnderCount => prevREnderCount + 1)
  // })

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  // const inputRef:any = useRef()
  const prevName:any = useRef()
  useEffect (()=>{
    prevName.current = name
  },[name])
  return (
    <>
      {/* ref={inputRef} */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* <div>I rendered {renderCount.current} times</div> */}
      <div> my name is {name} and it used to be {prevName.current}</div>
    </>
  );
}

export default App;
