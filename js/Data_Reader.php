<?php
$file = fopen("./data/Tempsheet.csv","r");
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
print_r ( sizeof($dataset));
  #echo json_encode($dataset);

$fp = fopen('./data/attributes.json', 'w');
fwrite($fp, json_encode($attributes));
fclose($fp);
$fp = fopen('./data/dataset.json', 'wb'); #dataset.json now contains the Tempsheet with true and false values for concepts.
fwrite($fp, json_encode($dataset));
fclose($fp);


fclose($file);
?>
