import React from 'react';
import { useContext } from 'react';
import CartContext from '../components/CartContext';

export default function Einkaufskorb() {
  const { items, deleteItem } = useContext(CartContext);
  return (
    <div>
        {items.map(({ kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn}) => (
          <div>
            <img src={bild1} alt="" />

            <h2>{name}</h2>
            <button onClick={() => deleteItem(kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn)}>REMOVE</button>
          </div>
        ))}
    </div>
  )
}
