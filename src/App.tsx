import clsx from "clsx";
import "./styles/global.css";
import { Container } from "./components/Container";

export default function App() {
  return (
    <Container>
      <h1 className={clsx("text-center bg-amber-200")}>Hello, world!</h1>
    </Container>
  );
}
