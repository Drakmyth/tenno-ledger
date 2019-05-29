import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import './app.css';
import FilteredItemCategory from './components/FilteredItemCategory/filtered-item-category.component';
import store from './store/store';

const App: FunctionComponent = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <input type="text"></input>
          <p>Categories/Filters</p>
        </header>
        <div className="Categories">
          <FilteredItemCategory title="Warframes" category="Warframes"></FilteredItemCategory>
          <FilteredItemCategory title="Arcanes" category="Arcanes"></FilteredItemCategory>
        </div>
      </div>
    </Provider>
  );
}

export default App;
