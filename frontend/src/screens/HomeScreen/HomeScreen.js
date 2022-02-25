import { useSelector } from "react-redux";
import Hero from "../../components/ui/Hero/Hero";
import { StyledContainer } from "../../components/ui/Theme/theme";

function HomeScreen() {

  const pageProps = useSelector(state => state.newPageProps);
  const props = pageProps;

  return (
    <StyledContainer>
      <Hero cardOptions = {props.pageProps.cardOptions} />
    </StyledContainer>
  )
}

export default HomeScreen
