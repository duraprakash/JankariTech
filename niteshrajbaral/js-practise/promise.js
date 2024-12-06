const promise= new Promise((resolve,reject)=>{
	let positive=true;
	if (positive){
		console.log(" positive");
	}
    else{
        console.log(" negative");
    }
})
promise
    .then(result=>{
        console.log(result);
    })
    .then(error=>{
        console.log(error);
    })
