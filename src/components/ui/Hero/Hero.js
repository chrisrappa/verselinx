import React from 'react';
import StyledHeroCard from './StyledHeroCard';
import { StyledHeroContainer, StyledGridContainer } from './styled';
import { CssBaseline, Fade, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Hero(props) {

  return (
    <StyledHeroContainer>
      <CssBaseline />
      <StyledGridContainer container spacing = {3}>
        { props?.cardOptions 
        
          ?
        
            props?.cardOptions.map((card, index) => (
              <Fade in timeout={(index * 500) + 500}>
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
            </Fade>
            ))

          : null
        }
      </StyledGridContainer>
    </StyledHeroContainer>
  )
}

export default Hero
