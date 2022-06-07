import React from 'react';
import './App.css';
import { TableProvider } from './context/TableProvider';
import { FilterProvider } from './context/FilterProvider';
import Table from './Components/Table';
import Filter from './Components/Filter';

function App() {
  return (
    <TableProvider>
      <FilterProvider>
        <Filter />
        <Table />
      </FilterProvider>
    </TableProvider>
  );
}

export default App;
