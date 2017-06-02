/*We have the guy's resultant vector and his last dish's feature vector
We have all dishes popular in his current location
We follow these steps:
1. do cosine similarity for clarifai's cuisine vectors. Find the 
2. do word matching for the dish features x recent dish

*/
// Add this code in the beginning. 
//------------------------------------------
//require('./jquery.csv.js'); This script uses the jquery-csv library for reading data from the Master Data Sheet csv file.
//I need to store the entire dish cuisine mapping stuff from the Data Sheet csv in a variable in the automation script
//Library link: https://github.com/evanplaice/jquery-csv
// Use the library to read the Master Data Sheet.csv file and store the entire data in a javascript object.
// var Cuisine_Data=
{
	attributes:[North Indian, South Indian, Desserts etc. etc.],
	data:["1 Aloo Methi",1,0,0,0,1,0,0,0,0]
}
// See the reference file Data_Reader2.php . It reads the csv data from Tempsheet.csv and echoes the json object. 
//You can either call it using ajax or use the above library for reading csv data and storing it in the javascript object

//------------------------------------------

// Calculate resultant cuisine vector of user using weighted averages. Recently eaten dish carries most weight
// The below ajax call needs to be edited. It uses fetch_resvectors.php to query the recovectors table to fetch the 
//resultant vector of that particular userID.
user_res_vec=[];
$.ajax({
	url: "fetch_resvectors.php",
	data: user_details,
	success: function(response)
	{
		// Add some business code here... user_res_vec=response or something
	}


})
Assuming his location is East, fetch all East Indian dishes from the Cuisine_Data object
var loc_dishes= array of East Indian dishes and cuisine values extracted from Cuisine_Data variable
// Both, [the arrays inside loc_dishes] and [user_res_vec] have the same array structure. First value is the dish name, and the remaining values are cuisine values. See above
// Now I will compute the cosine similarity between the user_res_vec and the main dishes of the user's location to get the most similar dishes 
var similarities=[];
for(i = 0; i < loc_dishes.length; i++)
{
    for(j=1;j<user_res_vec.length;j++)
    	vsum+=loc_dishes[i][j]*user_res_vec[i];
    similarities.push(vsum)
}

//Calculate smallest 5 dishes and return
