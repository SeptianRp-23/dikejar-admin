// var firebaseConfig = {
//     apiKey: "AIzaSyCVHIWEf6kvLrIBue9YB4hsrbdtfwmccSY",
// 	    authDomain: "testdb-ff1f3.firebaseapp.com",
// 	    databaseURL: "https://testdb-ff1f3.firebaseio.com",
// 	    projectId: "testdb-ff1f3",
// 	    storageBucket: "testdb-ff1f3.appspot.com",
// 	    messagingSenderId: "172110819803",
// 	    appId: "1:172110819803:web:37cf298a25df335f2df7fe"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//     const db = firebase.firestore();
//     console.log(db);

var firebaseConfig = {
    apiKey: "AIzaSyCpsQWo-cOjdRndUPpCIFMBRD2qY9_q1UM",
    authDomain: "kejar-maintenance.firebaseapp.com",
    databaseURL: "https://kejar-maintenance.firebaseio.com",
    projectId: "kejar-maintenance",
    storageBucket: "kejar-maintenance.appspot.com",
    messagingSenderId: "614644879109",
    appId: "1:614644879109:web:ae95be1b148b7fcedab16c",
    measurementId: "G-3XDCP12BXH",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    console.log(db)
  
//   const db = Firebase.firestore(); 
//   console.log(db);
  // var firebaseConfig = {
  //   apiKey: "AIzaSyCpsQWo-cOjdRndUPpCIFMBRD2qY9_q1UM",
  //   authDomain: "kejar-maintenance.firebaseapp.com",
  //   databaseURL: "https://kejar-maintenance.firebaseio.com",
  //   projectId: "kejar-maintenance",
  //   storageBucket: "kejar-maintenance.appspot.com",
  //   messagingSenderId: "614644879109",
  //   appId: "1:614644879109:web:ae95be1b148b7fcedab16c"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
    // const postData = document.querySelector("#data-list");
    // const addData = document.querySelector("#add-data-form");

    // // Get Data
    // function getData() {
    //     db.collection("testdb")
    //     .get()
    //     .then(snapshot => {
    //         snapshot.docs.forEach(docs => {
    //             renderData(docs);
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }
    // getData();

    // // Render
    // function renderData(doc){
    //     let li = document.createElement('li');
    //     let name = document.createElement('span');
    //     let kota = document.createElement('span');

    //     li.setAttribute('data-id', doc.id);
    //     name.textContent = doc.data().name;
    //     kota.textContent = doc.data().kota;

    //     li.appendChild(name);
    //     li.appendChild(kota);

    //     postData.appendChild(li);
    // }

    // database.ref(break).once('value', function(snapshot){
    //     console.log("hello")
    //     if(snapshot.exists()){
    //         var content = '';
    //         snapshot.forEach(function(data){
    //             var val = data.val();
    //             content +='<tr>';
    //             content += '<td>' + val.Order + '</td>';
    //             content += '<td>' + val.name + '</td>';
    //             content += '<td>' + val.orderNo + '</td>';
    //             content += '<td>' + val.Items + '</td>';
    //             content += '<td>' + val.Price + '</td>';
    //             content += '</tr>';
    //         });
    //         $('#orders').append(content);
    //     }
    // });  

    // // Add Data
    // addData.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     db.collection('testdb').add({
    //         name: addData.firstname.value,
    //         kota: addData.lastname.value
    //     });
    //     addData.firstname.value = '';
    //     addData.lastname.value = '';
    // })