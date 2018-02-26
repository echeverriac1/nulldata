import React from 'react';

var Table = ({
  className,
  items = [],
  headers = [],
  headComponent: Head,
  rowComponent: Row,
  onChange,
  rowComponentKey,
  height,
}) => (
<div className="container">
  <div className="row">
      <br/><br/><br/>
      <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <form role="form">
          <h2>Test NullData <small> Carlos Echeverría.</small></h2>
          <hr className="colorgraph"/>
          <div className="Table__container">
          <div className="Table__head">
            <div className="Table">
                <div className="Table__head-row">
                  {Head !== undefined ? (
                    <Head />
                  ) : (
                    headers.map(header => (
                      <div key={header} className="Table__cell">
                        {header}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div id="table_body" className="Table__body" style={{ height: `100%` }}>
                {items.map((item, i) => (
                  <Row key={item[rowComponentKey] || i} item={item} index={i}/>
                ))}
              </div>
            </div>
          </div>

          <hr className="colorgraph"/>

        </form>
      </div>
  </div>
</div>











);

export default Table;
