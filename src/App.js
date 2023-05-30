import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { DateAndTime } from "./components/dateAndTime";

function App() {
  return (
    <div className="App">
      <div>
        <DateAndTime />

        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
