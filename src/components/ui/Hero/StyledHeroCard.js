import { Link } from 'react-router-dom';
import { 
  StyledCard,
  StyledCardActionArea,
  StyledCardContent, 
  StyledCardMedia,
  StyledTypography,
  StyledButton
} from './styled';

function StyledHeroCard(props) {

  console.log('props StyledHeroCard',  props);
  return (
    <StyledCard elevation = { 5 } >
      <StyledCardActionArea>
        <StyledCardContent>
          <StyledTypography variant = "h4" component = "h2">
            {props.title ? props.title : ''}
          </StyledTypography>
          <StyledTypography variant = "body1" component= "p">
            {props.description ? props.description : ''}
          </StyledTypography>
          {props.to && props.isActive
          
            ? 
              <StyledButton size = "large" color = "inherit" component = { Link } to = {props.to}>
                Learn More
              </StyledButton>
            :
              <StyledTypography>Coming Soon</StyledTypography>
              
          }
        </StyledCardContent>
        <StyledCardMedia component = {'img'} image = {props.image ? props.image : ''} />
      </StyledCardActionArea>
    </StyledCard>
  )
}

export default StyledHeroCard;
