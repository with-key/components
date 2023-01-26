import React from "react";
import * as Input from "../../components/Input";
import { userActions, userStore } from "./formSlice";

const UserForm = () => {
  const { user } = userStore();
  const { setUser } = userActions();

  console.log(user);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input.Price
        getValues={(v) => setUser({ ...user, totalWage: v.origin })}
      />
      <Input.Iino getValues={(v) => console.log(v)} />
      <Input.Text getValues={(v) => console.log(v)} />
      <button onClick={() => console.log()}>버튼</button>
    </form>
  );
};

export default UserForm;
