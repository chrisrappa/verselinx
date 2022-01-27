import { 
  CategoryCardTitle, 
  CategoryCardContent, 
  CategoryGrid, 
  CategorySubGrid, 
  FullWidthCard, 
  HalfWidthCard,
  CategoryTypography,
  CategoryPaper,
  CategoryButton
} from "./styled"
import { StyledContainer } from "../Theme/theme";
import { useParams } from 'react-router-dom';
import { StyledCardMedia, StyledTypography } from "../Hero/styled";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Fade, Paper } from "@material-ui/core";

function CategoryPage() {

  const pageProps = useSelector(state => state.newPageProps);
  const props = pageProps;
  const cardOptions = props.pageProps.cardOptions;

  const params = useParams();
  
  const paramProps =  
    cardOptions ?
      cardOptions.filter(card => card.categoryType === params.categoryType)[0] 
    : null
  ;

  const [cardTwoVisible, setCardTwoVisible] = useState(false);
  const [cardThreeVisible, setCardThreeVisible] = useState(false);
  
  console.log('cardTwoVisible', cardTwoVisible);

  return (
    <Fade in timeout={750}>
      <StyledContainer>
        <CategoryGrid container >

          {/* Full Width Hero (Card One) */}
          <CategorySubGrid container>
              <FullWidthCard>
                {/* <CategoryCardTitle> */}
                  <CategoryTypography 
                    variant = "h4" 
                    component = "h4"
                  >
                    {paramProps?.categoryPage?.heroInfo[0]?.name}
                  </CategoryTypography>
                {/* </CategoryCardTitle> */}
                <StyledCardMedia 
                  component = {'img'} 
                  image = {paramProps?.categoryPage?.demoInfo?.img} 
                />
              </FullWidthCard>
          </CategorySubGrid>

          {/* Two even CategoryGrid items */}
          <CategorySubGrid container>

            {/* Card Two */}
            <HalfWidthCard>
              <CategoryCardTitle>
                <CategoryTypography 
                  variant = "h4" 
                  component = "h4"
                >
                  {paramProps?.categoryPage?.featureOne?.name}

                  <CategoryButton 
                    variant="contained" 
                    size="large"
                    color="secondary"
                    onClick={() => setCardTwoVisible(true)}
                  >
                    See More
                  </CategoryButton>
                </CategoryTypography>
                <StyledCardMedia 
                  component = {'img'} 
                  image = {paramProps?.categoryPage?.featureOne?.img} 
                />
              </CategoryCardTitle>

              {/* Hidden Content Except onHover/onClick */}
              <Fade in={cardTwoVisible} timeout={1000}>
                <CategoryCardContent>
                  <StyledCardMedia 
                    component = {'img'} 
                    image = {paramProps?.categoryPage?.featureOne?.img} 
                  />
                  <CategoryPaper elevation={0}>
                    <StyledTypography 
                      variant = "h5" 
                      component = "h5"
                    >
                      {paramProps?.categoryPage?.featureTwo?.description}
                    </StyledTypography>
                  </CategoryPaper>
                </CategoryCardContent>
              </Fade>
            </HalfWidthCard>

            {/* Card Three */}
            <HalfWidthCard>
              <CategoryCardTitle>
                <CategoryTypography 
                  variant = "h4" 
                  component = "h4"
                >
                  {paramProps?.categoryPage?.featureTwo?.name}

                  <CategoryButton 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    onClick={() => setCardThreeVisible(true)}
                  >
                    See More
                  </CategoryButton>
                </CategoryTypography>
                
                <StyledCardMedia 
                  component = {'img'} 
                  image = {paramProps?.categoryPage?.featureTwo?.img} 
                />
              </CategoryCardTitle>

              
              {/* Hidden Content Except onHover/onClick */}
              <Fade in={cardThreeVisible} timeout={1000}>
                <CategoryCardContent>
                  <StyledCardMedia 
                    component = {'img'} 
                    image = {paramProps?.categoryPage?.featureOne?.img} 
                  />
                  <CategoryPaper elevation={0}>
                    <StyledTypography 
                      variant = "h5" 
                      component = "h5"
                      scroll="body"
                    >
                      {paramProps?.categoryPage?.featureTwo?.description}
                    </StyledTypography>
                  </CategoryPaper>

                </CategoryCardContent>
              </Fade>
            </HalfWidthCard>

          </CategorySubGrid>

          {/* Full width CategoryGrid item (Card 4) */}
          <CategorySubGrid container>
              <FullWidthCard>
                {/* <CategoryCardTitle>
                  <StyledTypography 
                    variant = "h4" 
                    component = "h4"
                  >
                    {paramProps?.categoryPage?.demoInfo?.name}
                  </StyledTypography>
                </CategoryCardTitle>
                <StyledCardMedia 
                  component = {'img'} 
                  image = {paramProps?.categoryPage?.demoInfo?.img} 
                /> */}
              </FullWidthCard>
          </CategorySubGrid>
        </CategoryGrid>
      </StyledContainer>
    </Fade>
  )
}

export default CategoryPage;
