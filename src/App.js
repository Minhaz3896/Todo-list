import { useState } from "react";

function App() {
  const [task, setTask] = useState([
    "Get Food",
    "Go to gym",
    "Pick up clothes",
  ]);
  const [newtask, setNewTask] = useState("");

  function handleevent(event) {
    setNewTask(event.target.value);
  }

  function addtask() {
    if (newtask !== "") {
      setTask((task) => [...task, newtask]);
      setNewTask("");
    }
  }

  function deletetask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="App">
      <section className="h-screen flex flex-col justify-center items-center  bg-slate-600">
        <div className="w-full h-auto p-5 flex justify-start text-2xl sm:text-6xl text-white font-serif">
          TO-DO LIST
        </div>
        <div className="py-11 flex justify-center items-center gap-2 ">
          <input
            className=" h-8 text-sm rounded-md border-2 border-solid font-bold border-cyan-400"
            type="text"
            placeholder="Add a task..."
            value={newtask}
            onChange={handleevent}
          />
          <button
            className="bg-slate-200 w-20 h-8 text-sm rounded-md border-2 font-semibold border-solid border-cyan-400 hover:bg-cyan-200 ease-in duration-300"
            onClick={addtask}
          >
            Add Task
          </button>
        </div>
        <ol className=" min-h-[520px] flex flex-col ">
          {task.map((task, index) => (
            <li
              className="list-decimal p-6 border-2 flex justify-between"
              key={index}
            >
              <span className=" w-16 h-7 font-bold text-yellow-100 min-w-[520px]">
                {task}
              </span>
              <button
                className="bg-slate-200 w-16 h-7 text-sm rounded-md border-2 border-solid font-semibold border-cyan-400 hover:bg-cyan-200 ease-in duration-300"
                onClick={() => deletetask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default App;
