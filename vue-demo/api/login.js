import http from './http.js';
 export function reg(name,password,confirm){
 	
		return new Promise((resolve, reject) => {
			
			http.post('/reg', {name: name, password: password, confirm: confirm}).then(res => {
				resolve(res)
			})
			
		})
	
 }
