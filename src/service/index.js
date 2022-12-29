import axios from 'axios';


const baseUrl = 'https://restcountries.com/v3.1';

async function getCountryDetails() {
  try {
    return await axios.get(`${baseUrl}/all`);
  } catch(error) {
    console.log(error);
  }
}

async function getCountryDetailsByName(name) {
  try {
    return await axios.get(`${baseUrl}/name/${name}`);
  } catch(error) {
    console.log(error);
  }
}

async function getCountryDetailsByRegion(region) {
  try {
    return await axios.get(`${baseUrl}/region/${region}`);
  } catch(error) {
    console.log(error);
  }
}

async function getSelectedCountryDetails(selectedCountry) {
  try {
    const selectedCountryDetailsData = await axios.get(`${baseUrl}/alpha/${selectedCountry}`);
    return selectedCountryDetailsData.data[0];
  } catch(error) {
    console.log(error);
  }
}

export default { getCountryDetails, getSelectedCountryDetails, getCountryDetailsByName, getCountryDetailsByRegion };