import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PricingScreen from '../screens/PricingScreen/PricingScreen';
import MainTemplatesScreen from '../screens/TemplatesScreen/AllTemplates/MainTemplatesScreen';
import SupportScreen from '../screens/SupportScreen/SupportScreen';


import Header from './ui/Header/Header';
import theme from './ui/Theme/theme';
import NFTStore from '../screens/TemplatesScreen/NFTStore/NFTStore';
import Web3Social from '../screens/TemplatesScreen/Web3Social/Web3Social';
import Web2Social from '../screens/TemplatesScreen/Web2Social/Web2Social';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path = '/' element = {<HomeScreen />} />
          <Route exact path = '/pricing' element = {<PricingScreen />} />
          <Route exact path = '/templates' element = {<MainTemplatesScreen />} />
          <Route exact path = '/nftstore' element = {<NFTStore />} />
          <Route exact path = '/web3social' element = {<Web3Social />} />
          <Route exact path = '/web2social' element = {<Web2Social />} />
          <Route exact path = '/support' element = {<SupportScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
 