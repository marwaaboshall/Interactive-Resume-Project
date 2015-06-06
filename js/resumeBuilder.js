var bio = {"name": "Marwa Aboshall", 
           "role": "Front End Engineer",
           "contacts" : {"email": "marwa.aboshall@gmail.com",
                       "mobile": "+201000000000",
                       "github":"marwaaboshall",
                       "twitter":"@marwaaboshall",
                       "location":"Nasr City, Cairo Governorate, Egypt"}, 
           "bioPic": "images/My Avatar.png", 
           "welcome": "Welcome to my resume.", 
           "skills": ["Games Development ", "Front End", "Programming","UX Design","Android"]
           };

var education = {
    "schools": [{
        "name":  "ITI",
        "location": "Smart Village, Giza Governorate",
        "Degree": "Diploma",
        "majors":["Games Development"],
        "date": "2014",
        "url": "http://www.iti.gov.eg/"
    },
    {
        "name":  "Mansoura University",
        "location": "Mansoura University,Mansoura, Dakahlia Governorate",
        "Degree": "Bachelor in Computer Science",
        "majors":["CS"],
        "date": "2013",
        "url": "http://www.mans.edu.eg/en"
    }
    ]
};

var work = {
    "jobs":[
        {
        "employer": "Fixed Solutions",
        "title": "Game Developer",
        "location":"Fixed Solutions, Ali Amin, Nasr City",
        "date": "September 2014-Present",
        "description": "Creating a mobile application for Dubai Silicon Oasis using Unity3D game engine, the user can explore the city through a 3D environment and check some services."
    },
    {
        "employer": "Bravo Agency",
        "title": "Android Developer",
        "location":"Bravo Agency, Al Golf, Nasr City, Cairo Governorate",
        "date": "June 2014-September 2014",
        "description": "Creating a mobile application for Dubai Silicon Oasis using Unity3D game engine, the user can explore the city through a 3D environment and check some services."
    }
    ]
};
var projects ={
    "projects":[
        {
            "title":"JolyJello",
            "date":"Jan 2014-May 2015",
            "descritption":"2D Shooter game",
            "images":["images/JolyJello-medium.png"]
        },
        {
            "title":"BluBlye",
            "date":"November 2014-Jan 2015",
            "descritption":"2D Shooter/Endless game",
            "images":["images/blublye-morning-medium.png"]
        },
        {
            "title":"TinyC",
            "date":"April 2014",
            "descritption":"2D Endless Arcade game",
            "images":["images/TinyC-medium.png"]
        }
        
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomemessage);
    
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    
    if(bio.skills.length >0){
        $("#header").append(HTMLskillsStart);
        for(var i = 0; i < bio.skills.length; i++)
        {
            var skill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(skill);
        }
    }
    
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
};

work.display = function(){
    $("#workExperience").append(HTMLworkStart);

    for (var index in work.jobs){
        
        var formattedEmployerName = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
        var FormattedJobDate = HTMLworkDates.replace("%data%", work.jobs[index].date);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

        $(".work-entry").append(formattedEmployerName + formattedJobTitle);
        $(".work-entry").append(formattedJobLocation);
        $(".work-entry").append(FormattedJobDate);
        $(".work-entry").append(formattedJobDescription);
    }
};

projects.display = function(){
    
    for(var project in projects.projects)
    {
        $("#projects").append(HTMLprojectStart);
        
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descritption);
        var projectImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);

        $(".project-entry:last").append(projectTitle);
        $(".project-entry:last").append(projectDate);
        $(".project-entry:last").append(projectDescription);
        $(".project-entry:last").append(projectImages);
    }

};

education.display = function(){
    
    for (var school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].Degree);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
        
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDate);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajors);
        
    }
};

function displayMap(){
    $("#mapDiv").append(googleMap);

}

bio.display();
work.display();
projects.display();
education.display();
displayMap();