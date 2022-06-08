import React, { useState } from 'react';
import { useFilterPlanets } from '../context/FilterProvider';
import { options, sizeComparation } from '../public/tableOptions';

function Filter() {
  const { planetFilter, setPlanetFilter } = useFilterPlanets();
  const { name } = planetFilter;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function handleChange({ target }) {
    setPlanetFilter({ ...planetFilter, filterByName: { name: target.value } });
  }
  function handleClick() {
    setPlanetFilter(() => ({
      ...planetFilter,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  }
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ (event) => handleChange(event) }
      />
      <div>
        <form>
          <select
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {options.map((option) => (<option key={ option }>{option}</option>))}
          </select>
          <select
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            {sizeComparation.map((option) => (<option key={ option }>{option}</option>))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => handleClick() }
          >
            Filtrar
          </button>
        </form>

      </div>
    </div>
  );
}

export default Filter;
