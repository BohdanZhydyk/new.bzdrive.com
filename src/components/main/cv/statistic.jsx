import $ from 'jquery'


function bzStatistic( objPost, callback ){

	// let ip 			= localStorage.getItem('ip')
	// let unix 		= localStorage.getItem('unix')
	let handShake 	= localStorage.getItem('handShake')

	const API = "https://oldapi.bzdrive.com/"
	const objAuth = {file:"new.bzDrive.com/cv", handShake:handShake}

	$.post(API, {objAuth, objPost}, function(data){

		// console.log( "data", data )
		let dataAuth = ( JSON.parse(data) ).auth
		let dataPost = ( JSON.parse(data) ).post

		$.each(dataAuth, function(key, value){ localStorage.setItem(key, value) })
		callback(dataPost)
	})

}

// bzPost( {}, function(data){  })//console.log('callback', data)

export default bzStatistic