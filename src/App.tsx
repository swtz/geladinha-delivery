import { useState } from "react";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Delivery } from "./components/Delivery";

import { deliveries } from "./db/seed/deliveries.json";
import { customers } from "./db/seed/customer.json";
import { motoboys } from "./db/seed/motoboy.json";

import "./styles/global.css";

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
          <Delivery
            delivery={deliveries[0]}
            customer={customers[0]}
            motoboy={motoboys[0]}
          />
        </Container>

        <Footer>
          Produzido com carinho por
          <a
            className="underline transition hover:text-blue-900"
            href="https://www.github.com/swtz"
            target="_blank"
          >
            Swtz
          </a>
        </Footer>
      </div>
    </>
  );
}
