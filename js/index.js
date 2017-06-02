/*index.js
DETAILS
ACTIVITY
index.js
Sharing Info

General Info
Type
Javascript
Size
6 KB (6,047 bytes)
Storage used
6 KB (6,047 bytes)
Location
ClarifaiDemo
Owner
me
Modified
26 Feb 2017 by me
Opened
12:36 by me
Created
26 Feb 2017 with Google Drive Web
Description
Add a description
Download permissions
Viewers can download
*/

/*
 * index.js
 * Clarifai Basic Application demo code
 * You can reference Clarifai's JavaScript library to 
 * complete this demo available at 
 * https://github.com/Clarifai/clarifai-javascript
 */
/*
		[
			{
				id,name,
				imgarray,
				concepts
			}
		]			

				*/
var keys = getKeys();

//test_foodie keys
//var clientId = "onQhsd8qT-OqZyFUSYTgJL2UcsnjwhwFsPy8mmpO"
//var clientSecret = "_gLYFaq7SfkrewCPfIodFRjN0Up6cHvyEPKjCDiM"

//My First Application keys
//var clientId = "m3vjN-qeA9JvGDYEoabAqQtwNTnEPqo6Qh1cThg5"
//var clientSecret = "oMP6V_afSoyZCIc4a3hkGNVDrNxznS-CsIcG5-EO"

//Actual SpoonSnap keys
var clientId = "rRRKyoBzVMcEF_-9lbINqt73ISYXpWYYxp1nCE51"
var clientSecret = "FMIBfwrvMKRheknlFQcni9LwsT2TDnllDRIxW7cs"
var attributes=''		//Attributes of the dataset. Contains cuisine names for concepts
var model_input_list=[];		// array of model_input elements which is the Clarifai input parameter
var ClarifaiClient = new Clarifai.App(
  clientId,
  clientSecret
);

