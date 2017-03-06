<?php
$root="C:/wamp/www/clarifaidemo/js/data";
$myarray=[];
$images = '';
function imgupload($path)
{
	global $myarray;
	$imagedata = file_get_contents($path);
	$img64 = base64_encode($imagedata);
	$myarray[]=$img64;
	#echo "Inside";
}
function readimgFolder($imgfolder)
{
	$images=glob($imgfolder."/"."*.jpg");
				foreach($images as $image)
					{
				  		imgupload($image);
				  		#echo "$image";
					} 
}
function readParentFolder($parent_dir,$flag)
{
	
	if ($handle = opendir($parent_dir)) 
    {
        while (false !== ($class = readdir($handle)))
        {
        	#echo $file;
            if(in_array($class, array('.', '..'))) continue;
            $subdir=$parent_dir . "/" . $class;
            if( is_dir($subdir)&&$flag=="class" ){
            	#echo "<br>$subdir";
            	readParentFolder($subdir,"dish");
            	   }
            if($flag=='dish')
            	readimgFolder($subdir);
        }
        closedir($handle);
    }
	

}
readParentFolder($root,"class");


/*$imagedata = file_get_contents("./assets/champions.jpg");
             // alternatively specify an URL, if PHP settings allow
$img1 = base64_encode($imagedata);
$myarray[]=$img1;
$imagedata = file_get_contents("./assets/champions1.png");
$img1 = base64_encode($imagedata);
$myarray[]=$img1;''';
*/
echo json_encode($myarray);
?>