import React from 'react';
import { 
  nameCell, 
  emailCell,
  addressCell,
  dateCell
} from './styles';

const Row = ({ item: { name, email, address, date} }) => (
  <div className="Table__row">
      <div className="Table__cell" style={nameCell}>
        {name}
      </div>
      <div className="Table__cell" style={emailCell}>
        {email}
      </div>
      <div className="Table__cell" style={addressCell}>
        {address}
      </div>
      <div className="Table__cell" style={dateCell}>
        {date}
      </div>
  </div>
);

export default Row;
