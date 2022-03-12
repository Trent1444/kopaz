import "./App.css";
import CreateTask from "./components/CreateTask";
function App() {
  return (
    <div className="App">
      <div id="creating-new-task">
        <form id="task-form">
          <input
            id="task-title"
            type="text"
            placeholder="Enter Task Title"
          ></input>
          <input
            id="task-description"
            type="text"
            placeholder="Enter Your Custom Description"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default App;
