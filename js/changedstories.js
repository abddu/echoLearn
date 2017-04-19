var i=0;
var k=0; 
var out1;
var a;
var b;
var pleaseReadAgainCounter=0;


//use populate inputfield if the sound does not capture the correct sentence but some of the words are equalto the sentnece  after 2 attempts
//the populate function shud  have a feature that chekcs for similarity ,if it is above90 similar then populate and go to next sentnece on the try
//make a srict feature or a not so strict fature with populate
//this is so that is can fill the contentTag onload of document and to be able to aaccept the inputFiled  onclick of button


//this is executed when page loads
var tempB;
function onloadFunc(){

//decided to compare the inputfield to the first line of the txt file here instead of "test" etc

             
             // helper(document.getElementById('input_field').value.toLowerCase(), lineInPTag);   //similar to making an object,important to be able to use the methods inside helper()
                 helper( );    //come back to this
           $("#contentTag").append(out1); 
}


function helper(a,b){

	var inputText=a;
	//var input=b;
      var lineInPTag=b;
inputText=document.getElementById('input_field').value.toLowerCase();


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
		 
		 

        // ///file has reached the end
        // if(counter==lines.length){
                 // console.log(done);
                // alert('end of file')
          // //      break;
       // }
	   console.log(lines.length);

	var line=lines[i].split(" "); //each sentence is an array
         lineInPTag=lines[i].split(" ").join(" ");      //this was declared here
	var lineString=lines[i].split(" ").toString().toLowerCase();
    
	var lengthOfFile=lines.length;    //set the length of file equal to the number of elements i the aray

       if(lengthOfFile==i){
             var vv="end of file reached!";
             console.log("end of file reached!");
            tts(vv);
       }
	 
	var lineString=line.join(" ").toLowerCase();
	
         //  $("#contentTag").empty();
           $("#contentTag").append(lineInPTag); //this sends 
	  //  console.log( lineInPTag);

          //console.log(result);

    
        $("#contentTag").empty();
        $("#contentTag").append(lineInPTag); //this sends 



    //     out1= lineInPTag;

for(var j=0;j<=lines.length;j++){ 

 


//make a if staement that will deal with the method if inputField is empty

//if(typeof(inputText)==='undefined'){
//console.log('your inputField is empty');
//('undefined from');
//break;
//}






//thiis is an important method
if(inputText.trim()==lineString.trim() ){
                i++;
              k++;
            //onloadFunc()
            console.log(i+"  first if"); 
            console.log(k+"  first if"); 
 
}

 if(inputText.trim()==lineString.trim() && i==k ){

          //      i++;
              //  lines= lines[i];
                 j++;
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

                 break;
                 console.log(line);                                                                                                     //somewhat recursive
 }


/*
 if(input.length!==line.length){ 
   	console.log( inputText.length==line.length);                                                                   //strings are`nt equal
        console.log("lengths not equal");	
         var lengthCheck=diffString(inputText.trim(),lineString.trim());

var compare3=diffString(inputText.trim(),lineString.trim());
                                                
						
                                                 console.log("check this out:    "+compare2);  
                                                    $("#contentTag1").empty();
                                                  $("#contentTag1").append(compare3); //this sends  
                                                   $("#contentTag1").empty();




  //  if(i!==0){
      // $("#contentTag1").append( lengthCheck); //this sends  
     //  $("#contentTag2").empty();
    //  $("#contentTag2").append("<del1>delete the words highlighted in red,and insert the words highlighted in green<del1>"); //this sends   
                                                  
     //  var qq='please read the sentence again!'; 
     //  tts(qq);
 //  }

$("#notification").fadeIn("slow").append('please say the sentence!');
     $("#notification").fadeOut("slow");

       break;	
}
*/                  

                                                                                 //here i am comparing the text changed into an array
				
  else{

pleaseReadAgainCounter++;
					//var compare =_.difference(input,line);    //try to use while(i<lineString.length){ aray[i=aray[i]]}  etc
					//console.log("dont say these words: "+compare);                                                                                   //say these words

					var compare2=diffString(inputText.trim(),lineString.trim());
                                                
						//strng =compare2.slice(0,-1);
                                                 console.log("check this out:    "+compare2);  
                                                    $("#contentTag1").empty();
                                                  $("#contentTag1").append(compare2); //this sends  
                                                   $("#contentTag2").empty();
//use this later to extract the mistakaken words                                                //    $("#contentTag2").append("<del1>delete the words highlighted in red,and insert the words highlighted in green<del1>"); //this sends   

                                                     if(pleaseReadAgainCounter==3){
                                                      var q='please read the sentence again!';
                                                         tts(q);
                                                          pleaseReadAgainCounter==0;
                                                         }

                                     //  var del=<del></del>;
                                              //  tts(compare2);
                                             //       tts(del);
                            //  alert();

                                                break;
	}
	  
}//for loop
      
}

}//function end

function tts(su1){
var su=su1;

 su = new SpeechSynthesisUtterance();
su.lang = "en";
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
var counterForButtonOnclick=0;
//on first clik;record,on second click;compare.







document.getElementById('g').onclick=function()
{		


 counterForButtonOnclick++;

//this was in the other file
  var reco = new WebSpeechRecognition();
reco.statusText('status');
reco.statusImage('status_img');
reco.finalResults('input_field');
reco.continuous = true;

// Handler when user clicks microphone button.
function microphoneButton() {
  reco.lang = select_dialect.value;
  reco.toggleStartStop();
}




//if ( counterForButtonOnclick==1){
//reco.toggleStartStop();
// counterForButtonOnclick=0;

//}

















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
			var input=inputText.split(" "); //array
		
			var a =inputText;
			var b=input;
            tts(inputText);
			helper(a,b);
		}
		//tts(inputText);





			



        //  helper(inputText,input);

}




		