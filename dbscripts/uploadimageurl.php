<?php

$response = array("error" => FALSE);
	if (isset($_POST['url'])){
	    $response["error"] = FALSE;
        $response["DishName"] = "aloo methi";
        
	}
echo json_encode($response);
?>