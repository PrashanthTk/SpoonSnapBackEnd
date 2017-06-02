<?php
$myarr=[1,1,0,1];
function replace($val)
{
	if($val==1) return 2;
	if($val==0) return 3;
}
//$ans=array_map("replace",$myarr);
$ans=scandir("./data/Image_Dataset");

natsort($ans);

foreach ($ans as $key => $value) {
	echo $value;
}
#print_r($ans);
?>