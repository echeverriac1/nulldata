import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-date-picker';

const DataForm = ({onChange, onDateChange, onSubmit, employee}) => (



  <div className="row">
      <br/><br/><br/>
      <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
    		<form role="form">
    			<h2>REGISTRO <small> Formulario de registro de empleados.</small></h2>
          <hr className="colorgraph"/>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div className="form-group">
                  <input id="last_name" className="form-control input-lg"
                      type="text"
                      value={employee.name}
                      onChange={e => onChange('name', e.target.value)}
                      placeholder="Nombre"
                      required
                  />
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div className="form-group">
                <input id="last_name" className="form-control input-lg"
                    type="text"
                    value={employee.email}
                    onChange={e => onChange('email', e.target.value)}
                    placeholder="Correo Electronico"
                    required
                />
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div className="form-group">
                <DatePicker id="last_name" className="form-control input-lg"
                    onChange={e => onChange('date', e)}
                    value={employee.date}
                />
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div className="form-group">
                <input id="last_name" className="form-control input-lg"
                    type="text"
                    value={employee.address}
                    onChange={e => onChange('address', e.target.value)}
                    placeholder="direccion"
                />
              </div>
            </div>
          </div>

          <hr className="colorgraph"/>
          <div className="row">
            <div class="col-xs-6 col-md-6">
              <Link to="/" className="btn btn-primary btn-block btn-lg" tabindex="7">
                  Registrar
              </Link>
            </div>
            <div className="col-xs-6 col-md-6">
              <Link to="/" className="btn btn-success btn-block btn-lg">
                  Cancelar
              </Link>
            </div>
          </div>
        </form>
      </div>
  </div>


)

export default DataForm;
