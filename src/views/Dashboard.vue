<template>
  <!-- content -->
  <div id="content" class="app-content box-shadow-z0" role="main">
    <Header/>
    <Footer/>
    <div ui-view class="app-body" id="view">
      <WelcomeHeader/>
      <div class="padding">
        <WidgetRow/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import WelcomeHeader from "../components/layout/WelcomeHeader.vue";
import WidgetRow from "../components/widgets/WidgetRow.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: {
    Footer,
    WelcomeHeader,
    WidgetRow,
    Header,
  },
  created() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.$router.push('/login'); // Redirect to login if token is missing
    }
  },
};
</script>
