import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Learn about redux</h1>
      <AddTodo className="add" />
      <Todos className="delete" />
    </div>
  );
};

export default App;
