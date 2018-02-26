import React, { Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';


class Map extends Component {

    componentDidMount(){
        loadGoogleMapsAPI( this.props.config ).then( googleMaps => {
            this.map = new googleMaps.Map( this.refs.map, {
                center: this.props.initialPosition,
                zoom: 16
            } );
            this.map.addListener('click', (event) =>
                this.props.setLatLng(event.latLng.lat(), event.latLng.lng())
            );
          }).catch( err => {
            console.error(err);
          });
    }



    render() {
        return (
            <div>
                <h1>mapa</h1>
                <button onClick={this.props.search}>Buscar</button>
                <div ref="map" style={{width: 500, height: 500}}>
                    loading map...
                </div>
            </div>
        )
    }
}

export default Map;
