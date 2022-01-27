
// You should implement your task here.

module.exports = function towelSort(arr1) {
	let newArr = new Array ();
	if (arr1 == undefined) {
        return [];
    }
	for (let i = 0; i < arr1.length; i++) {		
		if (i % 2 !== 0) {				
            for (l =  arr1[i].length-1; l >=; l--) {
                newArr.push(arr1[i][l]);    
                  }		
		}
		else {
			let l = arr1[i].length;				
            for (let l = 0; l < arr1[i].length; l++) {					
                newArr.push(arr1[i][l]);   				
            }	
  		}
	}

	return newArr;
}
