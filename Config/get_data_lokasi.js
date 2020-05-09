$(document).ready(function() { 
		$("#lokasi").append('<option value="">Lokasi</option>'); 
		$("#tempat").html(''); 
		$("#tempat").append('<option value="">Nama Tempat</option>');
		$("#mesin").append('<option value="">Nama Mesin</option>');
		$("#serial").append('<option value="">No Mesin</option>');
			url = 'get_lokasi.php'; 
			$.ajax({ 
			url: url, 
			type: 'GET', 
			dataType: 'json', 
			success: function(result) { 
				var data_tampung = {}
				for (var i = 0; i < result.length; i++) 
					$("#lokasi").append('<option value="' + result[i].id_lokasi + '">' + result[i].nama + '</option>');
					// data_tampung = result[i].id_lokasi,
					// console.log(data_tampung);

				}
			});
		}); 

		
		$("#lokasi").change(function(){ 
			var namaLokasi = $( "#lokasi option:selected" ).text();
			var id_lokasi = $("#lokasi").val();
			var url = 'get_tempat.php?id_lokasi=' + id_lokasi; 
			$("#tempat").html('');$("#tempat").append('<option value="">Nama Tempat</option>');
			$.ajax({
			url : url, 
			type: 'GET', 
			dataType : 'json', 
				success : function(result){ 
					for(var i = 0; i < result.length; i++) 
					$("#tempat").append('<option value="'+ result[i].id_tempat +'">' + result[i].nama_tempat + '</option>');
				} 
			});
			let namaTempat = ''
			$("#tempat").change(function(){
				namaTempat =  $( "#tempat option:selected" ).text();
			})

		
		$(document).ready(function() { 
		// $("#mesin").append('<option value="">Nama Mesin</option>'); 
		$("#serial").html(''); 
		$("#serial").append('<option value="">No Mesin</option>'); 
			url = 'get_mesin.php'; 
			$.ajax({ url: url, 
			type: 'GET', 
			dataType: 'json', 
			success: function(result) { 
				for (var i = 0; i < result.length; i++)
					$("#mesin").append('<option value="' + result[i].id_mesin + '">' + result[i].nama + '</option>'); 
				} 
			}); 
		}); 
		$("#mesin").change(function(){ 
			var namaMesin = $( "#mesin option:selected" ).text();
			var id_mesin = $("#mesin").val(); 
			var url = './get_serial.php?id_mesin=' + id_mesin; 
			$("#serial").html('');$("#serial").append('<option value="">No Mesin</option>');
			$.ajax({
			 url : url, 
			type: 'GET', 
			dataType : 'json', 
				success : function(result){ 
					for(var i = 0; i < result.length; i++)
					$("#serial").append('<option value="'+ result[i].id_serial +'">' + result[i].no_key + '</option>'); 
				} 
			});  
			let noSerial = ''
			$("#serial").change(function(){
				noSerial =  $( "#serial option:selected" ).text();
			})
			const addData = document.querySelector("#add-data-form");

			// Add Data
			addData.addEventListener('submit', (e) => {
			    e.preventDefault();
			    db.collection('task').add({
			        tiket: addData.notugas.value,
			        nama: addData.nama.value,
			        lokasi: namaLokasi,
			        tempat: namaTempat,
			        mesin: namaMesin,
			        serial: noSerial,
			        tanggal: addData.date.value,
			        status: "terinput"

			    }).then(function(){
			        Swal.fire(
					  'Success!',
					  'Data Berhasil Disimpan!',
					  'success'
					)
			    })
			    .catch(err => {
			        console.log(err)
			    });
			})
		});

		});

		

	



	