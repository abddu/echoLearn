 var i=0;
var k=0; 
var out1;
var a;
var b;
var counterForContentInPTag1=0;
var counterForButtonOnclick=0;

//this is executed when page loads

function onloadFunc(){

//decided to compare the inputfield to the first line of the txt file here instead of "test" etc
  
             
            //      helper(document.getElementById('input_field').value.toLowerCase(), );   //similar to making an object,important to be able to use the methods inside helper()
                 helper( "","" );    //come back to this
           $("#contentTag").append(out1); 
}  


function helper(a,b){

	var inputText=a;
	var input=b;


	//populate(inputText);
	//populate(input);


$("document").ready(function() {
        getData();
     });

function getData() {
      	$.get("test.txt", readFromFile);   // turn test.txt into a variable and make a function tht change it ,so that people can hoose thier own stories(file)
       //$("#content").load("test.txt");
      }


function callGetData(){
           //   i=i+1;                                                                                                                                             
	     getData();
}



function readFromFile(result) {
      //  console.log(result); 
      
       var counter=0;   //to check if end of file is reacheed
      
         var result1=result;
         var lines=result1.split("\n");
		 
		 

   
        console.log(lines.length+"length of file");

	var line=lines[i].split(" "); //each sentence is an array
	var lineInPTag=lines[i].split(" ").join(" ");
	var lineString=lines[i].split(" ").toString().toLowerCase();
    
	var lengthOfFile=lines.length;    //set the length of file equal to the number of elements i the aray

      
	var lineString=line.join(" ").toLowerCase();
	
         //  $("#contentTag").empty();
           $("#contentTag").append(lineInPTag); //this sends 
	  //  console.log( lineInPTag);



    
        $("#contentTag").empty();
        $("#contentTag").append(lineInPTag); //this sends 





for(var j=0;j<=lines.length;j++){ 





//thiis is an important method,to check if sentence from file equals sentence from textbox,then increments  i and k if it is true
if(inputText.trim()==lineString.trim() ){
                i++;
              k++;
            //onloadFunc()
            console.log(i+"  first if"); 
            console.log(k+"  first if"); 
 
}




//this causes ato move to the next sentence in  the file
//the code to check if endof file is reached should be written in here


 if(inputText.trim()==lineString.trim() && i==k   ){

 counterForContentInPTag1=0;   ///this solved the problem


                 j++;  //this means  go to the next sentnce ,not 100% sure 
counter++;
console.log(counter);
console.log(lines.length);

               onloadFunc()

                $("#contentTag").empty();
                  $("#contentTag1").empty();


                $("#contentTag2").empty();
	        $("#contentTag").append(lineInPTag); 
	        console.log("j"+j);console.log("i"+i);
                 console.log(inputText.trim()==lineString.trim());                                                     
             
                  console.log(j);

 var contentTagSay=   lineInPTag;
            tts(contentTagSay);

                 break;
                 console.log(line);                                                                                                     //somewhat recursive
 }



                                                                    
	//the problem that  is causing the contentInPTag1 to come into it before it should is in this else clause below  			
 else
{
			

					var compare2=diffString(inputText.trim(),lineString.trim());
                                        console.log("check this out:    "+compare2);     
				
                                                   
///here is the problem
                                   if( counterForContentInPTag1>0 &&  inputText.trim()!=lineString.trim() ){     //counterForContentInPTag1>0  only prevents the first sentence from being procced before it shud
                                                    $("#contentTag1").empty();

                                                  $("#contentTag1").append(compare2); //this sends  
                                                   $("#contentTag2").empty();    //is this even used ??

                                 
                                                      var q=' read  again!';
                                                         tts(q);
                                      }

                                     
                                      break;
	}
	  
}//for loop
      
}

}//function end


/////////////////////////////////////////////////////////populate function



function populate(param){
    
		var inputSentence=param;
		
		//position of/index  of element desired to be changed
		var b=inputSentence.split("");
		console.log(b);
		console.log(b[0]);
		
		for(var i=0;i<=b.length;i++){
				
				if(b[i]==1){
					b[i]="one ";
				}
				if(b[i]==2){
					b[i]="two ";
				}
				if(b[i]==3){
					b[i]="three ";
				}
				if(b[i]==4){
					b[i]="four ";
				}
				if(b[i]==5){
					b[i]="five ";
				}
				if(b[i]==6){
					b[i]="six ";
				}
				if(b[i]==7){
					b[i]="seven ";
				}
				if(b[i]==8){
					b[i]="eight ";
				}
				if(b[i]==9){
					b[i]="nine ";
				}
				if(b[i]===0){
					b[i]="zero ";
				}
				if(b[i]==" "){
					b[i]=" ";
				}
				
	}			
		
}		//make a if statement for all the character like  ;'.,?!@#$%^&*()  using if(b[i]==!||b[i]==?)  etc and replace it with a space " "
				

