//node js to reverse colors

var array =    ["rgba(72,22,33,1) 0%,",
				"rgba(72,22,33,1) 14%,",
				"rgba(52,16,32,1) 43%,",
				"rgba(38,39,93,1) 46%,",
				"rgba(57,87,178,1) 49%,",
				"rgba(57,87,178,1) 65%,",
				"rgba(53,49,81,1) 73%,",
				"rgba(53,49,81,1) 100%);"]

var reversed = array.reverse();

reversed.forEach(function(color, index){
	console.log(color);
})