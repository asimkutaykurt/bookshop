import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CartContext from '../components/CartContext';
import bookapi from '../books.json';
import { useParams } from 'react-router-dom';
import './einkaufskorb.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Einkaufskorb() {
  const { items, deleteItem } = useContext(CartContext);
  const [books, setBooks] = useState([]);
  console.log(books);

  const leererEinkaufskorb = items.length === 0;

  /* const concatArrays = Object.keys(items).;

  console.log(concatArrays); */

  const removeDublicates = items.map(JSON.stringify);
  console.log(removeDublicates);

  const uniqueSet = new Set(removeDublicates);
  const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  console.log(uniqueArray);

  console.log(removeDublicates.length);

  return (
    <div className='Einkaufskorb'>
      {leererEinkaufskorb
      ? <div>
          <h3>Dein Einkaufkorb ist leer!</h3>

          <div>
            <h3>Empfehlungen:</h3>
            
          </div>
        </div>
      : 
      <div>
        {uniqueArray.map(({ kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn}) => (
          <div className='einkaufskorb-container'>
            <div>
              <img className='einkaufskorb-img' src={bild1} alt="" />
            </div>

            <div>
              <h3>{name}</h3>
              <span></span>
              <DeleteOutlineIcon className='remove-button' onClick={() => deleteItem(kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn)}/>
            </div>
          </div>
        ))}
      </div>
      }

    </div>
  )
}