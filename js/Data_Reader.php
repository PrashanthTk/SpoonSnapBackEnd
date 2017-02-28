<?php
$file = fopen("./assets/Master Data Sheet.csv","r");
$dataset=[];
$attributes=fgetcsv($file);
$i=0;
while($i<5)
  {
  	$line=fgetcsv($file);
  	#print_r($line);
  	#echo "<br>";
  	$i++;
  	$dataset[]=$line;
  }
  echo json_encode($dataset);
  $fp = fopen('./assets/dataset.json', 'w');
fwrite($fp, json_encode($dataset));
fclose($fp);
$fp = fopen('./assets/attributes.json', 'w');
fwrite($fp, json_encode($attributes));
fclose($fp);


fclose($file);
?>
