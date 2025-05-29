import "./styles/global.css";
import { Container } from "./components/Container";
import { DeliveryCardList } from "./components/DeliveryCardList";

export default function App() {
  return (
    <Container>
      <DeliveryCardList />
    </Container>
  );
}
