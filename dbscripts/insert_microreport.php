<?php

/*$servername = "mysql.hostinger.in";
$username = "u324452936_root";
$password = "123456";
$dbname = "u324452936_db";

$rows = array();
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}*/
$objfinal=json_decode($_POST['objfinal']);
echo $objfinal->latitude;
/*
$stmt = $conn->prepare("INSERT INTO microreports (messageid, report_time, latitude, longitude, restaurant_name, revgeo_full, food_timing, tastiness, rating, username, first_name, imgurl, weather, North_Indian, South_Indian, Chinese, Mughlai, Fast_Food, Desserts, Continental, East_Indian, West_Indian, serving) VALUES(?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ? )");
        $stmt->bind_param("sssssssssssssssssssssss",$objfinal->messageid, $objfinal->report_time, $objfinal->latitude, $objfinal->longitude, $objfinal->restaurant_name, $objfinal->revgeo_full, $objfinal->food_timing, $objfinal->tastiness, $objfinal->rating, $objfinal->username, $objfinal->first_name, $objfinal->imgurl, $objfinal->weather, $objfinal->North_Indian, $objfinal->South_Indian, $objfinal->Chinese, $objfinal->Mughlai, $objfinal->Fast_Food, $objfinal->Desserts, $objfinal->Continental, $objfinal->East_Indian, $objfinal->West_Indian, $objfinal->serving);
        $result = $stmt->execute();
        $stmt->close();
        
        echo json_encode($objfinal);
        // check for successful store
        /*if ($result) {
            $stmt = $this->conn->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            
            $stmt->bind_result($id, $unique_id, $name, $email, $image, $encrypted_password, $salt, $created_at, $updated_at);
            $stmt->fetch();
            $user = array('id'=>$id,'unique_id'=>$unique_id,'name'=>$name,'email'=>$email,'image'=>$image,'encrypted_password'=>$encrypted_password,'salt' => $salt,'created_at' => $created_at,'updated_at' =>$updated_at);

            //$user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            return $user;
        } else {
            return false;
        } commen heere
    



mysqli_close($conn);
*/
?>