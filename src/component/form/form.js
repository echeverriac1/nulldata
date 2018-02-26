import React, { Component } from 'react';
import DataForm from './children/dataform';
import Map from './children/map';
import {update} from '../list';

const API_CONFIG = {
    key:'AIzaSyASdqEa_TiJh82_xwQjo5jjNwmT4kvAAgQ',
    language: 'es'
}

const initialPosition = {lat: 48.858608, lng: 2.294471};

class Form extends Component {
    constructor(){
        super();
        this.state = {
            employee: {
                name: '',
                email: '',
                date: new Date(),
                address: ''
            },
            lat: 0,
            lng: 0,
            address: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.setLatLng = this.setLatLng.bind(this);
        this.searchMap = this.searchMap.bind(this);
    }

    onChange(key, value){
        this.setState({
            employee: {
                [key]: value
            }
        })
    }

    onSubmit(){
        alert("Guardado");
    }

    onDateChange(e){
        console.log(e);
    }

    setLatLng(lat, lng){
        this.setState({
            lat: lat,
            lng: lng
        });
    }

    searchMap(){
        if(this.state.lat !== 0 || this.state.lng !== 0){
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&language=es&key=${API_CONFIG.key}`;
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results)
                this.setState({
                    employee: {
                        address: data.results[0].formatted_address
                    }
                })
            })
        }else{
            console.log("nada")
        }
    }

    render(){
        return(
            <div className="content" >
                <DataForm
                    employee={this.state.employee}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <Map 
                    config={API_CONFIG} 
                    initialPosition={initialPosition}
                    setLatLng={this.setLatLng}
                    search={this.searchMap}/>
                <p>Lat: {this.state.lat} - Lng: {this.state.lng}</p>
            </div>
        )
    }
}

export default Form;
