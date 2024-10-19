// Accordion.js
import React from 'react';
import './Accordion.css';
import AccordionItem from './AccordionItem';

function Accordion({ children }) {
  return <div className="accordion">{children}</div>;
}

Accordion.Item = AccordionItem;

export default Accordion;

