import axios from "axios";

axios.defaults.baseURL = 'https://project-api-pj-379fd6382ab3.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true