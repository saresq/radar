$(document).ready(function(){
  Highcharts.chart('container', {
    chart: {
      polar: true
    },

    title: {
      text: ''
    },

    pane: {
      startAngle: 0,
      endAngle: 360
    },
    legend: {
      enabled: false
    },
    tooltip: {
      borderColor: 'rgba(0,0,0,0)',
      backgroundColor: 'rgba(0,0,0,0)',
      shadow: false,
      // followPointer: true,
      useHTML: true,
      formatter: function() {
        var icon = [];

        icon[360] = '<i class="fa fa-puzzle-piece fa-lg"> </i>';
        icon[45] = '<i class="fa fa-group  fa-lg"> </i>';
        icon[90] = '<i class="fa fa-bullhorn  fa-lg"> </i>';
        icon[135] = '<i class="fa fa-gears  fa-lg"> </i>';
        icon[180] = '<i class="fa fa-money  fa-lg"> </i>';
        icon[225] = '<i class="fa fa-lightbulb-o  fa-lg"> </i>';
        icon[270] = '<i class="fa fa-link  fa-lg"> </i>';
        icon[315] = '<i class="fa fa-leaf  fa-lg"> </i>';

        var text = [];

        text[360] = ' Gestión Estratégica';
        text[45] = ' Gestión de Personas';
        text[90] = ' Gestión de Marketing';
        text[135] = ' Gestión de Operaciones';
        text[180] = ' Gestión Económico - Financiera';
        text[225] = ' Gestión de la Innovación';
        text[270] = ' Gestión de Cadena de Abastecimiento';
        text[315] = ' Gestión de Sustentabilidad';

        var title = '<div class="bg-white tooltip-borde"><div class="tooltip-header bg-primary"><p class=" p-l-1 p-r-1">' + icon[this.x] + text[this.x] + '</p></div>';
        var body = '<div class="bg-white text-left">';
        var footer = '</p></div></div>'


        $.each(this.points, function(i, point) {

          var clase;

          if (this.y <= 33) {
            clase = 'label-danger';
          } else if (this.y <= 66) {
            clase = 'label-warning';
          } else {
            clase = 'label-success';
          }

          body += '<p class=" p-l-1 p-r-1 p-t-1 text-center"><small><span style="color:' + this.point.color + '">\u25CF</span> ' + this.series.name + '</small> &nbsp;<span class="label ' + clase + '">' + this.y + '</span></p>';
        });

        var msj = title + body + footer;
        return msj;
      },
      shared: true
    },

    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: {
        useHTML: true,
        formatter: function() {
          var icon = [];
          icon[0] = '<h1><i class="fa fa-puzzle-piece"> </i></h1>';
          icon[45] = '<h1><i class="fa fa-group "> </i></h1>';
          icon[90] = '<h1><i class="fa fa-bullhorn "> </i></h1>';
          icon[135] = '<h1><i class="fa fa-gears "> </i></h1>';
          icon[180] = '<h1><i class="fa fa-money "> </i></h1>';
          icon[225] = '<h1><i class="fa fa-lightbulb-o "> </i></h1>';
          icon[270] = '<h1><i class="fa fa-link "> </i></h1>';
          icon[315] = '<h1><i class="fa fa-leaf "> </i></h1>';
          return icon[this.value];
        },
      }
    },

    yAxis: {
      min: 0
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45,
      },
      column: {
        pointPadding: 0,
        groupPadding: 0,
        grouping: false,
        borderWidth: 1,
        borderColor: 'white'
      }
    },

    series: [{
      color: 'rgba(0,172,230,0.5)',
      type: 'column',
      name: 'Mi PyME',
      data: [60, 70, 65, 90, 40, 30, 20, 10]
    }, {
      color: 'rgba(0,0,0,0.1)',
      type: 'column',
      name: 'Media',
      data: [10, 20, 33, 40, 50, 60, 70, 80]
    }]
  });
});
