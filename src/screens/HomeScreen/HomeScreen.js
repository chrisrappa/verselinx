import Hero from "../../components/ui/Hero/Hero";
import { cardOptions } from "./cardOptions";
import { StyledContainer } from "../../components/ui/Theme/theme";

function HomeScreen() {
  return (
    <StyledContainer>
      <Hero cardOptions = {cardOptions} />
    </StyledContainer>
  )
}

export default HomeScreen
