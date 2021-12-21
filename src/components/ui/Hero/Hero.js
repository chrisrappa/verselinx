import React from 'react';
import StyledHeroCard from './StyledHeroCard';
import { StyledHeroContainer, StyledGridContainer } from './styled';
import { CssBaseline, Grid } from '@material-ui/core';
import { cardOptions } from './cardOptions';


function Hero() {

  return (
    <React.Fragment>
      <StyledHeroContainer>
        <CssBaseline />
        <StyledGridContainer container spacing = {3}>
          { cardOptions.map(card => (
            <Grid key = {card.id} item md = {4} xs = {12}>
              <StyledHeroCard title = {card.name} description = {card.description} image = {card.img}/>
            </Grid>
          ))}
        </StyledGridContainer>
      </StyledHeroContainer>
    </React.Fragment>
  )
}

export default Hero
