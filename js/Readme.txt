Setup condition:
1. All images post cleaning must be organized in folders and placed in Food_Images_ASP folder
2. Temp folder is used to copy the batch of images you want to upload. The folder url mappings can all be seen in the index.js, Data_Reader.php and imguploader.php files


Steps to upload to the SpoonSnap model on Clarifai:
Assume for uploading images of a batch of dishes starting from dish number 25.
1. Edit Tempsheet.csv so that the second row is dish no.25 till dish 50.
2. Run Data_Reader.php and verify dataset.json file for dishes 25 till 50
3. Put folders from 25 to 50 from Food_Images_ASP inside Temp
4. Edit imguploader.php for sizeof(image) and just verify if each folder and concept vector match. Check line 13 in imguploader
5. Change loop condition in index.js
6. Push the blue button from the front-end
----------------------------
List some dishes you need in the dataset by researching for the most photographed dishes online.

--------------------------------
****Batches of 128 inputs at once
For each folder create a json file of objarray.
1. Put clarifai.inputs.create() inside a loop. 
----------------------------
-----------------------------
D1	D2	D3
5
4		3
	2
	    4
4
	1		