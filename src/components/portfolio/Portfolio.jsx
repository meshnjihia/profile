import React from 'react'
import './portfolio.css';
import WorkSample from './WorkSample'; 

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work samples</span>

      <WorkSample/>
    </section>
  );
}

export default Portfolio