<template>
  <div class="box p-a-md">
    <h1>Users List</h1>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.userID }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.emailAddress }}</td>
        <td>
          <button @click="editUser(user.id)">Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import userService from "../../services/userService.js";

export default {
  data() {
    return {
      users: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;

      try {
        const response = await userService.getUsers();
        this.users = response.data; // Adjust this based on your API response structure
      } catch (err) {
        this.error = 'Error fetching users: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    editUser(userId) {
      // Implement edit user logic
      console.log(`Edit user with ID: ${userId}`);
    },
    deleteUser(userId) {
      // Implement delete user logic
      console.log(`Delete user with ID: ${userId}`);
    },
  },
  mounted() {
    this.fetchUsers(); // Fetch users when the component mounts
  },
};
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
}
.table th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
