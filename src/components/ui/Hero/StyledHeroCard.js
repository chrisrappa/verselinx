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

  return (
    <StyledCard elevation = { 5 } >
      <StyledCardActionArea>
        <StyledCardContent>
          <StyledTypography variant = "h4" component = "h2">
            {props.title ? props.title : ''}
          </StyledTypography>
          <StyledTypography variant = "p" componen t= "p">
            {props.description ? props.description : ''}
          </StyledTypography>
          <StyledButton size = "large" color = "white" component = { Link } to = {props.path ? props.path : ''}>
            Learn More
          </StyledButton>
        </StyledCardContent>
        <StyledCardMedia component = {'img'} image = {props.image ? props.image : ''} />
      </StyledCardActionArea>
    </StyledCard>
  )
}

export default StyledHeroCard;
