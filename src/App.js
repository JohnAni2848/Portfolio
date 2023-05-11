import React from 'react';
import Header from "./componants/Header/Header";
import Skillcontr from './componants/Skillcontr/Skillcontr';
import Topcontr from './componants/Topcontr/Topcontr';
import Experiencecontr from './componants/Experiencecontr/Experiencecontr';
import Contactcontr from './componants/Contactcontr/Contactcontr';
const App = () =>{
  return(
    <div>
      <Header />
      <Topcontr />
      <Skillcontr />
      <Experiencecontr />
      <Contactcontr />
    </div>
  );
};

export default App;
