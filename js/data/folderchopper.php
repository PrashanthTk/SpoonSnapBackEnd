<?php
set_time_limit ( 0 );
function readimgFolder($imgfolder)
{
	$images=glob($imgfolder."/"."*.jpg",GLOB_BRACE);
	#echo $imgfolder;
	#print_r($images);
	#$images is an array of image file names.
	
	#$subarray=array_slice($images,85);
				foreach($images as $wasteimage)
					{
				  		unlink($wasteimage);
					}
					#echo sizeof($subarray); 
	
}

function readParentFolder($parent_dir,$flag,$tempdish)
{
	#global $objarray,$dataset;
    $index=0;


	/*if ($handle = opendir($parent_dir)) 
    {

        while ((false !== ($class = readdir($handle))))*/
    if( $flag=="class" )
    {
        $parent_items=scandir($parent_dir);
        #natsort($parent_items);
        #print_r($parent_items);
        foreach ($parent_items as $key => $class)
        {
            # code...
        
        	#echo $file;
        	
            if(in_array($class, array('.', '..'))) continue;
            
            
            	$subdir=$parent_dir . "/" . $class;
            	
            	
            	readParentFolder($subdir,"dish",null);
        }
    }
            if($flag=='dish')
            {
            	
            	#echo $parent_dir."<br>";
            	readimgFolder($parent_dir);
            	#$objarray[]=$tempdish;
                #echo json_encode($tempdish);
            	return;

            	#echo sizeof($tempdish->imgarray);
            }
        
    

        #closedir($handle);
    #}
	

}
readParentFolder("./Image_Dataset","class",null);
echo "Done";
?>