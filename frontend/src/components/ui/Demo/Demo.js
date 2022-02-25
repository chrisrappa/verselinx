import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StyledContainer } from '../Theme/theme';

function Demo() {

  const pageProps = useSelector(state => state.pageProps);
  const props = pageProps;
  const { demoType } = useParams();

  console.log(props);

  // props go all the way to through the reducer, might be a problem with either the
  // reducer or the way I'm selecting the state
  return (
    <div>

      {

        /* 

          // Title = props.title 
          // Short description = props.description
          // Button for demo = <button component = {Link} to = `${demoapp.id}`

        */

      }

      <StyledContainer>
        <h1> {demoType} Page </h1>
      </StyledContainer>
      {/* 

        //Demo App

      */}

      {/* 
      
        //Point of Action
      
      */}

      

      {/* Demo App =  */}
      
    </div>
  )
}

export default Demo
