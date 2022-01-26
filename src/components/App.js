// React Imports
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Global Imports
import Header from './ui/Header/Header';

// Screen Imports
import SupportScreen from '../screens/SupportScreen/SupportScreen';
import PricingScreen from '../screens/PricingScreen/PricingScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MainTemplatesScreen from '../screens/TemplatesScreen/AllTemplates/MainTemplatesScreen';
import CategoryPage from './ui/CategoryPage/CategoryPage';
import { useDispatch } from 'react-redux';
import { setPageProps } from '../actions/pageProps';
import { data } from '../data/infoProps/heroCardOptions';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../components/ui/Theme/theme';


function App() {

  // DB iteration will grab page props from the DB instead of setting them
  // every time the application is started
  
  const dispatch = useDispatch();
  dispatch(setPageProps(data));

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline /> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path = '/' element = {<HomeScreen />} />
          <Route exact path = '/pricing' element = {<PricingScreen />} />
          <Route exact path = '/templates' element = {<MainTemplatesScreen />} />
          <Route exact path = '/support' element = {<SupportScreen />} />
          <Route exact path = '/category/:categoryType' element = {<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
 