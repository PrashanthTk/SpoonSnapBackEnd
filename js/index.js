/*
 * index.js
 * Clarifai Basic Application demo code
 * You can reference Clarifai's JavaScript library to 
 * complete this demo available at 
 * https://github.com/Clarifai/clarifai-javascript
 */

var keys = getKeys();
var clientId = "onQhsd8qT-OqZyFUSYTgJL2UcsnjwhwFsPy8mmpO"
var clientSecret = "_gLYFaq7SfkrewCPfIodFRjN0Up6cHvyEPKjCDiM"

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
	var searcher=$("#searcher")	


	inputbtn.on("click", function (event) {
		//console.log("After click")
		$.ajax({
			url:"./js/imguploader.php",

			dataType:"JSON",
			success: function(images)
			{
				//var images = $.parseJSON(imgarray)
				//console.log(images[0]);
				ClarifaiClient.inputs.create([{
 base64: images[0],
  "concepts": [
    { "id": "cat", "value": false },
    { "id": "dog", "value": true }
  ]
}, {
  base64: images[1],
  "concepts": [
    { "id": "cat", "value": false },
    { "id": "dog", "value": true }
  ]
}]).then(
  createModel,
  errorHandler
);
function createModel()
{
	console.log("Finished adding inputs apparently and I'm inside createModel")
}
function errorHandler(err) {
  console.error(err);
}
}

	});

			

		});


	
	searcher.on("click",function (event){
		var query=$("#concept_query")
		alert(query.value);

	});
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
		
		ClarifaiClient.models.predict("test_foodie", "https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg").then(
			function(response) {
	  	  console.log("samosa2");
    		console.log(response.outputs[0].data.concepts[1]);
	
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
		/*
		else {
			 ClarifaiClient = new Clarifai.App(
     clientId,
     clientSecret
    );
		}*/


	}
}(jQuery, Clarifai));