<?php

	include('koneksi.php');

	$sql = "SELECT * FROM mesin";

	$query = $mysqli->query($sql);

	$data = array();

	while($row = $query->fetch_array(MYSQLI_ASSOC)){

		$data[] = array("id_mesin" => $row['id_mesin'], "nama" => $row['nama']);

	}

	echo json_encode($data);
?>