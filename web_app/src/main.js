//configure require
"use strict"
console.log("loading needed libs into reqire...");

require.config({

  paths: {

    mathjs: '/../bower_components/mathjs/dist/math',
    corejs: '/../bower_components/Chart.js/src/core/core',
    //chartjs: '/../bower_components/Chart.js/dist/Chart',
    chartjs: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart', //for some reason loading chart.js from bower dosn't work, this is a work around(for the time being)
    appjs: './app',
    jquery: '/../bower_components/jquery/dist/jquery',
    bootstrap: '/../bower_components/bootstrap/dist/js/bootstrap'
  },

  shim:{
    bootstrap:{
      deps: [ "jquery" ]
    }
  }

});

//start the app logic and inut every thing
require(["appjs","mathjs","chartjs","jquery","bootstrap"],function(app,mathjs,chart,$){
  $('#myModalButton').show();

  //debugger;
});
