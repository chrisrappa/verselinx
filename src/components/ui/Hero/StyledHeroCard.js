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
          <StyledTypography variant="h4" component="h2">
            {props.title}
          </StyledTypography>
          <StyledTypography variant="p" component="p">
            {props.description}
          </StyledTypography>
          <StyledButton size="large" color="white">
            Learn More
          </StyledButton>
        </StyledCardContent>
        <StyledCardMedia component={'img'} image={props.image} />
      </StyledCardActionArea>
    </StyledCard>
  )
}

export default StyledHeroCard;
