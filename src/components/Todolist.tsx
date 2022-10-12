import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface formStateType {
  email: string;
  ID: string;
  password: string;
}

export default function Todolist() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<formStateType>();
  console.log(errors);
  //이게 다한다.
  //onBlur,onChange를 대신한다 register!
  //console.log(watch()); //watch는 변화를 감지하고
  //변화된 값을 반환! 쩌는거다..
  const onValid = (data: any) => {
    console.log(data); //데이터가 타당했을 때
  };

  //에러부분을 잡아준다.
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)} //제출할때 타당성검사를하는거다.
      >
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com",
            },
          })}
          placeholder="email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("ID", { required: "ID is required" })}
          placeholder="ID"
        />
        <span>{errors.ID?.message}</span>

        <input
          {...register("password", { required: "password is required" })}
          placeholder="Password"
        />
        <span>{errors.password?.message}</span>
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
