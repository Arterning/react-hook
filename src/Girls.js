import { useGirls } from "./TasksContext";

export default function Girls() {
  const girls = useGirls();

  return (
    <ul>
      {girls.map((girl) => (
        <li key={girl.id}>
          <span>{girl.name}</span>
        </li>
      ))}
    </ul>
  );
}
