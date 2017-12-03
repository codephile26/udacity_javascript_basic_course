/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name": "Dimple Shah",
 	"role":"Software Developer",
 	"contacts":[
 	{"mobile":"12345678"},
 	{"email":"dimples2609@gmail.com"},
 	{"github":"mickey.mouse"},
 	{"twitter":"mickey26"},
 	{"blog":"wordpress.mickey"},
 	{"location":"Pune"}
 	],
 	"welcomeMessage":"Let's have fun",
 	"skills":["laughing", "entertaining"],
 	"biopic":"images/fry.jpg"
 };

 var education = {};

 var work = {
	"workexperiences": [
		{
			"workEmployer": "Amdocs",
			"workTitle": "Software Developer",
			"workDates": "May 2016 - Present",
			"workDescription": "Web App Development"
		},
		{
			"workEmployer": "Capgemini",
			"workTitle": "Consultant",
			"workDates": "June 2013 - April 2016",
			"workDescription": "Back End Development"
		}


	]
};

var projects = {

	"projectDetails" : [
	{
		"title":"Knock Knock Jokes",
		"dates":"Nov 2017",
		"description":"This project is basically an example implementation of Socket Programming in Java. We are simulating Knock Knock jokes between a client and a server using socket programming.",
		"images":["",""]
	},
	{
		"title": "Online Resume",
		"dates": "Dec 2017",
		"description": "In this project, I have used basic JavaScript to create an online resume of a person.",
		"images":["",""]
	}]
};


function displayBio(){
	//format bo and append to the page
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").append(formattedName);
	$("#header").append(formattedRole);

	//Not visible onn screen - check why?
	$(".white-text:last").append(formattedMobile);
	$(".white-text:last").append(formattedEmail);
	$(".white-text:last").append(formattedTwitter);
	$(".white-text:last").append(formattedGitHub);
	$(".white-text:last").append(formattedBlog);
	$(".white-text:last").append(formattedLocation);


}

function displayWork(){
	
	for (var key in work.workexperiences){

	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.workexperiences[key].workEmployer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.workexperiences[key].workTitle);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedWorkDates = HTMLworkDates.replace("%data%", work.workexperiences[key].workDates);
	$(".work-entry:last").append(formattedWorkDates);

	var formattedHTMLWorkDEscription = HTMLworkDescription.replace("%data%",work.workexperiences[key].workDescription);
	$(".work-entry:last").append(formattedHTMLWorkDEscription);
	

	}	
}

//example of encapsulation
projects.display = function(){

	for (var key in projects.projectDetails){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectDetails[key].title);
		//append to HTML
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projectDetails[key].dates);
		$(".project-entry:last").append(formattedProjectDate);


		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projectDetails[key].description);
	 	$(".project-entry:last").append(formattedProjectDescription);


	 	if (projects.projectDetails[key].images.length > 0){
	 		for (var keyImage in projects.projectDetails[key].images){
	 			var projectImage = HTMLprojectImage.replace("%data%",projects.projectDetails[key].images[keyImage]);
	 			$(".project-entry:last").append(projectImage);
	 		}
	 	}
	 	
	}
}

displayBio();

displayWork();

projects.display();



$(document).click(function(loc){
		var x = loc.pageX;
		var y = loc.pageY;
		logClicks(x,y);
});

//called in click event of a function
 function inName(twoName){
 	twoName = twoName.trim().split(" ");
 	console.log(twoName);
 	twoName[1] = twoName[1].toUpperCase();
 	twoName[0] = twoName[0].slice(0,1).toUpperCase() + twoName[0].slice(1).toLowerCase();
 	
 	return twoName[0] + " " + twoName[1];
 }

$('#main').append(internationalizeButton);

//google map api key = "AIzaSyBdcgjaWUBW3pXQOCGvDW-LuC5xu_PDXYk";
$("#mapDiv").append(googleMap);
// 
 