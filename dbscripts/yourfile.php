<?php
require_once 'include/DB_Functions.php';
$db = new DB_Functions();
echo count(array('oindndsoi','23', '2017-03-22T15:06:36.419Z', '12.9359455', '77.535965', 'Hotel California', 'Outer Ring Rd, Veerabhadra Nagar, Banashankari Stage I, Banashankari, Bengaluru, Karnataka 560085, India', 'Breakfast', 'Delicious', '4', 'prashanthtk@yahoo.com', 'Prashanth', 'http://media.krumbs.io/3fd442b1-f019-4290-b0fd-52eb9c102143.jpeg', 'Sunny', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'));
$youresponse=$db->store_report('oindndsoi','23', '2017-03-22T15:06:36.419Z', '12.9359455', '77.535965', 'Hotel California', 'Outer Ring Rd, Veerabhadra Nagar, Banashankari Stage I, Banashankari, Bengaluru, Karnataka 560085, India', 'Breakfast', 'Delicious', '4', 'prashanthtk@yahoo.com', 'Prashanth', 'http://media.krumbs.io/3fd442b1-f019-4290-b0fd-52eb9c102143.jpeg', 'Sunny', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1');
//$youresponse=$db->store_report('oindndsasdsoi', '2017-03-22T15:06:36.419Z', 12.9359455, 77.535965, 'Hotel California', 'Outer Ring Rd, Veerabhadra Nagar, Banashankari Stage I, Banashankari, Bengaluru, Karnataka 560085, India', 'Breakfast', 'Delicious', '4', 'prashanthtk@yahoo.com', 'Prashanth', 'http://media.krumbs.io/3fd442b1-f019-4290-b0fd-52eb9c102143.jpeg', 'Sunny', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
echo json_encode($youresponse);
?>