//////////////////////////////////////////////Select Language
























///////////////////////////////////////////////////////////////


function tts(su1){
var su=su1;

 su = new SpeechSynthesisUtterance();
su.lang = "en";        //change this into a varibable changeable from the teacher page
su.text = su1;
speechSynthesis.speak(su);


}

/*
document.onload=function()
{
         //from input text form box

         var inputText=document.getElementById('input_field').value.toLowerCase();
	var input=inputText.split(" "); //array

var a =inputText;
var b=input;

         helper(a,b);

}
	
*/

function onloadTts(){
var a='hello, Welcome to Echo Learning';
tts(a);

}


 
 // after the first click,the speec is recorded,after the second click,the speech is compared
//var counterForButtonOnclick=0;
//on first clik;record,on second click;compare.






//////////////////////////////////////////////////////////////////////////////////////////////




document.getElementById('g').onclick=function()
{		   


//calling microphine to return selceted language
microphoneButton();



counterForContentInPTag1++;

 counterForButtonOnclick++;



$.getScript("webspeech.js", function(){

   var reco = new WebSpeechRecognition();
reco.statusText('status');
reco.statusImage('status_img');
reco.finalResults('input_field');
reco.continuous = true;

// Handler when user clicks microphone button.
function microphoneButton() {
  reco.lang = document.getElementById('select_dialect').value;
  reco.toggleStartStop();
console.log("from the script called from the stories.js file  microphone() method");
}




var create_email_on_end = false;

// Handler when speech recognition completes.
reco.onEnd = function() {
  if (create_email_on_end) {
    create_email_on_end = false;
    createEmail(reco.final_transcript);
  }
};

// Handler when user clicks "Create Email" button.
function emailButton() {
  if (reco.inProgress()) {
    // Wait for recognition to end before calling createEmail().
    create_email_on_end = true;
    reco.stop();
  } else {
    // Recognition has already ended, call createEmail() now.
    createEmail(reco.final_transcript);
  }
  reco.onState('complete');
}

// Create email by splitting string s into subject and body.
function createEmail(s) {
  // Determine a good place to split it: end of first line, else at a space.
  var n = s.indexOf('\n');
  if (n < 0 || n >= 80) {
    n = 40 + s.substring(40).indexOf(' ');
  }
  var subject = encodeURI(s.substring(0, n));
  var body = encodeURI(s.substring(n + 1));
  // Open default email provider.
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}

var langs =
[[ 'Arabic-Saudi Arabia',    ['ar-SA']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
];

function updateCountry() {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  var list = langs[select_language.selectedIndex];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}

for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);
}
select_language.selectedIndex = 0;
updateCountry();
select_dialect.selectedIndex = 6;













});

















//var cc="mama sara how are yu";
//tts(cc);



console.log('you clicked on g');

//the stuff that was here was puit into a function on NewStory .html



//function buttonFunction(){
			//reco.toggleStartStop();
 //var counterForButtonOnclick=0;

                   
               //    counterForButtonOnclick++;
//counterForButtonOnclick++;





///////////////////////////////////////////////////////////////////////////////

if(counterForButtonOnclick==1){
				
				document.getElementById('status_img').src="img/a.gif";
				
			   // first do the recording
                          reco.toggleStartStop();


			  
			   //var ss="you started ";
			   //tts(ss);
			   console.log("from fist if in buttonfunctioooon " +counterForButtonOnclick);
			   //document.getElementById('status_img').src="img/mic.gif";
		}
				// then the comparing
		if(counterForButtonOnclick==2){
		
			document.getElementById('status_img').src="img/b.png"; //this shud show a gif that is comparing or analysing
			//var dd="you are going to end";
			//tts(dd);
			console.log(counterForButtonOnclick);
			counterForButtonOnclick=0;
			//document.getElementById('status_img').src="img/mic.gif";
			
			console.log('analysing...');
			
			
	
			var inputText=document.getElementById('input_field').value.toLowerCase();

                    populate(inputText);


			var input=inputText.split(" "); //array
		
			var a =inputText;
			var b=input;
                     //  var contentTagSay=   lineInPTag;
            //tts(contentTagSay);
			helper(a,b);
		}
		//tts(inputText);





			



        //  helper(inputText,input);

}




		
