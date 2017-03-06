<?php
$file = fopen("./assets/Master Data Sheet.csv","r");
$dataset=[];
$attributes=fgetcsv($file);
$i=0;
function replaceval($key,$val)
{
  if($key>1)
  {
    if($val==1) return "true";
    if($val=='') return "false";
  }
  else
    return $val;
}
while(($line=fgetcsv($file))!='')
  {
  	
    $splitted=array_map("replaceval",array_keys($line),$line);
  	//print_r($splitted);
    //ECHO "<BR>";
    //$i++;
  	$dataset[]=$splitted;
  }
  //echo sizeof($dataset);

  #echo json_encode($dataset);
  $fp = fopen('./assets/dataset.json', 'w');
fwrite($fp, json_encode($dataset));
fclose($fp);
$fp = fopen('./assets/attributes.json', 'w');
fwrite($fp, json_encode($attributes));
fclose($fp);


fclose($file);
?>
