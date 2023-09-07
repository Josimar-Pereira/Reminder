import { Container } from "./styles";
import heroImage from "../../assets/images/hero.png";

export function Hero() {
  return (
    <Container>
      <img src={heroImage} alt="" />
    </Container>
  );
}
