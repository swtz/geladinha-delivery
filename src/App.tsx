import { useState } from "react";

import { Container } from "./components/Container";
import { DeliveryCardList } from "./components/DeliveryCardList";
import { Heading } from "./components/Heading";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import { Footer } from "./components/Footer";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function toggleDropdown() {
    setIsActive((s) => !s);
  }

  return (
    <>
      <Menu isActive={isActive} toggleDropdown={toggleDropdown} />

      <div onClick={() => setIsActive(false)}>
        <Container>
          <Heading className="mt-24" as="h1">
            Geladinha Delivery
          </Heading>
        </Container>

        <Container>
          <DeliveryCardList />
        </Container>

        <Footer>
          Produzido com carinho por
          <a className="underline transition hover:text-blue-900" href="https://www.github.com/swtz" target="_blank">
            Swtz
          </a>
        </Footer>
      </div>
    </>
  );
}
