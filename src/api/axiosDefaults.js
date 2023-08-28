import axios from "axios";

axios.defaults.baseURL = 'https://project-api-pj-72df0ee6eb4b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true