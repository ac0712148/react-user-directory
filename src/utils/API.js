import axios from "axios";

export default {
  getUser: function () {
    return axios.get(
      `https://randomuser.me/api/`
    );
  },
};
