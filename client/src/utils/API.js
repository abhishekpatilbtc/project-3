import axios from "axios";

export default {
    // Gets all users
    getUsers: function() {
      return axios.get("/api/users");
    },
    getFriends: function(id) {
      return axios.get("/api/users/listfriends/" + id);
    },
    // Gets the user with the given id
    getUser: function(id) {
      return axios.get("/api/users/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function(id) {
      return axios.delete("/api/users/" + id);
    },
    //Gets all transaction for a user
    getTransactions: function(id) {
      return axios.get("/api/transactions/" + id);
    },
    uploadImage: function(id) {
      return axios.post("/api/users/" + id);
    }
  };