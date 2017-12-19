var total = 0;

for (var index = 1; index <= 100; index++) {
	if(index % 2 == 1)
		total += index;
	else
		total -= index;
}

console.log("TOTAL: " + total);