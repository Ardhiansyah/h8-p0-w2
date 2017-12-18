//input 1
var nama = 'Mikael';
var peran = '';

//input 2
// var nama = 'Nina';
// var peran = 'Ksatria';

//input 3
// var nama = 'Danu';
// var peran = 'Tabib';

//input 4
// var nama = 'Zero';
// var peran = 'Penyihir';


if (peran == '') {
	console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
}
else{
	console.log("Selamat datang di Dunia Proxytia, " + nama + "")

	if (peran == 'Ksatria') {
		console.log("Halo Ksatria " + nama = ", kamu dapat menyerang dengan senjatamu!")
	}
	else if (peran == 'Tabib') {
		console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
	}
	else if (peran == 'Penyihir') {
		console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
	}	
}