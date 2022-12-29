<template>
  <div v-if="selectedCountryDetails" class="country-details-container">
    <button class="primary-button back" @click="goBackToHomepage">Back</button>
    <div class="country-details">
      <img :src="selectedCountryDetails.flags.svg" alt="">
      <div class="country-details-text">
        <p class="country-name">{{ selectedCountryDetails.name.official }}</p>
        <div class="left-and-right-details">
          <div class="left-details">
            <p><span class="country-detail-title">Native Name: </span>{{ selectedCountryDetails.name.official }}</p>
            <p><span class="country-detail-title">Population: </span>{{ selectedCountryDetails.population }}</p>
            <p><span class="country-detail-title">Region: </span>{{ selectedCountryDetails.region }}</p>
            <p><span class="country-detail-title">Sub Region: </span>{{ selectedCountryDetails.subregion }}</p>
            <p><span class="country-detail-title">Capital: </span>{{ selectedCountryDetails.capital[0] }}</p>
          </div>
          <div class="right-details">
            <p><span class="country-detail-title">Top Level Domain: </span>{{ selectedCountryDetails.tld[0] }}</p>
            <p><span class="country-detail-title">currencies: </span>{{ Object.values(selectedCountryDetails.currencies)[0].name }}</p>
            <p><span class="country-detail-title">Languages: </span>{{ Object.values(selectedCountryDetails.languages).toString() }}</p>
          </div>
        </div>
        <div class="border-countries">
          <span class="country-detail-title">Border Countries: </span>
          <div class="border-countries-buttons">
            <button v-for="borderCode in selectedCountryDetails.borders" :key="borderCode" class="primary-button">
              <router-link :to="{ name: 'Country Details', params: { countryCode: borderCode } }">{{ this.getBorderCountry(borderCode) }}</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'CountryDetails',
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    ...mapState(['allCountryDetails', 'countryDetails', 'selectedCountryDetails']),
  },
  created() {
    this.getSelectedCountryDetailsAction(this.$route.params.countryCode);
  },
  methods: {
    ...mapActions(['getCountryDetailsAction', 'getSelectedCountryDetailsAction']),
    goBackToHomepage() {
      this.getCountryDetailsAction();
      this.$router.push({ name: 'Home' });
    },
    getBorderCountry(borderCode) {
      for(let i=0; i<this.allCountryDetails.length; i++) {
        if(this.allCountryDetails[i].cca3 === borderCode) {
          return this.allCountryDetails[i].name.official;
        }
      }
      return '';
    },
  },
};
</script>