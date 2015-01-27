google.load('visualization',1,{
  'packages' : ['geochart','table']
});

google.setOnLoadCallback(drawRegionMap);

function drawRegionMap(){
  var data = google.visualization.arrayToDataTable(

  );
  var options = {

    //The background color for the main area of the chart

    //default:white
    backgroudColor: {
      //default:white
      fill:<string>, //The chart fill color
      //default:'#666'
      stroke:<string>, //The color of the chart border
      //default:0
      strokeWidth:<number> //The border width, in pixels
    },  //can be string or object

    //An object that specifies a mapping between color column values and colors or a gradient scale.
    //e.g. {minValue: 0,  colors: ['#FF0000', '#00FF00']}

    //default: null
    colorAxis: {
      //Color data values of this value and lower will be rendered as the first color in the colorAxis.colors range.
      minValue:<number>,
      //maximum value similar rule as above
      maxValue:<number>,
      //Each value is associated with the corresponding color in the colorAxis.colors array
      values:[<number>],
      //Colors to assign to values in the visualization
      colors:[<string>],
    },
    //Color to assign to regions with no associated data.
    datalessRegionColor:<string>,

    //type of geochart-auto ,regions,markers,text
    displayMode:<string>,


    // setting domain to 'IN' will display Kashmir as belonging to India rather than as a disputed territory.
    //default:null
    domain:<string>,


    //enable region interactivity,
    //including focus and tool-tip elaboration on mouse hover,
    //and region selection and firing of regionClick and select events on mouse click.
    //default:true(region) false(marker)
    enableRegionInteractivity:<boolean>,

    //Draws the chart inside an inline frame.
    //(Note that on IE8, this option is ignored; all IE8 charts are drawn in i-frames.)
    forceIFrame:<boolean>,
    //Height of the visualization, in pixels
    //default:347px or autocalculated, if keepAspectRatio:true
    height:<number>,
    //  If true, the geochart will be drawn at the largest size that can fit inside the chart area at its natural aspect ratio.
    // If only one of the width and height options is specified, the other one will be calculated according to the aspect ratio.
    //If false, the geochart will be stretched to the exact size of the chart as specified by the width and height options.
    //default:true
    keepAspectRatio:<boolean>,

    //An object with members to configure various aspects of the legend, or 'none',
    //default: null
    legend:{
      //This is a subset of the ICU pattern set.
      //For instance, {numberFormat:'.##'} will display values "10.66", "10.6", and "10.0"
      //for values 10.666, 10.6, and 10.
      //default:auto
      numberFormat:<string>,

      //An object that specifies the legend text style
      //default {color: 'black',fontName: <global-font-name>, fontSize: <global-font-size>}
      textStyle:{ color: <string>,
        fontName: <string>,
        fontSize: <number>,
        bold: <boolean>,
        italic: <boolean> }
      },


      //The area to display on the geochart
      // 'world'; 3-digit continent code(eg 011 for Africa);country ISO 3166-1 alpha-2 (eg AU for australia);
      //A state in the United States, specified by its ISO 3166-2:US code, e.g., 'US-AL' for Alabama.
      //Note that the resolution option must be set to either 'provinces' or 'metros'.

      //default:world
      region:<string>,
      // ea

      // to configure various aspects of the magnifying glass eg {enable: true, zoomFactor: 7.5}
      //in marker mode only
      magnifyingGlass:{

        // when the user lingers over a cluttered marker, a magnifiying glass will be opened. No IE8 and below support
        //default:true
        enable:<boolean>,
        //Can be any number greater than 0
        //default: 5.0
        zoomFactor:<number>
      },
      //The opacity of the markers, where 0.0 is fully transparent and 1.0 is fully opaque.
      //default: 1.0
      markerOpacity:   //number 0.0-1.0

      // resolution of the geochart borders
      //'countries' - Supported for all regions, except for US state regions.
      //'provinces' - Supported only for country regions and US state regions. Not supported for all countries; please test a country to see whether this option is supported.
      //'metros' - Supported for the US country region and US state regions only.
      //default:'countries'
      resolution:<string>,

      //to configure how values are associated with bubble size. {minValue: 0,  maxSize: 20}

      sizeAxis:{
        //Maximum radius of the largest possible bubble, in pixels.
        //default: 12
        maxSize:<number>,

        //The size value (as appears in the chart data) to be mapped to sizeAxis.maxSize.
        //Larger values will be cropped to this value.
        maxValue:<number>,

        //Mininum radius of the smallest possible bubble, in pixels.
        //default: 3
        minSize:<number>,

        //The size value (as appears in the chart data) to be mapped to sizeAxis.minSize.
        //Smaller values will be cropped to this value.
        minValue:<number>
      },


      //An object that specifies the tooltip text style.
      //default:{color: 'black', fontName: <global-font-name>, fontSize: <global-font-size>}
      tooltip:{textStyle:{color: <string>,
        fontName: <string>,
        fontSize: <number>,
        bold: <boolean>,
        italic: <boolean>}

        //user interaction that causes the tooltip to be displayed:
        //'focus' - The tooltip will be displayed when the user hovers over the element.
        //'none' - The tooltip will not be displayed.
        //'selection' - The tooltip will be displayed when the user selects the element.

        //default:'focus'
        trigger:<string>,

        //added in 1.1 !important
        isHtml:<boolean>

      },

      //Width of the visualization, in pixels.
      //The default width is 556 pixels,
      //unless the height option is specified and keepAspectRatio is set to true - in which case the width is calculated accordingly.
      width:<number>

    }


  };


  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data,options);

}
