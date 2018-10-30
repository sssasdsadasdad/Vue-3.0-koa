import http from './http.js';
//注册
 export const reg = (name,password,confirm) => {
 	
		return new Promise((resolve, reject) => {
			
			http.post('/reg', {name, password, confirm}).then(res => {
				if(res.data.code == 2000){
					resolve(res.data)
				} else {
					reject(res.data)
				}
			})
			
		})
	
 }
//登录
export const login = data => {
	return new Promise((resolve, reject) => {
		http.post('/login', data).then(res => {
			if(res.data.code == 2000){
				resolve(res.data);
			} else {
				reject(res.data);
			}
		})
	})
}
