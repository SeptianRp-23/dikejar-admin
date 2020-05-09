<?php 
	
	$conn = mysqli_connect("localhost", "root", "passw0rd", "fog");
	if (!conn) {
		echo("Sorry, Connection Error . . .");
	}

	$val = $_GET["value"];
	$val_M = mysqli_real_escape_string($conn, $val);
	$sql="SELECT type, name FROM tempat WHERE type='$val_M'";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result)>0) {
		echo "<select>";
		while ($rows = mysqli_fetch_assoc($result)) {
			echo ("<option>".$rows["name"]."</option>");
		}
		echo "</select>";
	}else{
		echo "<select>
		<option>Select</option>
		</select>";
	}

 ?>