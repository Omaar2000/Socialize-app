import { useState } from "react";
import Navbar from "./assets/navbar/Navbar";
import Leftbar from "./assets/Leftbar";
import Feed from "./assets/Feed";
import Rightbar from "./assets/Rightbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Leftbar />
        <Feed />
        <Rightbar className="" />
      </div>
    </>
  );
}

export default App;
