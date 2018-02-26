import React, { Component } from 'react';
import { Link } from 'react-router';
import Table from './children/table';
import Head from './head';
import Row from './row';

const body = [
    {
        name: 'Jose',
        email: 'j@gmail.com',
        date: '20/11/92'
    },
    {
        name: 'Jose',
        email: 'j@gmail.com',
        date: '20/11/92'
    }
]

class List extends Component {
    constructor(){
        super();
        this.state = {
            body: body
        }
    }

    render(){
        return(
            <div className="content">
                <Table
                    headComponent={Head}
                    rowComponent={Row}
                    items={this.state.body}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-xs-6 col-md-6 col-md-offset-3">
                      <Link to="/form" className="btn btn-primary btn-block btn-lg" tabindex="7">
                          Registrar
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default List;
