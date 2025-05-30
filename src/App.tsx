import "./styles/global.css";
import { Container } from "./components/Container";
import { DeliveryCardList } from "./components/DeliveryCardList";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <>
      <Menu />

      <Container>
        <DeliveryCardList />
      </Container>
    </>
  );
}
