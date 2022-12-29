import { createStore } from 'vuex';
import service from '@/service';

const state = {
  isDarkModeOn: false,
  allCountryDetails: [],
  countryDetails: [],
  selectedCountryDetails: null,
};

const mutations = {
  UPDATE_DARK_MODE(state, payload) {
    state.isDarkModeOn = payload;
  },
  UPDATE_ALL_COUNTY_DETAILS(state, payload) {
    state.allCountryDetails = payload;
  },
  UPDATE_COUNTY_DETAILS(state, payload) {
    state.countryDetails = payload;
  },
  UPDATE_SELECTED_COUNTRY_DETAILS(state, payload) {
    state.selectedCountryDetails = payload;
  },
};

const actions = {
  setDarkMode({commit}, payload) {
    commit('UPDATE_DARK_MODE', payload);
  },
  async getCountryDetailsAction({commit}) {
    const countryDetails = await service.getCountryDetails();
    commit('UPDATE_COUNTY_DETAILS', countryDetails.data);
    commit('UPDATE_ALL_COUNTY_DETAILS', countryDetails.data);
  },
  async getCountryDetailsByNameAction({commit}, payload) {
    let countryDetailsByName = [];
    if(payload === '') {
      countryDetailsByName = await service.getCountryDetails();
    } else {
      countryDetailsByName = await service.getCountryDetailsByName(payload);
    }
    commit('UPDATE_COUNTY_DETAILS', countryDetailsByName.data);
  },
  async getCountryDetailsByRegionAction({commit}, payload) {
    const countryDetailsByRegion = await service.getCountryDetailsByRegion(payload);
    commit('UPDATE_COUNTY_DETAILS', countryDetailsByRegion.data);
  },
  async getSelectedCountryDetailsAction({commit}, payload) {
    commit('UPDATE_SELECTED_COUNTRY_DETAILS', null);
    const selectedCountryDetails = await service.getSelectedCountryDetails(payload);
    commit('UPDATE_SELECTED_COUNTRY_DETAILS', selectedCountryDetails);
  }
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;