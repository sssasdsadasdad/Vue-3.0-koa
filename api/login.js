import http from './http.js';
 export const reg = (name,password,confirm) => {
 	
		return new Promise((resolve, reject) => {
			
			http.post('/reg', {name: name, password: password, confirm: confirm}).then(res => {
				if(res.data.code == 2000){
					resolve(res.data)
				} else {
					reject(res.data)
				}
			})
			
		})
	
 }
