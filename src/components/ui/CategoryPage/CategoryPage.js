import { CategoryGrid, CategorySubGrid, FullWidthCard, HalfWidthCard } from "./styled"
import { StyledContainer } from "../Theme/theme";
import { Grid } from "@material-ui/core";
import Hero from "../Hero/Hero";

function CategoryPage(props) {
  return (
    <StyledContainer>
      <CategoryGrid container lg={10} md={10} sm={10} xs={12}>
        {/* Full width CategoryGrid item */}
        <Grid item>
          <Hero cardOptions = {props.cardOptions} />
        </Grid>

        {/* Two even CategoryGrid items */}
        <CategorySubGrid container>
            <HalfWidthCard>
              <h1>Half width</h1>
            </HalfWidthCard>
            <HalfWidthCard>
              <h1>Half width</h1>
            </HalfWidthCard>
        </CategorySubGrid>

        {/* Full width CategoryGrid item */}
        <CategorySubGrid container>
            <FullWidthCard><h1>Full width</h1></FullWidthCard>
        </CategorySubGrid>
      </CategoryGrid>
    </StyledContainer>
  )
}

export default CategoryPage;
