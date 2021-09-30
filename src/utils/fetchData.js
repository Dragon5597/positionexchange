import axios from "axios";
import { API_URL } from "../constants/index";

export const getDataAPI = async (url, token) => {
	const res = await axios.get(`${API_URL}/api/${url}`, {
		headers: { Authorization: token }
	});
	return res;
};

export const postDataAPI = async (url, payload, token) => {
	const res = await axios.post(`${API_URL}/api/${url}`, payload, {
		headers: { Authorization: token },
		withCredentials: true
	});
	return res;
};

export const putDataAPI = async (url, payload, token) => {
	const res = await axios.put(`${API_URL}/api/${url}`, payload, {
		headers: { Authorization: token }
	});
	return res;
};

export const patchDataAPI = async (url, payload, token) => {
	const res = await axios.patch(`${API_URL}/api/${url}`, payload, {
		headers: { Authorization: token }
	});
	return res;
};

export const deleteDataAPI = async (url, token) => {
	const res = await axios.delete(`${API_URL}/api/${url}`, {
		headers: { Authorization: token }
	});
	return res;
};
