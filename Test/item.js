var getData = document.querySelector("#select-form");


// Get Data
// function readData() {
//     db.collection("karyawan").get()
//     .then(snapshot => {
//         snapshot.docs.forEach(docs => {
//             renderData(docs);
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }
// readData();

// Render
// function renderData(doc){
//     console.log(renderData);
//     let slc = document.createElement('option');
//     // let opt = document.createElement('option');
//     // let email = document.createElement('td');
//     // let level = document.createElement('td');
//     // let alamat = document.createElement('td');
//     // let telpon = document.createElement('td');

//     slc.setAttribute('data-id', doc.id);
//     slc.textContent = doc.data().nama;
//     // name.textContent = doc.data().name;
//     // email.textContent = doc.data().email;
//     // level.textContent = doc.data().level;
//     // alamat.textContent = doc.data().alamat;
//     // telpon.textContent = doc.data().telpon;

//     slc.appendChild(nama);
//     // tr.appendChild(name);
//     // tr.appendChild(telpon);
//     // tr.appendChild(alamat);
//     // tr.appendChild(level);
//     // tr.appendChild(email);

//     getData.appendChild(slc);
// }

// var database = firebase.database();
// database.ref('vehicles').once('value', function(snapshot){
//    if(snapshot.exists()){
//       var vehi_list = '';
//          snapshot.forEach(function(data){
//             var val = data.val();
//             vehi_list += '<option value="' + val.vehicle_number + '">' + val.vehicle_number + '</option>';
//          });

//             $('#vehinumInput').append(vehi_list);

// }

function vehi_num_mainte_event(){
    //Get text or inner html of the selected option
    var d = document.getElementById("numberInput1");
    var selectedText = d.options[d.selectedIndex].text;

    firebase.database().ref('karyawan').child('id').on('value', function(vehinumSnapshot) {
        var vehinumChildSnapshot = vehinumSnapshot.val();

        var queryRef = firebase.database().ref('karyawan').orderByChild('id').equalTo(selectedText);
        queryRef.on('value', function(querySnapshot) {
            querySnapshot.forEach(function(dinoSnapshot) {
                var vin_mainte = '';
                var plate_mainte = '';
                var val = dinoSnapshot.val();

                vin_mainte += val.vin;
                plate_mainte += val.plate_no;

                document.getElementById('vinInput1').value = vin_mainte;
                document.getElementById('platenoInput1').value = plate_mainte;
            });

        });

    });
}