var myGraph = new Graph({
  canvasId: 'myCanvas',
  minX: -11,
  minY: -11,
  maxX: 11,
  maxY: 11,
  unitsPerTick: 1
});

// myGraph.drawEquation(function(x) {
//   return 5 * Math.sin(x);
// }, 'green', 3);
//
// myGraph.drawEquation(function(x) {
//   return x * x;
// }, 'blue', 3);
//
// myGraph.drawEquation(function(x) {
//   return 1 * x;
// }, 'red', 3);

var graph1=function(x){
  return x*x;
}

var point=2;

//y-y1=m(x-x1)
var g1_slope=myGraph.getDerivative(graph1,point);
var y=graph1(point);

var tangent_g1=function(x){

  var a=g1_slope*(x-point)+y;

  return a;
}

function getTangentLine(funct,point){
  //debugger;
  var slope=myGraph.getDerivative(funct,point);
  var y=funct(point);

  var tanFunk=function(x){ //some funky tangental action
    return slope*(x-point)+y;
  }

  return tanFunk;
}

function newtonsMethod(intApprox,maxIter,funct,iterCallBack,done_callback){
  var x0=intApprox;
  var y0,x1,y1,derFunct;
  var tanLine;
  //debugger;
  for(var i=0;i<maxIter;i++){
    x1=x0-(funct(x0)/myGraph.getDerivative(funct,x0));
    tanLine=getTangentLine(funct,x0);
    //myGraph.drawEquation(tanLine,"black",3);

    if(iterCallBack){
      iterCallBack(tanLine);
    }

    console.log("itter "+i+" slope: "+x1);
    x0=x1;
  }

  if(done_callback){
    done_callback(x0);
  }
}

//y-y1=m(x-x1)
//var g1_slope=myGraph.getTangentLine(graph1,2);
var tangentLine1=getTangentLine(graph1,1);
var tangentLine2=getTangentLine(graph1,2);
var tangentLine3=getTangentLine(graph1,3);

// newtonsMethod(4,10,graph1,function(tanline){
//   myGraph.drawEquation(tanline,"black",3);
// });

$(document).ready(function(){

  $("#output").hide();

  $("#start").click(function(){
    var funt=$("#function").val();
    funt="f(x)="+funt;
    console.log("function to graph "+funt);
    var parser = math.parser();
    parser.eval(funt);
    // myGraph.drawEquation(function(x){
    //   return parser.eval("f("+x+")");
    // },"black",3);

    var testFunt=function(x){
       return parser.eval("f("+x+")");
    }

    //draw the graph
    myGraph.drawEquation(testFunt,"red",3);

    var aproximation=$("#startingAprox").val();

    //newtonsMethod(intApprox,maxIter,funct,iterCallBack);
    newtonsMethod(aproximation,100,testFunt,function(tanline){
      myGraph.drawEquation(tanline,"black",3);
    },function(x){
      alert(x);
    });

  });
});

 // myGraph.drawEquation(graph1,"red",3);
// myGraph.drawEquation(tangentLine1,"blue",3);
// myGraph.drawEquation(tangentLine2,"green",3);
// myGraph.drawEquation(tangentLine3,"black",3);
//myGraph.drawEquation(tangent_g1,"blue",3);