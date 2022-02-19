Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captureimg' src='"+data_uri+"'>";
    });
}
console.log("ml5version:"+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eiXw90R1v/model.json',modeLoaded);


function modeLoaded(){
    console.log("modelLoaded");
}

function check(){
Img = document.getElementById("captureimg");
classifier.classify(Img, gotresult);
}

function gotresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("accuracy_object_name").innerHTML = results[0].confidence.toFixed(3);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        
    }
}

