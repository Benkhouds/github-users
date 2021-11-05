import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Bar2D = ({repos}) => {
  /* repos = repos.map(({language})=>language); */
  let data = repos.reduce((acc,{name,forks_count: forks})=>([...acc, {label:name, value:forks} ]),[])
  .sort((a,b)=>(b.value-a.value))
  .slice(0,5)

  const chartConfigs = {
    type: 'bar2d',
    width: "100%",
    height: 400,
    dataSource: {
        chart: {
          caption: "Most Forked",
          theme:"candy",
          xAxisName: "Repos",
          yAxisName: "Forks",
        },
        data
      }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Bar2D;
