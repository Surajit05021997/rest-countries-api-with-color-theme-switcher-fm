<template>
  <div class="home-container" v-if="countryDetails">
    <div class="controls">
      <div class="search-box">
        <label for="search-box">
          <img v-if="!isDarkModeOn" src="@/assets/search-solid.svg" alt="">
          <img v-else src="@/assets/search-solid-dark-mode.svg" alt="">
          <input type="search" v-model="searchInput" id="search-box" placeholder="Search for a country...">
        </label>
      </div>
      <div class="filter">
        <select name="filter" id="filter" v-model="regionSelected" aria-label="Filter by region">
          <option value="" disabled>Filter by region</option>
          <option v-for="country in getCountryList" :key="country" :value="country">{{ country }}</option>
        </select>
      </div>
    </div>
    <div class="country-card-container">
      <country-card
        v-for="country in countryDetails" :key="country?.name?.official"
        :name="country?.name?.official"
        :population="country?.population"
        :region="country?.region"
        :capital="country.capital?.[0]"
        :flagImageUrl="country?.flags?.svg"
        :countryCode="country?.cca3"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CountryCard from '../components/CountryCard.vue';

export default {
  name: 'Home',
  data() {
    return {
      searchInput: '',
      regionSelected: '',
    };
  },
  components: {
    CountryCard,
  },
  computed: {
    ...mapState(['isDarkModeOn', 'allCountryDetails', 'countryDetails']),
    getCountryList() {
      let countryList = new Set();
      this.allCountryDetails.forEach(country => {
        countryList.add(country.region);
      });
      return Array.from(countryList).sort();
    },
  },
  methods: {
    ...mapActions(['getCountryDetailsByNameAction', 'getCountryDetailsByRegionAction']),
  },
  watch: {
    searchInput(newVal) {
      this.getCountryDetailsByNameAction(newVal);
      this.regionSelected = '';
    },
    regionSelected(newVal) {
      if(newVal !== '') {
        this.getCountryDetailsByRegionAction(newVal);
      }
    }
  },
};
</script>
