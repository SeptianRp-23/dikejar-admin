const postData = document.querySelector("#datalist");

// Get Data
function getData() {
    db.collection("karyawan").orderBy('nama').get()
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

// Render
function renderData(doc){
    let tr = document.createElement('tr');
    let id = document.createElement('td');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let level = document.createElement('td');
    let alamat = document.createElement('td');
    let telpon = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    id.textContent = doc.data().id;
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    level.textContent = doc.data().level;
    alamat.textContent = doc.data().alamat;
    telpon.textContent = doc.data().telpon;

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(telpon);
    tr.appendChild(alamat);
    tr.appendChild(level);
    tr.appendChild(email);

    postData.appendChild(tr);
}