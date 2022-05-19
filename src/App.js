import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Todo />
    </div>
  );
}

export default App;
