import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [planetFilter, setPlanetFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  return (
    <FilterContext.Provider value={ { planetFilter, setPlanetFilter } }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
const useFilterPlanets = () => {
  const context = useContext(FilterContext);

  if (!context) throw new Error('useFilterPlanets munst be used within a FilterProvider');

  return context;
};
export { FilterProvider, useFilterPlanets };
