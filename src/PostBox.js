import React, { Component } from 'react';

/**
 * Este componente contiene el input y el text area
 * para crear un nuevo post.
 */
export default class PostBox extends Component {

  // Necesitamos un constructor para crear un estado
  // interno para este componente.
  constructor(props) {
    super(props);

    // Inicializamos el estado con cada uno de los
    // valore que va a tener inicialmente.
    // Por defecto no hay ningun texto en el input
    // tampoco lo hay en el text area.
    // Y por convención establecemos el id a 0.
    this.state = {
      title: '',
      summary: '',
      votes: 0,
      id: 0,
    };
  }

  handleClick() {
    this.props.onPostSubmit(this.state);
    this.setState({
      title: '',
      summary: '',
      votes: 0,
      id: 0,
    });
  }

  // Cuando el usuario tipea en el title cambiamos el estado.
  // Especificamente actualizamo la key title del estado.
  onTitleChange(e) {
    this.setState({title:e.target.value});
  }

  // Similar al anterior pero para el sumario.
  onSummaryChange(e) {
    this.setState({summary:e.target.value});
  }

  // Notese que como estamos utilizando this.setState en onTitleChange,
  // onSummaryChange y onPostSubmit entonces necesitamos evitar que javascript
  // nos apunte el this al input, textarea y button respectivamente. Para ello
  // utilizamos bind, fijando this a la instancia de PostBox.
  render() {
    return (
      <div className="col-md-12">
        <div className="form-group">
          <label>Title:</label>
          <input className="form-control" type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Summary</label>
          <textarea className="form-control" value={this.state.summary} onChange={this.onSummaryChange.bind(this)}/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}
