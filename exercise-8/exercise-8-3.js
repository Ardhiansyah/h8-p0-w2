function processSentence(name_, age_, address_, hobby_) {
	return "Nama saya " + name_ + ", umur saya " + age_ + " tahun, alamat saya di " + address_ + ", dan saya punya hobby yaitu " + hobby_ + "!";
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);