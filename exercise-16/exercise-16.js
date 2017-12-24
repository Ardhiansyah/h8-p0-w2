var daftar_kegiatan = [];
var text = '';

function dapatkan_daftar_kegiatan() {
  text = '\t---To-do list---\n';
	if(daftar_kegiatan.length > 0){
		for (var i = 0; i < daftar_kegiatan.length; i++) {
		  text += 'Pukul ' + daftar_kegiatan[i][0] + '. Nama Kegiatan: ' + daftar_kegiatan[i][1] + '.\n';
		}
	}else{
	  text += 'Anda belum mempunyai daftar kegiatan.\n';
	}
	text += '-------------------------------------------------------------------------';
}

function index_kegiatan(pukul){
  var index = -1;
	for (var i = 0; i < daftar_kegiatan.length; i++) {
		if(daftar_kegiatan[i][0] === pukul) {
			index = i;
			break;
		}
	}
	return index;
}

function tambah_kegiatan(pukul, kegiatan) {
	var array_temp = [pukul, kegiatan];
	daftar_kegiatan.push(array_temp);
	daftar_kegiatan.sort();
}

function ubah_kegiatan(pukul, kegiatan) {
	var index = index_kegiatan(pukul);
	if(index != -1){
		daftar_kegiatan.splice(index, 1, [pukul, kegiatan]);
	}else{
		alert('kegiatan tidak ditemukan, periksa pukul kegiatan kembali');
	}
}

function hapus_kegiatan(pukul) {
	var index = index_kegiatan(pukul);
	if(index != -1){
		daftar_kegiatan.splice(index, 1);
	}else{
		alert('kegiatan tidak ditemukan, periksa pukul kegiatan kembali');
	}
}

while(true){
  dapatkan_daftar_kegiatan();
  if (confirm(text + '\nApakah anda ingin menambahkan kegiatan hari ini?')) {
    var pukul = '00:00';
    var kegiatan = '';
    pukul = prompt(text + '\nPukul berapa kegiatan anda akan dilakukan? ex: 14:00');
    kegiatan = prompt(text + '\nApa nama kegiatan anda? ex: Tidur Siang');
    if(pukul !== null){
      if(kegiatan !== null){
        tambah_kegiatan(pukul, kegiatan);
      }else{
        alert('kegiatan tidak boleh kosong');
      }
    }else{
      alert('pukul tidak boleh kosong');
    }
  } else if (confirm(text + '\nApakah anda ingin mengubah kegiatan hari ini?')) {
    var pukul = '00:00';
    var kegiatan = '';
    pukul = prompt(text + '\nPukul berapa kegiatan yang akan anda ubah? ex: 14:00');
    kegiatan = prompt(text + '\nApa nama kegiatan anda? ex: Tidur Siang');
    if(pukul !== null){
      if(kegiatan !== null){
        ubah_kegiatan(pukul, kegiatan);
      }else{
        alert('kegiatan tidak boleh kosong');
      }
    }else{
      alert('pukul tidak boleh kosong');
    }
  } else if (confirm(text + '\nApakah anda ingin menghapus kegiatan hari ini?')) {
    var pukul = '00:00';
    pukul = prompt(text + '\nPukul berapa kegiatan yang akan anda hapus? ex: 14:00');
    if(pukul !== null){
      hapus_kegiatan(pukul);
    }else{
      alert('pukul tidak boleh kosong');
    }
  }
  else {
      break;
  }
}