import React from 'react';
import { useFilterPlanets } from '../context/FilterProvider';

function Filter() {
  const { planetFilter, setPlanetFilter } = useFilterPlanets();

  function handleChange({ target }) {
    setPlanetFilter({ ...planetFilter, filterByName: { name: target.value } });
  }
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ planetFilter.filterByName.name }
        onChange={ (event) => handleChange(event) }
      />
    </div>
  );
}

export default Filter;
