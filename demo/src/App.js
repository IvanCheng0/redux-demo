import React from "react";
import Footer from "../components/Footer";
import AddTodo from "../components/AddTodo";
import VisibleTodoList from "../components/VisibleTodoList";


function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
