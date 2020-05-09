<?php
	include 'koneksi.php';

	$id_mesin = isset($_GET['id_mesin']) ? $_GET['id_mesin'] : '';

	$sql = "SELECT * FROM no_mesin WHERE id_mesin= '$id_mesin'";

	$query = $mysqli->query($sql);

	$data = array();

	while($row = $query->fetch_array(MYSQLI_ASSOC)){
		$data[] = array("id_serial" => $row['id_serial'], "no_key" => $row['no_key']);
	}
	echo json_encode($data);
?>