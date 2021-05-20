import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=50";

export default {
    search: function() {
        return axios.get("https://randomuser.me/api/?results=50")
    }
};