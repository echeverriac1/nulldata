import React, { Fragment } from 'react';
import {
  nameCell,
  emailCell,
  addressCell,
  dateCell
} from './styles';

var Head = () => (
  <Fragment>
    <div className="Table__cell" style={nameCell}>
      Nombre
    </div>
    <div className="Table__cell" style={emailCell}>
      Email
    </div>
    <div className="Table__cell" style={addressCell}>
      Dirección
    </div>
    <div className="Table__cell" style={dateCell}>
      Fecha
    </div>
  </Fragment>
);

export default Head;
