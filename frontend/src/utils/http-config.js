import axios from "axios/index";

export const httpConfig = axios.create();

httpConfig.interceptors.response.use(function ({data, headers} ) {
	if(data.status === 200) {
		return data.data !== null
			? {message: null, data: data.data, status: 200, type: " alert alert-success", headers: {...headers}}
			: {message: data.message, status: 200, type: " alert alert-success", data: null, headers: {...headers}};
	}
	return {message: data.message, status: data.status, type: "alert alert-danger", data: null, headers: {...headers}}

}, function (error) {
	// Do something with response error
	console.log(error);
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log(error.request);
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message);
	}
	console.log(error.config);
	return Promise.reject(error);
});
