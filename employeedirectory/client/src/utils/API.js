import axios from "axios";

export default {
  // Gets all employees
  getEmployees: function() {
    return axios.get("/api/employees");
  }
};
