import { createContext, useContext, useReducer, useState } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
const ThemeContext = createContext(null);
const GirlsContext = createContext([]);

const initialGirls = [
  { id: 0, name: "小花", size: "D-cup" },
  { id: 1, name: "小红", size: "C-cup" }
];

/**
 * 定义组件是用箭头函数好呢？还是用这种标准形式好呢？
 */
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [theme, setTheme] = useState("dark");
  const [girls, setGirls] = useState(initialGirls);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <GirlsContext.Provider value={girls}>
            {children}
          </GirlsContext.Provider>
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useGirls() {
  return useContext(GirlsContext);
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
  { id: 3, text: "Dffe matcha", done: false }
];
