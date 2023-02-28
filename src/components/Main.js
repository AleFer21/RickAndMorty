import React, { Component } from 'react';
import Cards from './Cards';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { personajes: [] };
    }

  render() {
    return (
      <main>
        <div className="imgBox">
          <img src="RyMTitulo.png" alt="titulo"/>
        </div>
        <Cards/>
      </main>
    )
  }
}

export default Main;
