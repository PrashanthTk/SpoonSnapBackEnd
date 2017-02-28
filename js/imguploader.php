<?php
$directory="./assets/chocolate_mousse/";
$myarray=[];
$images = glob($directory."*.jpg");
function imgupload($path)
{
	global $myarray;
	$imagedata = file_get_contents($path);
	$img64 = base64_encode($imagedata);
	$myarray[]=$img64;
	#echo "Inside";
}

foreach($images as $image)
{
  imgupload($image);
  #echo "$image";
}


/*$imagedata = file_get_contents("./assets/champions.jpg");
             // alternatively specify an URL, if PHP settings allow
$img1 = base64_encode($imagedata);
$myarray[]=$img1;
$imagedata = file_get_contents("./assets/champions1.png");
$img1 = base64_encode($imagedata);
$myarray[]=$img1;''';
*/
echo json_encode(sizeof($myarray));
?>
