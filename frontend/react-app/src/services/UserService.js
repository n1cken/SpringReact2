import axios from 'axios'
import React from "react";

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService {


    //Axios uses GET via REST to get the JSON to this UserService instance.
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }


}

export default new UserService();