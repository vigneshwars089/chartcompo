

  //    -----------------------------------------------------------load Column chart
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
  $.getJSON("./ChartInput.json", function(jsonObj){
        var columnoptions = {
          width: 600,


                //  title: 'Population of Largest U.S. Cities',
                  chartArea: {width: '50%'},
                  isStacked: true,
                  hAxis: {
                    title: 'Country',
                    minValue: 0,
                    width:"200px",
                    slantedTextAngle:70
                  },
                  width:'900px',
                  vAxis: {
                    title: 'Counts',
                    height:"500px"
                  },
                  width: 500,
                          height: 450,
                          bar: {groupWidth: "50%"},
                           bars: 'vertical-align',
                           animation: {
                   duration: 1000,
                   easing: 'in'
               },

          bars: 'horizontal', // Required for Material Bar Charts.
          series: {
            0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            x: {

            }
          }
        };

      var ColumnData = new google.visualization.arrayToDataTable([jsonObj['columnData']]);
      var chart = new google.charts.Bar(document.getElementById('Column_div'));
      chart.draw(ColumnData, columnoptions);
    });
    }
//-----------------------------------------Area chart

google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
     var data1 = google.visualization.arrayToDataTable(jsonObj['areaData']);


     var options = {
       title: 'Company Performance',
       hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
       vAxis: {minValue: 0}
     };

     var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
     chart.draw(data, options);
   }

      //-----------------------------------------------------------load Histogram chart

      google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {

        var Histooptions = {
    title: 'Approximating Normal Distribution',
  //  legend: { position: 'none' },
    colors: ['#4285F4'],

    chartArea: { width: 401 },
    // hAxis: {
    //   ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
    // },
    bar: { gap: 0 },

    histogram: {
      bucketSize: 0.02,
      maxNumBuckets: 200,
      minValue: -1,
      maxValue: 1
    }
  };

  var Histodata = google.visualization.arrayToDataTable(jsonObj['histoData']);
        var chart = new google.visualization.Histogram(document.getElementById('Histo_div'));
        chart.draw(Histodata, Histooptions);
      });
    }
//------------------------------------------------------------line chart
    google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          var data = google.visualization.arrayToDataTable(jsonObj['lineData']);


          var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
          };

          var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

          chart.draw(data, options);
        }

// -----------------------------------------------------------Grouped column
   google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {


    var options1 = {
    //  title: 'Population of Largest U.S. Cities',
      chartArea: {width: '50%'},
      isStacked: true,
      hAxis: {
        title: 'Country',
        minValue: 0,
        width:"200px",
        slantedText: true,

        slantedTextAngle:40
      },
      legend:'none',
      width:'800px',
      vAxis: {
        title: 'Counts',
        height:"500px"
      },
      width: 350,
              height: 300,
              bar: {groupWidth: "40%"},
               bars: 'vertical-align',
               animation: {
       duration: 1000,
       easing: 'in'
   }
            //  legend: { position: "none" }
    };

    var data= null;


     $.getJSON("./ChartInput.json", function(jsonObj){
           console.log(jsonObj.barData);
        var data1 = google.visualization.arrayToDataTable(jsonObj['barData']);
        var data2 = google.visualization.arrayToDataTable(jsonObj['barData1']);
        //  var data1 = google.visualization.arrayToDataTable(jsonObj['GeoData1']);
           console.log(data);
            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));


           chart.draw(data1, options1);

           });

  }

  //-------------------------------------------------------------Donut chart
  google.charts.load("current", {packages:["corechart"]});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
         var data1 = google.visualization.arrayToDataTable(jsonObj['DonutData']);


         var options = {
           title: 'My Daily Activities',
           pieHole: 0.4,
         };

         var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
         chart.draw(data, options);
       }

       //-------------------------------------------------------------Candle stick chart

       google.charts.load('current', {'packages':['corechart']});
           google.charts.setOnLoadCallback(drawChart);

       function drawChart() {
         var data1 = google.visualization.arrayToDataTable(jsonObj['candleData']);


         var options = {
          legend: 'none',
          bar: { groupWidth: '100%' }, // Remove space between bars.
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
            risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
          }
        };

         var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

         chart.draw(data, options);
       }


       google.charts.load("current", {packages:["corechart"]});
           google.charts.setOnLoadCallback(drawChart);
           function drawChart() {
             var data1 = google.visualization.arrayToDataTable(jsonObj['HistoData']);


             var options = {
               title: 'Lengths of dinosaurs, in meters',
               legend: { position: 'none' },
             };

             var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
             chart.draw(data, options);
           }
//-------------------------------------------------------------scatter chart
google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data1 = google.visualization.arrayToDataTable(jsonObj['ScatterData']);


      var options = {
        title: 'Age vs. Weight comparison',
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
      };

      var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

//--------------------------------------------------------------slice chart
           google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
           //   var data = google.visualization.arrayToDataTable(jsonObj['histoData']);
           $.getJSON("./ChartInput.json", function(jsonObj){

              var Histooptions = {
              //  title: 'Indian Language Use',
            //    legend: 'none',
                pieSliceText: 'label',
                slices: {  4: {offset: 0.2},
                          12: {offset: 0.3},
                          14: {offset: 0.4},
                          15: {offset: 0.5},
                },
              };

              var Histodata = google.visualization.arrayToDataTable(jsonObj['histoData']);
                    var chart = new google.visualization.PieChart(document.getElementById('Histo_div'));
                    chart.draw(Histodata, Histooptions);
            });
          }


          //--------------------------------------------------------------gaunt chart
          google.charts.load('current', {'packages':['gantt']});
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

     var data = google.visualization.arrayToDataTable(jsonObj['GauntData']);


     var options = {
       height: 400,
       gantt: {
         trackHeight: 30
       }
     };

     var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

     chart.draw(data, options);
   }
