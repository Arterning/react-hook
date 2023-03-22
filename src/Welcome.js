import { useTheme } from "./TasksContext";

function Welcome() {
  const { setTheme } = useTheme();
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        Switch to light theme
      </Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const { theme } = useTheme();
  console.log("@", theme);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const { theme } = useTheme();
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}

export default Welcome;
