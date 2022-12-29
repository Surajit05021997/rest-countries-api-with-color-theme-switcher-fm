<template>
  <div class="app-container">
    <app-header />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  created() {
    this.getCountryDetailsAction();
  },
  methods: {
    ...mapActions(['getCountryDetailsAction']),
  },
}
</script>
