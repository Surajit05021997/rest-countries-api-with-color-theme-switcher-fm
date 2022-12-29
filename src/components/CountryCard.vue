<template>
  <div class="country-card">
    <router-link
      :to="{ name: 'Country Details', params: { countryCode } }"
    >
      <img :src="flagImageUrl" alt="">
      <div class="country-details-summary">
        <p class="country-name">{{ this.name }}</p>
        <p><span class="country-detail-title">Population: </span>{{ this.population }}</p>
        <p><span class="country-detail-title">Region: </span>{{ this.region }}</p>
        <p><span class="country-detail-title">Capital: </span>{{ this.capital }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Country Card',
  props: ['name', 'capital', 'region', 'population', 'flagImageUrl', 'countryCode'],
}
</script>