import apiRoot from '../../app/api'

export  const api = { 
	login: (data) => apiRoot.post("/login", data),
	register: (data) => apiRoot.post("/register", data),
};