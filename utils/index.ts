import { FilterProps } from "@/types";

export  async function fetchCars(filters: FilterProps) {

  const {manufacturer, year, fuel, limit, model} = filters;

  const headers = {
    'X-RapidAPI-Key': 'becb43d42emshe58da87fdbc1170p1e3459jsn19fe39ffe6ec',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
    headers: headers
  });

  const result = await response.json();
  return result;
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
