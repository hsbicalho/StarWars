import React, { useEffect, useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../service/fetchPlanets';

const TableContext = createContext();

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  const requestPlanets = async () => {
    const aux = await fetchPlanets();
    setData(aux.results);
  };

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <TableContext.Provider value={ { data, setData } }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const useDataPlanets = () => {
  const context = useContext(TableContext);

  if (!context) throw new Error('useDataPlanets munst be used within a TableProvider');

  return context;
};

export { TableProvider, useDataPlanets };
