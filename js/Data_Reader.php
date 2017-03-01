<?php
$file = fopen("./assets/Master Data Sheet.csv","r");
$dataset=[];
$attributes=fgetcsv($file);
$i=0;
while($i<5)
  {
  	$line=fgetcsv($file);
  	$splitted=array_filter($line,function($v,$k){
  		if($v=='1') return true;
  		if($v=='') return false;
  	},ARRAY_FILTER_USE_BOTH);
  	print_r($splitted);
  	#echo "<br>";
  	$i++;
  	$dataset[]=$line;
  }
  #echo json_encode($dataset);
  $fp = fopen('./assets/dataset.json', 'w');
fwrite($fp, json_encode($dataset));
fclose($fp);
$fp = fopen('./assets/attributes.json', 'w');
fwrite($fp, json_encode($attributes));
fclose($fp);


fclose($file);
?>
