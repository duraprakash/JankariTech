const promise= new Promise((resolve,reject)=>{
	let positive=true;
	if (positive){
		console.log(" positive");
        resolve("Promise resolved successfully!");
	}
    else{
        console.log(" negative");
        reject("Promise rejected!");
    }
})
promise
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    })
