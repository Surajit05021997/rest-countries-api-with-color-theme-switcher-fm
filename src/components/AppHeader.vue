<template>
  <header>
    <div class="header-container">
      <h1 @click="loadAllCountry">
        <router-link to="/">Where in the world?</router-link>
      </h1>
      <button class="dark-mode-button" @click="toggleDarkMode">
        <img v-if="!isDarkModeOn" :src="require('@/assets/moon-regular.svg')" alt="">
        <img v-else :src="require('@/assets/moon-solid.svg')" alt="">
        <p>Dark Mode</p>
      </button>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {
      isDarkModeOn: false,
    };
  },
  methods: {
    ...mapActions(['setDarkMode', 'getCountryDetailsAction']),
    loadAllCountry() {
      this.getCountryDetailsAction();
    },
    toggleDarkMode() {
      if(!this.isDarkModeOn) {
        document.querySelector('.app-container').classList.add('dark-mode');
        this.isDarkModeOn = true;
        this.setDarkMode(true);
      } else {
        document.querySelector('.app-container').classList.remove('dark-mode');
        this.isDarkModeOn = false;
        this.setDarkMode(false);
      }
    }
  },
};
</script>