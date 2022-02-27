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
import { StyledCardMedia, StyledHeroContainer, StyledTypography } from "../Hero/styled";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Fade } from "@material-ui/core";

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
                    {paramProps?.categoryPage?.heroInfo?.name}
                  </CategoryTypography>
                {/* </CategoryCardTitle> */}
                <StyledCardMedia 
                  component = {'img'} 
                  image = {paramProps?.categoryPage?.heroInfo?.img} 
                  style={{minHeight: '20rem', minWidth: '20rem'}}
                />
              </FullWidthCard>
          </CategorySubGrid>

          {/* Two even CategoryGrid items */}
          <CategorySubGrid container>

            {/* Card Two */}
            <HalfWidthCard>
              <CategoryCardTitle onMouseEnter={() => setCardTwoVisible(true)}>
                <CategoryTypography 
                  variant = "h4" 
                  component = "h4"
                >
                  {paramProps?.categoryPage?.featureOne?.name}

                  <CategoryButton 
                    variant="contained" 
                    size="large"
                    color="secondary"
                    onClick={() => setCardTwoVisible(!cardTwoVisible)}
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
                <CategoryCardContent onMouseLeave = {() => setCardTwoVisible(false)}>
                  <StyledCardMedia 
                    component = {'img'} 
                    image = {paramProps?.categoryPage?.featureOne?.img} 
                  />
                  <CategoryPaper elevation={0}>
                    <StyledTypography 
                      variant = "h5" 
                      component = "h5"
                    >
                      {paramProps?.categoryPage?.featureOne?.description}
                    </StyledTypography>
                  </CategoryPaper>
                </CategoryCardContent>
              </Fade>
            </HalfWidthCard>

            {/* Card Three */}
            <HalfWidthCard>
              <CategoryCardTitle onMouseEnter={() => setCardThreeVisible(true)}>
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
                <CategoryCardContent onMouseLeave = {() => setCardThreeVisible(false)}>
                  <StyledCardMedia 
                    component = {'img'} 
                    image = {paramProps?.categoryPage?.featureTwo?.img} 
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

          {/* Full width template demo */}
          <StyledHeroContainer>
            <h1>{paramProps?.categoryPage?.demoInfo?.description}</h1>
          </StyledHeroContainer>
        </CategoryGrid>
      </StyledContainer>
    </Fade>
  )
}

export default CategoryPage;
