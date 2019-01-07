const request = require('request');

export const imageRequest = async ( ctx, next ) => {
	await new Promise( function ( resolve, reject ) {
			let url = ctx.query.url
			// console.log( url );
			var req = request( {
				method: 'GET',
				encoding: null,
				uri: url
			}, function ( err, response, body ) {
				if ( err ) {
					return reject( err )
				}
				resolve( body )
			} )
		} )
		.then( ( body ) => {
			ctx.status = 200
			ctx.type = 'jpg'
			ctx.length = Buffer.byteLength( body )
			ctx.body = body
		} )
		.catch( ( err ) => {
			console.error( err )
		} )
}