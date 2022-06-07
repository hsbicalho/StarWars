import React from 'react';
import { useDataPlanets } from '../context/TableProvider';
import { useFilterPlanets } from '../context/FilterProvider';
import tableHeader from '../public/tableHeader';

function Table() {
  const { planetFilter } = useFilterPlanets();
  const { data } = useDataPlanets();
  const filteredPlanetsFromData = data.filter(
    (planet) => planet.name.toLowerCase()
      .includes(planetFilter.filterByName.name.toLowerCase()),
  );
  return (
    <div>
      <table>
        {
          <thead>
            <tr>
              {tableHeader.map((column) => (<th key={ column }>{column}</th>))}
            </tr>
          </thead>
        }
        {filteredPlanetsFromData.map((planet) => (
          <tbody key={ planet.name }>
            <tr>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
