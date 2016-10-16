import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  
  goToStore(event) {
    event.preventDefault();
    // first grab the text from the input box
    console.log('you changed the url', this.storeInput.value);

    // now transition to the correct page

  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* Look here */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
