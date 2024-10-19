<template>
  <!-- content -->
  <div id="content" class="app-content box-shadow-z0" role="main">
    <Header/>
    <Footer/>
    <div ui-view class="app-body" id="view">
      <div class="padding">
        <div class="row">
          <div class="col-md-12">
            <UserTable/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";
import UserTable from "../components/common/UserTable.vue";

export default {
  components: {
    Footer,
    Header,
    UserTable,
  },
  created() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.$router.push('/login'); // Redirect to login if token is missing
    }
  },
};
</script>
