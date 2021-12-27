import React from 'react';
import StyledHeroCard from './StyledHeroCard';
import { StyledHeroContainer, StyledGridContainer } from './styled';
import { CssBaseline, Grid } from '@material-ui/core';



function Hero(props) {

  return (
    <React.Fragment>
      <StyledHeroContainer>
        <CssBaseline />
        <StyledGridContainer container spacing = {3}>
          { props.cardOptions.map(card => (
            <Grid key = {card.id} item md = {4} xs = {12}>
              <StyledHeroCard 
                title = {card.name ? card.name : ''} 
                description = {card.description ? card.description : ''} 
                image = {card.img ? card.img : ''} 
                path = {card.path ? card.path : ''} 
              />
            </Grid>
          ))}
        </StyledGridContainer>
      </StyledHeroContainer>
    </React.Fragment>
  )
}

export default Hero
