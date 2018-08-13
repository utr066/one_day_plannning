import React, { Component } from 'react';

import Header from './Header';
import CheckboxList from './CheckboxList';

class App extends Component {
    render() {
        return (
          <div>
            <Header />
            <CheckboxList />
          </div>
        );
    }
}

export default App;
