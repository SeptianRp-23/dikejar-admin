const postData = document.querySelector("#listTugas");

// Get Data
function getData() {
    db.collection("task").get()
    .then(snapshot => {
        snapshot.docs.forEach(docs => {
            renderData(docs);
        });
    })
    .catch(err => {
        console.log(err);
    });
}
getData();
{/* <html>
    <body>
        <p id="action"> Tes </p>
    </body>
</html> */}
// Render
function renderData(doc){
    let tr = document.createElement('tr');
    let tiket = document.createElement('td');
    let nama = document.createElement('td');
    let lokasi = document.createElement('td');
    let tempat = document.createElement('td');
    let mesin = document.createElement('td');
    let no_mesin = document.createElement('td');
    let tanggal = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    tiket.textContent = doc.data().tiket;
    nama.textContent = doc.data().nama;
    lokasi.textContent = doc.data().lokasi;
    tempat.textContent = doc.data().tempat;
    mesin.textContent = doc.data().mesin;
    no_mesin.textContent = doc.data().serial;
    tanggal.textContent = doc.data().tanggal;

    tr.appendChild(tiket);
    tr.appendChild(nama);
    tr.appendChild(lokasi);
    tr.appendChild(tempat);
    tr.appendChild(mesin);
    tr.appendChild(no_mesin);
    tr.appendChild(tanggal);

    postData.appendChild(tr);
}