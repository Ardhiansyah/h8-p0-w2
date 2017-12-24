SIMPAN ARRAY 2 DIMENSI "daftar_kegiatan" dengan nilai []
SIMPAN STRING "text" dengan nilai "''"

BUAT FUNGSI "dapatkan_daftar_kegiatan"
	Isi nilai pada "text" dengan "'---To-do list---'"
	IF isi ARRAY "daftar_kegiatan" lebih dari 0
		ULANGI "iterasi" dari 0 sampai kurang dari isi ARRAY "daftar_kegiatan" dengan pengulangan +1
			Tambahkan nilai pada "text" dengan "'Pukul ' + "daftar_kegiatan[iterasi][0]" + '. Nama Kegiatan: ' + "daftar_kegiatan[iterasi][1]" + '.'"
	ELSE
		tambahkan nilai pada "text" dengan "'Anda belum mempunyai daftar kegiatan.'"
	tambahkan nilai pada "text" dengan "'-------------------------------------------------------------------------'"

BUAT FUNGSI "index_kegiatan" INPUT "pukul"
	SIMPAN "index" dengan nilai -1
	ULANGI "iterasi" dari 0 sampai kurang dari isi ARRAY "daftar_kegiatan" dengan pengulangan +1
		IF "daftar_kegiatan[iterasi][0]" sama dengan "pukul"
			SIMPAN "index" dengan nilai "iterasi"
			BREAK
	RETURN "index"

BUAT FUNGSI "tambah_kegiatan" INPUT "pukul" dan "kegiatan"
	SIMPAN ARRAY "array_temp" dengan nilai [pukul, kegiatan]
	PUSH "array_temp" ke dalam "daftar_kegiatan"
	SORT "daftar_kegiatan"

BUAT FUNGSI "ubah_kegiatan" INPUT "pukul" dan "kegiatan"
	SIMPAN "index" dengan nilai dari FUNGSI "index_kegiatan" dengan input "pukul"
	IF "index" tidak sama dengan -1
		SPLICE "daftar_kegiatan" dengan input parameter "index", 1, ["pukul", "kegiatan"]
	ELSE
		PRINT 'kegiatan tidak ditemukan, periksa pukul kegiatan kembali'

BUAT FUNGSI "hapus_kegiatan" INPUT "pukul"
	SIMPAN "index" dengan nilai dari FUNGSI "index_kegiatan" dengan input "pukul"
	IF "index" tidak sama dengan -1
		SPLICE "daftar_kegiatan" dengan input parameter "index", 1
	ELSE
		PRINT 'kegiatan tidak ditemukan, periksa pukul kegiatan kembali'	

ULANGI
	FUNGSI "dapatkan_daftar_kegiatan"
	IF CONFIRM dengan nilai 'Apakah anda ingin menambahkan kegiatan hari ini?'
		BACA dan SIMPAN "pukul"
		BACA dan SIMPAN "kegiatan"
		IF "pukul" tidak sama dengan NULL
			IF "kegiatan" tidak sama dengan NULL
				FUNGSI "tambah_kegiatan" INPUT "pukul" dan "kegiatan"
			ELSE
				PRINT 'kegiatan tidak boleh kosong'
		ELSE
			PRINT 'pukul tidak boleh kosong'
	ELSE
	IF CONFIRM dengan nilai 'Apakah anda ingin mengubah kegiatan hari ini?'
		BACA dan SIMPAN "pukul"
		BACA dan SIMPAN "kegiatan"
		IF "pukul" tidak sama dengan NULL
			IF "kegiatan" tidak sama dengan NULL
				FUNGSI "ubah_kegiatan" INPUT "pukul" dan "kegiatan"
			ELSE
				PRINT 'kegiatan tidak boleh kosong'
		ELSE
			PRINT 'pukul tidak boleh kosong'
	ELSE
	IF CONFIRM dengan nilai 'Apakah anda ingin menghapus kegiatan hari ini?'
		BACA dan SIMPAN "pukul"
		IF "pukul" tidak sama dengan NULL
			FUNGSI "hapus_kegiatan" INPUT "pukul"
		ELSE
			PRINT 'pukul tidak boleh kosong'