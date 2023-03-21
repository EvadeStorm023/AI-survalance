video = '';
status = '';

function preload(){
   video = createVideo('video.mp4');
   video.hide();
}


function setup(){
   canvas =  createCanvas(360,360);
   canvas.center();


}
obj = [];
function draw(){
   image(video,0,0, 360,360);
if(status!=''){
   coco.detect(video, gotResults)
   for(var i=0; i<obj.length; i++){
      document.getElementById('Status').innerHTML = 'Status = Object detected'
      document.getElementById('num_objects').innerHTML ="Number of Objects detected:"+ obj.length;
      fill('red')
      t = obj[i].label + obj[i].confidence*100 + '%';
      text(t, obj[i].x, obj[i].y)
      noFill()
      rect(obj[i].x, obj[i].y, obj[i].width, obj[i].height)
   }
}
 
}

function gotResults(error,results){
   if(error){
      console.error(error)
   }
   else{
      console.log(results)
      obj = results;
   }
}

function start(){
   coco =   ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('Status').innerHTML = 'Status: detecting objects';
}


function modelLoaded(){
   console.log('Model has ben loaded')
   status =  true;
   video.loop();
   video.speed(1);
   video.volume(1);
}