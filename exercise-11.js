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

var tahunLahir = 0;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));


if (peran == '') {
	peran = 'kacung';
}

for(var index = 1; index <= tahunLahir; index++){
	if(index % umur == 0){
		console.log(peran + ' ' + nama + ' menyerang monster!');
		monsterHealth -= umur;
	}
	if(index % kodeMonster == 0){
		console.log('monster menyerang ' + peran + ' ' + nama + '!');
		playerHealth -= kodeMonster;
	}
	if(index % umur == 0 && index % kodeMonster == 0){
		console.log('Health keduanya bertambah');
		playerHealth += kodeMonster;
		monsterHealth += umur;
	}
}

if(playerHealth > monsterHealth)
	console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
else
	console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');