import useFetch from "./useFetch";

function useCountries(name) {
  const [data, error] = useFetch("https://restcountries.com/v3.1/all");
  var countries;

  if(data) {
    countries = JSON.parse(data).map(function(country) {
      return country.name.common;
    });

    countries = countries.sort((n1,n2) => (n1 > n2));

    if (name) countries = countries.filter((n) => n.toUpperCase().includes(name.toUpperCase()));
  }
  
  return countries;
}

export default useCountries;