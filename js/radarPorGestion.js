$(document).ready(function() {
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

        icon[0] = '<strong>1. </strong>';
        icon[45] = '<strong>2. </strong>';
        icon[90] = '<strong>3. </strong>';
        icon[135] = '<strong>4. </strong>';
        icon[180] = '<strong>5. </strong>';
        icon[225] = '<strong>6. </strong>';
        icon[270] = '<strong>7. </strong>';
        icon[315] = '';

        var text = [];

        text[0] = 'Plan Estratégico <br><small class="tooltip-subtitulo">Formal de corto y mediano plazo</small>';
        text[45] = 'Misión, visión y valores';
        text[90] = 'Roles y Funciones';
        text[135] = 'Plan estratégico <br><small class="tooltip-subtitulo">A todos los colaboradores</small>';
        text[180] = 'Tablero de Control';
        text[225] = 'Equipo profesionalizado';
        text[270] = 'Toma de decisiones';
        text[315] = '';

        var title = '<div class="bg-white tooltip-borde"><div class="tooltip-header bg-gris"><p class=" p-l-1 p-r-1">' + icon[this.x] + text[this.x] + '</p></div>';
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

        // En caso de tener 7 columnas en lugar de 8 esta funcion entra en lugar, de otro modo solo retornar la variable msj
        if (this.x != 315) {
          return msj;
        } else {
          return null;
        }

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
          icon[0] = '<h1><strong>1</strong></h1>';
          icon[45] = '<h1><strong>2</strong></h1>';
          icon[90] = '<h1><strong>3</strong></h1>';
          icon[135] = '<h1><strong>4</strong></h1>';
          icon[180] = '<h1><strong>5</strong></h1>';
          icon[225] = '<h1><strong>6</strong></h1>';
          icon[270] = '<h1><strong>7</strong></h1>';
          // icon[315] = '<h1><strong>1</strong></h1>';
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
      data: [50, 70, 65, 90, 40, 30, 20, 0]
    }, {
      color: 'rgba(0,0,0,0.1)',
      type: 'column',
      name: 'Media',
      data: [30, 20, 33, 40, 50, 60, 70, 0]
    }]
  });
});
