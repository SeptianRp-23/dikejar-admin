<?php
	include('koneksi.php');

	$sql = "SELECT * FROM lokasi";

	$query = $mysqli->query($sql);

	$data = array();

	while($row = $query->fetch_array(MYSQLI_ASSOC)){

		$data[] = array("id_lokasi" => $row['id_lokasi'], "nama" => $row['nama']);

	}

	echo json_encode($data);
?>