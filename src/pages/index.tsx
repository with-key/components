import React, { useState } from "react";
import * as Input from "../components/Input";

const Home = () => {
  const [iino, setIino] = useState("");
  return (
    <>
      <Input.Price getValues={(v) => console.log(v)} />
      <Input.Iino getValues={(v) => setIino(v.origin)} />
      <button onClick={() => console.log(iino)}>버튼</button>
    </>
  );
};

export default Home;
