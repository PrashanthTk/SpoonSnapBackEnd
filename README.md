<<<<<<< HEAD
The index.html is just an interface for playing with the Clarifai Food Recognition API. 
1."Add input images" button adds a batch of images along with their concepts and uploads them to the custom model. 
2. "Submit image url to Clarifai" button obtains the concepts of an image url ( hardcoded in index.js) by prediciting it using the custom model. It logs just one concept into the browser console.
Files:

1. imguploader.php : It parses the entire dataset, converts all images to their respective base64 strings and loads them into an array. Right now it just outputs the size of the array so as to not populate the webpage on execution.
2. Data_Reader.php: This reads the data sheet from "assets" folder which contains information about each dish in the training set. It stores the column names in an attributes.json file and the actual data in the dataset.json file.
=======
# SpoonSnapBackEnd
>>>>>>> 189e347ed7bee8f115208c939029b1e8f5f8a839
