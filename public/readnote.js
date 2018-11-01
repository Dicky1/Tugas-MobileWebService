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
// promt untuk pemasangan home to screen
window.addEventListener('beforeinstallprompt', function(e) {
	e.userChoice.then(function(choiceResult) {
  
	  console.log(choiceResult.outcome);
  
	  //check apkaah user menambahkan ke home atau tidak
	  if(choiceResult.outcome == 'dismissed') {
		console.log('User cancelled home screen install');
	  }
	  else {
		console.log('User added to home screen');
	  }
	});
  });


//program sederhana menggunakan notasi =>
//var URL="assets/catatan.json";
//	fetch(URL)
//	.then(response=> response.json())
//	.then(rsp => {
//		console.log(rsp.judul);
//		console.log(rsp.lokasi)
//	})
//	.catch((err)=> console.log(err));
