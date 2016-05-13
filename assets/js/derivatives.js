//js to take derivatives

  //temp global config object

  var temp_config={
    h: 0.0001
  };



//the math.js & chart.js lib is a dep, so let's load them.

define(["mathjs","chartjs"],function(math,chart){

  //var parser=math.parser();

  var Equation=function(funct,domain,range){
    this.rawTextEquation=funct;
    this.domain=domain;
    this.range=range;
    this.h=0.00001; //defult h const

    if(!funct.includes("f(x)=")){
        funct="f(x)="+funct;
    }

    var parse=math.parser();
    parse.eval(funct);
    this.equation=parse;
  }

  Equation.prototype.setH=function(nh){
    this.h=nh;
  }

  Equation.prototype.functionAt=function(point){
    return this.equation.eval("f("+point+")");
  }

  Equation.prototype.getSlopeAtPoint=function(point){
    var dx=this.functionAt(point+this.h)-this.functionAt(point);
    var dx=dx/this.h;

    return dx;
  }

  Equation.prototype.getTanLine=function(point){
    //bookmark
  }

  return {
    "Equation" : Equation
  }

});
