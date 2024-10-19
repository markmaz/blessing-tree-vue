<template>
  <NavBar v-if="showNavBar" />
  <div :class="['content', { 'full-width': !showNavBar }]">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import {computed} from "vue";
export default {
  name: 'App',
  components: {NavBar},
  computed: {
    showNavBar(){
      return this.$route.path !== '/login'
    }
  }
};
</script>

<style>
@import url('assets/styles/app.css');
@import url('assets/angular-motion/dist/angular-motion.css');
@import url('assets/animate.css/animate.min.css');
@import url('assets/bootstrap/dist/css/bootstrap-grid.css');
@import url('assets/bootstrap/dist/css/bootstrap.css');
@import url('assets/bootstrap/dist/css/bootstrap-reboot.css');
@import url('assets/bootstrap-additions/dist/bootstrap-additions.css');
@import url('assets/fonts/roboto/font.css');
@import url('assets/material-design-icons/material-design-icons.css');
@import url('assets/glyphicons/glyphicons.css');
@import url('assets/font-awesome/css/font-awesome.min.css');
@import url('assets/material-design-icons/material-design-icons.css');
@import 'vue-material-design-icons/styles.css';
<style>
#app {
  display: flex;
}

.content {
  padding: 20px;
}

.full-width {
  margin-left: 0; /* Full width if sidebar is hidden */
}

.content:not(.full-width) {
  margin-left: 180px; /* Adjust this based on your sidebar width */
}
</style>
