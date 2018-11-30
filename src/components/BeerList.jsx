import React from 'react';
import HappyHourList from './HappyHourList';
import RegularBeerList from './RegularBeerList';
import { v4 } from 'uuid';
import Beer from '../models/Beer';

class BeerList extends React.Component {
  constructor() {
    super();
    this.state = {
      masterKegList: {
        [v4()]: new Beer('Original White Ale', 'Hoegaarden', 3.50, .049, true),
        [v4()]: new Beer('Summer Honey Wheat', 'Blue Moon', 2.75, .052, true),
        [v4()]: new Beer('Pale Lager', 'Bia Hanoi', 2.5, .042, false),
        [v4()]: new Beer('Bad Apple', 'Two Town Ciderhoues', 4.25, .105, false),
        [v4()]: new Beer('Pale Lager', 'Heineken', 1.99, .050, false),
      },
      currentlyAdding: false
    };

    this.handleEditKegAmount = this.handleEditKegAmount.bind(this);
    this.handleToggleAddForm = this.handleToggleAddForm.bind(this);
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);

    this._name = null;
    this._brand = null;
    this._price = null;
    this._alcoholContent = null;
  }

  handleEditKegAmount(id, amount) {
    let newKegList = this.state.masterKegList;
    newKegList[id].editAmount(amount);
    this.setState({
      masterKegList: newKegList
    });
  }

  handleToggleAddForm() {
    this.setState({ currentlyAdding: true});
  }

  handleAddingNewBeer(event) {
    event.preventDefault();
    let newKeg = new Beer(this._name.value, this._brand.value, this._price.value, this._alcoholContent.value, false);

    let newMasterList = Object.assign({}, this.state.masterKegList, {
      [v4()]: newKeg
    });

    this.setState({
      masterKegList: newMasterList,
      currentlyAdding: false
    })

    this._name = '';
    this._brand = '';
    this._price = '';
    this._alcoholContent = '';
  }

  render() {
    let addingForm = null;

    let addingFormStyle = {
      border: '1px solid black',
      color: 'white',
      margin: '10px auto',
      textAlign: 'left',
      width: '50%',
      padding: '15px',
    }
    

    if (this.state.currentlyAdding == false) {
      addingForm = <button onClick={this.handleToggleAddForm} className='btn btn-warning'>Add New Beer</button>
    } else {
      addingForm =
        <div className="edit-form">
          <form style={addingFormStyle} onSubmit={this.handleAddingNewBeer} className='add-form'>
            <h3>Add Keg Information</h3>
            <label>Name:</label>
            <input
              type='text'
              id='name'
              placeholder='Beer Name'
              ref={(input) => { this._name = input; }}
            /><br />
            <label>Brand:</label>
            <input
              type='text'
              id='brand'
              placeholder='Brand Name'
              ref={(input) => { this._brand = input; }}
            /><br />
            <label>Price:</label>
            <input
              type='number'
              id='price'
              placeholder='Price'
              step='any'
              ref={(input) => { this._price = input; }}
            /><br />
            <label>Alcohol Content:</label>
            <input
              type='number'
              id='alcoholContent'
              placeholder='Alcohol Content'
              step='any'
              ref={(input) => { this._alcoholContent = input; }}
            /><br />
            <button type='submit' className='btn btn-success'>Done</button>
          </form>
        </div>
    }
    return (
      <div className='beerlist-body'>
        <style jsx>{`

        `}</style>
        <HappyHourList
          kegList={this.state.masterKegList}
          onEditKegAmount={this.handleEditKegAmount}
        />
        <RegularBeerList
          kegList={this.state.masterKegList}
          onEditKegAmount={this.handleEditKegAmount}
        />
        {addingForm}
      </div>
    );
  }
}

export default BeerList;