import axios from "axios";
import queryString from "querystring";
import { API_URL } from "../constants";

const axiosClient = axios.create({
	baseURL: API_URL,
	headers: {
		"content-type": "application/json"
	},
	withCredentials: true,
	paramsSerializer: (params) => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
	return config;
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		throw error;
	}
);

export default axiosClient;
