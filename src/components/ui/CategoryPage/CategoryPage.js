import { 
  CategoryCardTitle, 
  CategoryCardContent, 
  CategoryGrid, 
  CategorySubGrid, 
  FullWidthCard, 
  HalfWidthCard,
  CategoryTypography
} from "./styled"
import { StyledContainer } from "../Theme/theme";
import { useParams } from 'react-router-dom';
import { StyledCardMedia, StyledTypography } from "../Hero/styled";
import { useSelector } from "react-redux";
import { useState } from "react";

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
  
  return (
    <StyledContainer>
      <CategoryGrid container >

        {/* Full Width Hero (Card One) */}
        <CategorySubGrid container>
            <FullWidthCard>
              <CategoryCardTitle>
                <StyledTypography 
                  variant = "h4" 
                  component = "h4"
                >
                  {paramProps?.categoryPage?.heroInfo[0]?.name}
                </StyledTypography>
              </CategoryCardTitle>
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
              </CategoryTypography>
              <StyledCardMedia 
                component = {'img'} 
                image = {paramProps?.categoryPage?.featureOne?.img} 
              />
            </CategoryCardTitle>

            {/* Hidden Content Except onHover/onClick */}
            <CategoryCardContent>
              <StyledTypography 
                variant = "h5" 
                component = "h5"
              >
                {paramProps?.categoryPage?.featureTwo?.description}
              </StyledTypography>
            </CategoryCardContent>
          </HalfWidthCard>

          {/* Card Three */}
          <HalfWidthCard>
            <CategoryCardTitle>
              <CategoryTypography 
                variant = "h4" 
                component = "h4"
              >
                {paramProps?.categoryPage?.featureTwo?.name}
              </CategoryTypography>
              <StyledCardMedia 
                component = {'img'} 
                image = {paramProps?.categoryPage?.featureTwo?.img} 
              />
            </CategoryCardTitle>

            
            {/* Hidden Content Except onHover/onClick */}
            <CategoryCardContent>
              <StyledTypography 
                variant = "h5" 
                component = "h5"
              >
                {paramProps?.categoryPage?.featureTwo?.description}
              </StyledTypography>
            </CategoryCardContent>
          </HalfWidthCard>

        </CategorySubGrid>

        {/* Full width CategoryGrid item (Card 4) */}
        <CategorySubGrid container>
            <FullWidthCard>
              <CategoryCardTitle>
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
              />
            </FullWidthCard>
        </CategorySubGrid>
      </CategoryGrid>
    </StyledContainer>
  )
}

export default CategoryPage;
