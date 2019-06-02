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
          <FilteredItemCategory title="Primary Weapons" category="Primary"></FilteredItemCategory>
          <FilteredItemCategory title="Secondary Weapons" category="Secondary"></FilteredItemCategory>
          <FilteredItemCategory title="Melee Weapons" category="Melee"></FilteredItemCategory>
          <FilteredItemCategory title="Archwing" category="Archwing"></FilteredItemCategory>
          <FilteredItemCategory title="Sentinels" category="Sentinels"></FilteredItemCategory>
        </div>
      </div>
    </Provider>
  );
}

export default App;
