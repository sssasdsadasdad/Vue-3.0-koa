import axios from 'axios';
const http = axios.create({
	baseUrl: 'http://127.0.0.1:3000'
})
export default axios;