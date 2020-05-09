const addUser = document.querySelector("#add-user-form");

// Add Data

addUser.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('karyawan').add({
        id: addUser.id.value,
        name: addUser.nama.value,
        email: addUser.email.value,
        telpon: addUser.telpon.value,
        alamat: addUser.alamat.value,
        level: addUser.level.value
    }).then(function(){
        // clearText();
        Swal.fire(
            'Berhasil!',
            'Data Berhasil Disimpan!',
            'success'
        ) 

    addUser.reset()
    })
    .catch(err => {
        Swal.fire(
            'Gagal!',
            'Data Gagal Disimpan!',
            'error'

        )
    });
})  

