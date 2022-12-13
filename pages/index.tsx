import { NextPage } from "next";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "todo1", color: "red", checked: false },
  { id: 2, text: "todo2", color: "orange", checked: false },
  { id: 3, text: "todo3", color: "yellow", checked: true },
  { id: 4, text: "todo4", color: "green", checked: true },
  { id: 5, text: "todo5", color: "blue", checked: false },
  { id: 6, text: "todo6", color: "navy", checked: false },
]

const index: NextPage = () => {
  return (
    <TodoList todos={todos} />
  );
}

export default index;