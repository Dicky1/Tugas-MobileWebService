//var URL="assets/catatan.txt";
var URL="catatan.json";
	fetch(URL).then(function(response)
	{
		if (response.status !== 200) 
		{ //HTTP Status
			console.log('Ada masalah. Status Code: ' +
			response.status);
			return;
		}
		//return response.text()
		return response.json()
	})
	//.then( text => {
	//	let t = document.getElementById('hasil')
	//	t.textContent = text;
	//})
	.then(function(res){
		console.log(res.judul);
		console.log(res.lokasi);
	})
	//.catch( err => console.log(err) );
	.catch(function(err){
		console.log(err)
	})


//program sederhana menggunakan notasi =>
//var URL="assets/catatan.json";
//	fetch(URL)
//	.then(response=> response.json())
//	.then(rsp => {
//		console.log(rsp.judul);
//		console.log(rsp.lokasi)
//	})
//	.catch((err)=> console.log(err));