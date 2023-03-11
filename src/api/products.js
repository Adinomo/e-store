import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

let API_URL = "https://fakestoreapi.com/products";

const callApi = createAsyncThunk('callApi', () => {
	return axios.get(`${API_URL}`).then((response) => response.data);
});

export default callApi;
