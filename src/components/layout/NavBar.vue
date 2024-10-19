<template>
  <div id="aside" class="app-aside modal nav-dropdown">
    <!-- fluid app aside -->
    <div class="left navside dark dk" data-layout="column">
      <div class="navbar no-radius">
        <!-- brand -->
        <a class="navbar-brand"><!--
          <div ui-include="'../assets/images/logo.svg'"></div>
          <img src="../assets/images/logo.png" alt="." class="hide">-->
          <span class="hidden-folded inline">Blessing Tree</span>
        </a>

      </div>
      <div class="hide-scroll" data-flex>
        <nav class="scroll nav-light">

          <ul class="nav" ui-nav>
            <li class="nav-header hidden-folded">
              <small class="text-muted">Main</small>
            </li>

            <li>
              <router-link to="dashboard" class="navbar-vue">
                    <span class="nav-icon">
                      <i class="material-icons">&#xe8f0;
                      </i>
                    </span>
                <span class="nav-text">Dashboard</span>
              </router-link>
            </li>

            <li>
              <router-link to="families" class="navbar-vue">
                <span class="nav-icon">
                      <i class="material-icons">
                        <FamilyIcon/>
                      </i>
                    </span>
                <span class="nav-text">Families</span>
              </router-link>
            </li>

            <li>
              <router-link to="adults" class="navbar-vue">
                <span class="nav-icon">
                      <i class="material-icons">
                        <AdultIcon/>
                      </i>
                    </span>
                <span class="nav-text">Seniors</span>
              </router-link>
            </li>

            <li>
              <router-link to="dashboard" class="navbar-vue">
                <span class="nav-icon">
                      <i class="material-icons">
                        <SponsorIcon/>
                      </i>
                    </span>
                <span class="nav-text">Sponsors</span>
              </router-link>
            </li>

            <li>
              <router-link to="dashboard" class="navbar-vue">
                    <span class="nav-icon">
                      <i class="material-icons">
                        <GiftIcon/>
                      </i>
                    </span>
                <span class="nav-text">Gifts</span>
              </router-link>
            </li>

            <li class="nav-header hidden-folded">
              <small class="text-muted">Administration</small>
            </li>

            <li>
              <router-link to="users" class="navbar-vue">
                <span class="nav-icon">
                      <i class="material-icons">
                        <UserIcon/>
                      </i>
                    </span>
                <span class="nav-text">Users</span>
              </router-link>
            </li>

            <li>
              <router-link to="dashboard" class="navbar-vue">
                <span class="nav-icon">
                      <i class="material-icons">
                        <ReportIcon/>
                      </i>
                    </span>
                <span class="nav-text">Reports</span>
              </router-link>

            </li>
<!--
            <li class="nav-header hidden-folded">
              <small class="text-muted">Help</small>
            </li>

            <li class="hidden-folded" >
              <a href="docs.html" >
                <span class="nav-text">Documents</span>
              </a>
            </li>
-->
          </ul>
        </nav>
      </div>
      <div class="b-t">

      </div>
    </div>
  </div>
</template>

<script>
import FamilyIcon from "../common/FamilyIcon.vue";
import GiftIcon from "../common/GiftIcon.vue";
import SponsorIcon from "../common/SponsorIcon.vue";
import UserIcon from "../common/UserIcon.vue";
import ReportIcon from "../common/ReportIcon.vue";
import AdultIcon from "../common/AdultIcon.vue";

export default {
  components:{
    FamilyIcon,
    GiftIcon,
    SponsorIcon,
    UserIcon,
    ReportIcon,
    AdultIcon,
  },
  name: "NavBar"
}
</script>

<style scoped>
  .navbar-vue {
    color: lightgray;
    text-decoration: none;
  }
</style>