import { Tab, Tabs, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { StyledHeroContainer } from "../../../components/ui/Hero/styled";
import { useParams } from "react-router-dom";

function MainTemplatesScreen() {

  const params = useParams();

  const [value, setValue] = useState(params.id);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(params.id);
  }, [params]);

  const currentTemplate = (value) => {
    switch (value){
      case 'nftstore':
        return <div><h1>NFT Store Interactive Template Coming Soon!</h1></div>
      case 'musicNFT':
        return <div><h1>Music NFT Store Interactive Template Coming Late 2022!</h1></div>
      case 'web3social':
        return <div><h1>Web 3.0 Social Interactive Template Coming Summer 2022!</h1></div>
      case 'web2social':
        return <div><h1>Social 2.0 Interactive Template Coming Soon!</h1></div>
      default:
        return <div><h1>NFT Template</h1></div>
    }
  }


  return (
    <Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Tabs
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="template options"
      >
        <Tab value='nftstore' label="2D/3D NFTs" />
        <Tab value='musicNFT' label="Music NFTs" />
        <Tab value='web3social' label="Social 3.0" />
        <Tab value='web2social' label="Social 2.0" />
      </Tabs>
      <StyledHeroContainer style={{textAlign: 'center'}}>
        {currentTemplate(value)}
      </StyledHeroContainer>
    </Container>
  )
}

export default MainTemplatesScreen
