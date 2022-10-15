import React from 'react'
import './GlobalStyles.css'

import Header from './componentes/Header'
import Main from './componentes/SectionMain'
import SocialMedia from './componentes/SocialMedia'
import Pricing from './componentes/Pricing'
import Clientes from './componentes/Clientes'
import Banner from './componentes/Banner'
import Footer from './componentes/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SocialMedia />
      <Pricing />
      <Clientes />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
