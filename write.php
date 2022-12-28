<?php
$myFile = "file.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
 if(isset($_POST['Norm'])){
		fwrite($fh, 0 .PHP_EOL);	//write from Web
		$Base = $_POST["Base"].PHP_EOL;
		fwrite($fh, $Base);
		$Shoulder = $_POST["Shoulder"].PHP_EOL ;
		fwrite($fh, $Shoulder);
		$Elbow = $_POST["Elbow"].PHP_EOL;
		fwrite($fh, $Elbow);
		$Wrist = $_POST["Wrist"].PHP_EOL;
		fwrite($fh, $Wrist);
		$Gripper = $_POST["Gripper"].PHP_EOL;
		fwrite($fh, $Gripper);
	}
	elseif(isset($_POST['Algo']))fwrite($fh, 1 .PHP_EOL); // Algo mode
	else fwrite($fh, 2 .PHP_EOL); // read from serial.
fclose($fh);
?>

