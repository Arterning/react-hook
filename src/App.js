import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import Welcome from "./Welcome.js";
import Girls from "./Girls";
import { TasksProvider } from "./TasksContext.js";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
      <Welcome />
      <Girls />
    </TasksProvider>
  );
}
