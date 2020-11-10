var score = 20;
var name = "shaan";
var a = 5;
var b = 10;

array1 = ["shaan",5,2+2];


function setup(){
  console.log(array1);
  for(var m in array1){
    console.log(array1[m]);
  }
  //console.log(score);
  //console.log(name);
  //console.log(name.length);
  //console.log(name.toUpperCase());
  /*console.log("2"*"a");
  console.log(2-2);
  console.log(2*2);
  console.log(2/0);
  console.log(10%2);*/
  /*if(3 > 2){
    console.log("true");
  }
  else{
    console.log("false");
  }*/
  /*var c = a+b;
  switch(c){
    case 10: console.log("true");
    break;
    case 15: console.log("false");
    break;
    default:break;
  }*/
  /*for(m=0;m<10;m=m+1){
    console.log(m);
  }*/
  var i = 0;
  while(i<11){
    console.log(i);
    i = i+2;
  }
  console.log(circumference(5));
}


function draw(){
  
}

function circumference(radius){
  var circumference = 2*3.14*radius;
  return circumference;
  
}