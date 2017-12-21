var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function convertMonth(month) {
	switch(month) {
		case 01: { return 'Januari'; }
		case 02: { return 'Februari'; }
		case 03: { return 'Maret'; }
		case 04: { return 'April'; }
		case 05: { return 'Mei'; }
		case 06: { return 'Juni'; }
		case 07: { return 'Juli'; }
		case 08: { return 'Agustus'; }
		case 09: { return 'September'; }
		case 10: { return 'Oktober'; }
		case 11: { return 'Nopember'; }
		case 12: { return 'Desember'; }
	}
}

function dataHandling2(input_) {
	input_.splice(0, 6, input_[0], input_[1] + 'Elsharawy', 'Provinsi ' + input_[2], input_[3], 'Pria', 'SMA Internasional Metro');

	var date = input_[3].split('/').map(function (item) {
		return parseInt(item, 10);
	})
	var joinDate = date.join('-');
	var sortDate = date.sort();

	console.log(input_);
	console.log(convertMonth(date[1]));
	console.log(sortDate);
	console.log(joinDate);
	console.log(input_[1].slice(0, 15));
}

dataHandling2(input);