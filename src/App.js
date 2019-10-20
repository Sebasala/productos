import React, { Component } from 'react';

// Data
import tiendas from './data/tiendas';

// Functions
import formatAsPrice from './functions/formatAsPrice';

// Components
import Product from './components/Product';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tiendas: tiendas
    }
  }

  render() {
    const precioFormateado = formatAsPrice(this.state.tiendas[0].sucursales[0].productos[0].precio);

    return (
      <div className="tiendas">
        <Product 
          nombre={this.state.tiendas[0].sucursales[0].productos[0].nombre}
          cantidad={this.state.tiendas[0].sucursales[0].productos[0].cantidad}
          precio={precioFormateado}
        />
      </div>
    )
  }
}

