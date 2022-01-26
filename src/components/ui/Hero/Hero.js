import React from 'react';
import StyledHeroCard from './StyledHeroCard';
import { StyledHeroContainer, StyledGridContainer } from './styled';
import { CssBaseline, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Hero(props) {

  return (
    <React.Fragment>
      <StyledHeroContainer>
        <CssBaseline />
        <StyledGridContainer container spacing = {3}>
          { props?.cardOptions 
          
            ?
          
              props?.cardOptions.map(card => (
              <Grid key = {card.id} item md = {4} xs = {12}>
                <StyledHeroCard 
                  title = {card.name ? card.name : ''} 
                  description = {card.description ? card.description : ''} 
                  image = {card.img ? card.img : ''} 
                  component = {Link}
                  to = {card.path ? '/category' + card.path  : ''} 
                  isActive = {card.isActive}
                />
              </Grid>
              ))

            : null
          }
        </StyledGridContainer>
      </StyledHeroContainer>
    </React.Fragment>
  )
}

export default Hero
