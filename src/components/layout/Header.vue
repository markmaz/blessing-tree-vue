<template>
  <div class="app-header white box-shadow">
    <div class="navbar navbar-toggleable-sm flex-row align-items-center">

      <!-- Page title - Bind to $state's title -->
      <div class="mb-0 h5 no-wrap" ng-bind="$state.current.data.title" id="pageTitle"></div>

      <!-- navbar right -->
      <ul class="nav navbar-nav ml-auto flex-row">
        <li class="nav-item dropdown">
          <a class="nav-link p-0 clear" href="#" data-toggle="dropdown">
                  <span class="avatar w-32">
                    <img src="../../assets/images/avatar.png" alt="...">
                    <i class="on b-white bottom"></i>
                  </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>