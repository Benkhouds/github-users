import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Column2D = ({repos}) => {

  let data = repos.reduce((acc,{name,stargazers_count: stars})=>([...acc, {label:name, value:stars} ]),[])
                  .sort((a,b)=>(b.value-a.value))
                  .slice(0,5)
 

  const chartConfigs = {
    type: 'column2d',
    width: "100%",
    height: 400,

    dataSource: {
        chart: {
          caption: "Most Popular",
          xAxisName: "Repos",
          yAxisName: "Stars",
          theme:'candy',
        },
        data
      }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column2D;
