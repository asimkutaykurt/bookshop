import React, { useEffect, useState } from 'react';
import Fachbuecher from '../components/kategorien/Fachbuecher';
import bookapi from '../books.json';
import { Route, Routes } from 'react-router-dom';
import CartProvider from '../components/CartContext';
import Einkaufskorb from './Einkaufskorb';
import CarouselComponent from '../components/CarouselComponent';
import { ButtonGroup, Dropdown, DropdownButton, SplitButton } from 'react-bootstrap';

export default function Homepage() {
  return (
    <div className="main-books-container">
      <div>
        <CarouselComponent />
      </div>
      <div className='carousel-render-container'/>
      <div>
      
      </div>
    </div>
  );
}
