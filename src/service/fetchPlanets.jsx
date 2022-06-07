const fetchPlanets = async () => {
  const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responsePlanets = await fetchApi.json();
  return responsePlanets;
};

export default fetchPlanets;
