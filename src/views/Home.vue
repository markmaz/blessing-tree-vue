<template>

</template>

<script>
  export default {
  created() {
  const token = localStorage.getItem('authToken');
  if (!token) {
  this.$router.push('/login'); // Redirect to login if token is missing
}
},
};
</script>

<style scoped>

</style>