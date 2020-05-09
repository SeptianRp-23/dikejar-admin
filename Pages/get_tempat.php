<?php
	require_once 'koneksi.php';

	$id_lokasi = isset($_GET['id_lokasi']) ? $_GET['id_lokasi'] : '';

	$sql = "SELECT * FROM tempat WHERE id_lokasi= '$id_lokasi'";

	$query = $mysqli->query($sql);

	$data = array();

	while($row = $query->fetch_array(MYSQLI_ASSOC)){
		$data[] = array("id_tempat" => $row['id_tempat'], "nama_tempat" => $row['nama_tempat']);
	}
	echo json_encode($data);
?>
