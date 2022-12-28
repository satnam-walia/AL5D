<?php
$myFile = "file.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
 
$Algo=$_POST["$Algo"].PHP_EOL;
fwrite($fh, $Algo);

fclose($fh);
?>