(function ($, Clarifai) {
	$(document).ready(function () {
		initialize()
	})

	// Finding a bunch of elements in the DOM
	var app = $(".app")
	var imageInput = $("#imageUrl");
	var submitButton = $("#submitBtn");
	var image = $("#image");
	var tagsContainer = $(".tags-container");
	var tags = $(".tags")
	var inputbtn=$("#inputBtn")
	var trainBtn=$("#trainBtn")
	//var searcher=$("#tksearcher")	
function data_processor(element)
{
	//console.log(element.name);
	//Each element is a dish here
	var concept_list=[];
	//prepare concepts array
	var i=0;
	for(var name in attributes)
	{
		//console.log(attributes[name]);
		if(attributes[name]!="ID" && attributes[name]!="Dish Name")
		{
			//console.log(i);
			var concept=
			{
				id:attributes[name],
				value:(element.concepts[i++]=="true"?true:false)
			}
			concept_list.push(concept);
		}
	}
	//console.log(concepts);
	//--------------
	//Difference between concept_list,elements.concepts is--> concept_list is an array of concept objects.
	// While element.concepts is an array of true,false values with numbers for keys
	var len=element.imgarray.length;
	for (var k=0;k<len;k++)
	{
		var model_input=
		{
			base64:element.imgarray[k],
			concepts:concept_list,
		};
		model_input_list.push(model_input);
	}


}


	function ImageUploader(event) {
		//console.log("After click")
/*		$.ajax({
			url:"./js/imguploader.php",

			dataType:"JSON",
			success: function(data)
{*/
// Edit the dimensions of this loop for reading json files only upto a certain name
console.log("Entered ImageUploader")

for (var a=51;a<53;a++)				
{
				$.ajax({
					url:"./js/data/Food_JSON_ASP/"+a+".json",
					dataType:'json',
					
					success: function(folderjson)
							{
										data_processor(folderjson);
										
										console.log("Dish number is \n"+folderjson.name );
										//console.log(model_input_list)
										
										ClarifaiClient.inputs.create(model_input_list).then(
									  trainModel,
									  errorHandler
									);
									function trainModel()
								{
										console.log("Finished adding inputs apparently and I'm inside createModel")
										ClarifaiClient.models.train("SpoonSnap").then(
									    function(response) {
									      console.log("Training right now")
									      console.log(response)
									    },
									    function(err) {
									      console.log("Training error:"+err)
									    }
									  );
											console.log("trainModel function Javascript thread is over")
								}
								function errorHandler(err) {
								  console.error(err);
								}
								model_input_list=[]
							}

								
						});
				}
				

				//1. read attributes vector
				//2. turn data into json format. 
				//3. Scroll above for json structure
				
					/*ClarifaiClient.inputs.create([{
			 url: "https://s-media-cache-ak0.pinimg.com/736x/52/74/0f/52740f7a75720a4576d1bd0613e3a3a1.jpg",
			  "concepts": [
			    { "id": "Test5", "value": false },
			    { "id": "Test7", "value": true }
			  ]
			}, {
			  url: "http://vignette4.wikia.nocookie.net/naruto/images/9/9d/Itachi_full.png/revision/latest/scale-to-width-down/175?cb=20160623120232",
			  "concepts": [
			    { "id": "Test5", "value": true },
			  
			  ]
			}]).then(
									  trainModel,
									  errorHandler
									);
									function trainModel()
								{
										console.log("Finished adding inputs apparently and I'm inside createModel")
										ClarifaiClient.models.train("TestModel").then(
									    function(response) {
									      console.log("Training right now")
									      console.log(response)
									    },
									    function(err) {
									      console.log("Training error:"+err)
									    }
									  );
											console.log("trainModel function Javascript thread is over")
								}
								function errorHandler(err) {
								  console.error(err);
								}*/

	//});
console.log("Done with the ImageUploader function ?")

			

		}
	/*function trainModel()
	{
				console.log("Entered trainModel")
				ClarifaiClient.models.train("SpoonSnap").then(
		    function(response) {
		      console.log("Training right now")
		    },
		    function(err) {
		      console.log("Training error:"+err)
		    }
		  );
				console.log("trainModel function Javascript thread is over")
	}*/

	function Concept_Searcher (event){
		//console.log("Why ")
		var query=$("#concept_query").value
		ClarifaiClient.inputs.search({concept: {name:"East Indian"}}).then(
		{
			function (response)
			{
				console.log("Image Url:")
				console.log(response.hits[0].input.data.image.url)
			}
		});
	}
	inputbtn.on("click", ImageUploader);
	
	//document.getElementById("tksearcher").addEventListener("click",Concept_Searcher);
	console.log("Vada")
	submitButton.on("click", function (event) {
		// getting the input from the image
		var url = imageInput.val()
		tagsContainer.hide()

		// You can ignore this part
		// Set's the url of the image preview
		image.attr("src", url)
		
		
		/*var mymodel=ClarifaiClient.models.initModel('test_foodie').then(
		function(model) {
      model.getVersion('ae1012ac3e034290b6da7a8f08a60b7f').then(
		function(response){console.log(response)},
		function(err){console.log(err)}
		);
		});*/
		
		ClarifaiClient.models.predict("SpoonSnap", "http://www.vegrecipesofindia.com/wp-content/uploads/2011/10/medu-vada.jpg").then(
			function(response) {
	  	  console.log("Vada");
    		console.log(response.outputs[0].data.concepts);
	
  },
  function(err) {
    console.error("Bad scene bro"+err);
    console.log(err);
  }
);
		/*
		 * TODO
		 * request Clarifai tag for the url by using Clarifai.getTagsByUrl
		 */

		/*
		 * TODO
		 * request colors for the image by using Clarifai function to get *colors by url. 
		 */

	})


	/*
	 * displayTag
	 * functionality to display the tag with classes and probabilities
	 * contains some functionality regarding the response manipulation
	 */
	function displayTag (response) {
		console.log("Clarifai Response!")
		console.log(response)

		/* 
		 * an array of resultant images is received
		 * in this case we only request one 
		 * so we just need to get the first one
		 */
		var image 	= 	response.results[0]

		// Image has a further tag that contains classes, concept_ids and 
		// probabilities for each concept
		var tag 	= 	image.result.tag

		var conceptsLength = tag.classes.length

		// Looping through all the classes in the tag using map
		// to get the html for each concept
		var concepts = tag.classes.map(function (value, index, array) {
			var prob = Number.parseFloat(tag.probs[index]);
			var probPercentage = (prob * 100).toString() + "%";

			// Assigning color for the progressBar using `assignColor`
			var progressBarColor = assignColor(prob, index, conceptsLength)

			// Generating progress bar using values and a template
			var progressBar = `<div class="progress">
						<div class="progress-bar progress-bar-${progressBarColor}" role="progressbar" aria-valuenow="${prob}" aria-valuemin="0" aria-valuemax="100" style="width: ${probPercentage};">
							${prob}
						</div>
					</div>`

			// adding class and concept information
			return `<div class="row">
						<div class="col-sm-12">
							<h3>${value}</h3>
							<h4>Concept ID: ${tag["concept_ids"][index]}</h4>
							${progressBar}
						</div>
					</div>`
		})

		// joining all the stuff generated and throwing the html into .tags
		tags.html(concepts.join(""))

		// displaying the hidden container
		tagsContainer.show()

	}


	/*
	 * assignColor
	 * returns the color for progress bar based on the probability
	 */
	function assignColor (prob, index, length) {
		if (prob > 0.9) {
			return "success"
		}
		else if (prob > 0.85 && prob <= 0.9) {
			return "info"
		}
		else {
			return "warning"
		}
	}

	// In case of error displays an error in the Clarifai 
	function displayError (error) {

		// Preparing the error message
		var errorMessage = "<p>" + error.status_msg + "</p>" 
		var errorHtml = "<div class='errorBox'><h1>Error ❌</h1>" + errorMessage + "</div>"

		// throwing the errorHtml in .tags
		tags.html(errorHtml)
		tagsContainer.show()
	}


	// function to initialize the keys
	function initialize () {
		// getting the credential through calling getKeys()
		// which is available in Global scope because of keys.js
		
		var keys = getKeys();
		var clientId = keys["CLARIFAI_CLIENT_ID"]
		var clientSecret = keys["CLARIFAI_CLIENT_SECRET"]
		
		if (!clientId || !clientSecret) {
			console.log(clientId+"sdasd"+clientSecret);
			app.html("Enter your Clarifai's Client ID and Client Secret in order to successfully run this demo. Go to developer.clarifai.com, sign up and create your application if you haven't already. You'll have to edit keys.js file to enter your credentials")
		}
		$.getJSON( "./js/data/attributes.json", function( data ) {
				attributes=data;
				});
	}
		/*
		else {
			 ClarifaiClient = new Clarifai.App(
     clientId,
     clientSecret
    );
		}*/


	
}(jQuery, Clarifai));