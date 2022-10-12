import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Todolist() {
  const { register, watch } = useForm(); //이게 다한다.
  console.log(register("todo")); //onBlur,onChange
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("todo")} placeholder="Wirte a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}
/*  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <div style={{ color: "white" }}>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} placeholder="Write a To do" />
        <button>Add</button>
      </form>
    </div>
  );*/
