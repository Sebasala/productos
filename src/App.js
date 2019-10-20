import React, { Component } from 'react'

// Data
import tiendas from './data/tiendas'

// Functions
import formatAsPrice from './functions/formatAsPrice'

// Components
import Product from './components/Product'
import Products from './components/Products'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tiendas: tiendas
    }
  }

  render() {
    const producto = this.state.tiendas[0].sucursales[0].productos[4];
    const productos = this.state.tiendas[0].sucursales[0].productos;

    return (
      <div className="tiendas">
        <Products productos={productos} />
      </div>
    )
  }
}

