import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Components/Portfolio/portfolio';
import Form from './Components/Form/form';
import TechsCarousel from './Components/Carousel/techsCarousel';

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('portfolio')
);

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('react-form')
);

ReactDOM.render(
  <React.StrictMode>
    <TechsCarousel />
  </React.StrictMode>,
  document.getElementById('react-techs')
);

