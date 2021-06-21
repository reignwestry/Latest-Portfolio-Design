import React from 'react';
import {Link } from 'react-router-dom';
import projectOne from './projects/projectOne';
import projectTwo from './projects/projectTwo';

const Portfolio = () => (
    <div>
        <p>This is from Portfolio Component.</p>
        <Link to={projectOne}>Project One</Link>
        <Link to={projectTwo}>Project Two</Link>
    </div>
);

export default Portfolio;