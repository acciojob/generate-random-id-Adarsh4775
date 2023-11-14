function makeid(l) {
  // write your code here
	let charNumLoop = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let randomStr="";

	for(i=0; i<l; i++)
		{
			let randomIndex = Math.floor(Math.random() * charNumLoop.length);
			randomStr += charNumLoop[randomIndex];
		}
	return randomStr;
} 

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
