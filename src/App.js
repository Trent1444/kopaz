import "./App.css";
import CreateTask from "./components/CreateTask";
function App() {
  return (
    <div className="App">
      <div id="creating-new-task">
        <navbar>
          <button id="menu-button">≡</button>
          <h1 id="title">Kopaz Helping You Achieve More</h1>
        </navbar>
        <form id="task-form">
          <input
            id="task-title"
            type="text"
            placeholder="Enter Task Title"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default App;
