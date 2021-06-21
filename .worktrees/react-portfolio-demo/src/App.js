import React from 'react';
//import ReactDOM from 'react-dom';
//import 'normalize.css/normalize.css';
import AppRouter from "./components/AppRouter/AppRouter.js";

//COMPONENTS
import Masthead from "./components/Masthead.js";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CallToAction from "./components/Contact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//scss
import './styles/App.scss';
//original portfolio design
import  './styles/old-style/creative-modified.scss';

function App() {
  return (
    <div>
      < AppRouter />

      < Masthead />
      < Services />
      < Portfolio />
      < CallToAction />
      < Contact />
      < Footer />
    </div>
  );
}


export default App;
