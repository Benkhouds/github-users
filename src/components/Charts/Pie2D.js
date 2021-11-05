import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.umber';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Pie2D = ({repos}) => {

  let data = repos.reduce((acc,{language:lang})=>{
        if(!lang) return acc;
        if(!acc[lang]){
           acc[lang]= {
             label : lang,
             value: 1
           };
        }else{
          acc[lang].value= acc[lang].value +1 ;
        }
        return acc;
  },{})
  data= Object.values(data).sort((a,b)=>(b.value-a.value)).slice(0,5);
  const chartConfigs = {
    type: 'pie2d',
    width: "100%",
    height: 400,
    dataSource: {
        chart: {
          caption: "Most Used Languages",
          theme:"umber",
          pieRadius:"40%",
          showLabels : true,
          showTooltip : false
        },
        data
      }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie2D;
