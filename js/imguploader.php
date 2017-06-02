<?php
ini_set('max_execution_time', 300);
include ('Dish_Class.php');
$root="C:/wamp/www/SpoonSnapBackEnd/js/data/Temp";
$objarray=[];
$images = '';
$dataset=[];
$i1=0;
function imgupload($path)
{
	global $i1;
	$imagedata = file_get_contents($path);
    #echo $path."<br>";
	$img64 = base64_encode($imagedata);
    #$img64=5;
    $i1++;
    #echo $i1."<br>";
    #return 7;
	return $img64;
	
	#echo "Inside";
}
function readimgFolder($imgfolder)
{
	$images=glob($imgfolder."/"."*.jpg");
	#echo $imgfolder;
	#print_r($images);
	$myarray=[];
				foreach($images as $image)
					{
				  		$img=imgupload($image);
				  		$myarray[]=$img;
					}
					#echo sizeof($myarray); 
	return $myarray;
}

function readParentFolder($parent_dir,$flag,$tempdish)
{
	global $objarray,$dataset;
    $index=0;


	/*if ($handle = opendir($parent_dir)) 
    {

        while ((false !== ($class = readdir($handle))))*/
    if( $flag=="class" )
    {
        $parent_items=scandir($parent_dir);
        natsort($parent_items);
        #print_r($parent_items);
        foreach ($parent_items as $key => $class)
        {
            # code...
        
        	#echo $file;
        	
            if(in_array($class, array('.', '..'))) continue;
            
            
            	$subdir=$parent_dir . "/" . $class;
            	
            	#$i++;
            	#echo "<br>$subdir";
            	$dish=new Dish();
            	$dish->name=$class;
            	$dish->id=explode(" ",$dish->name)[0];

            	$dish->concepts=array_slice($dataset[$index++],2);
            	
            	#echo json_encode($dish);

            	#echo $subdir."<br>";
            	readParentFolder($subdir,"dish",$dish);
        }
    }
            if($flag=='dish')
            {
            	
            	#echo $parent_dir."<br>";
            	$tempdish->imgarray=readimgFolder($parent_dir);
                echo $tempdish->id;
            	#$objarray[]=$tempdish;
                $fp = fopen('./data/Food_JSON_ASP/'.$tempdish->id.'.json', 'wb');
                fwrite($fp, json_encode($tempdish));
                fclose($fp);
                #echo json_encode($tempdish);
            	return;

            	#echo sizeof($tempdish->imgarray);
            }
        
    

        #closedir($handle);
    #}
	

}
#dataset.json now contains the Master Data Sheet with true and false values for concepts.
function readData()
{
	global $dataset;
	$dataset=json_decode(file_get_contents("./data/dataset.json"));
}
readData();
#print_r(array_slice($dataset[0],2));
readParentFolder($root,"class",null);
#echo json_encode($objarray,JSON_PRETTY_PRINT);
echo "Done";
#changes are index varibale and the sizof on line 65 and on line 13
?>

