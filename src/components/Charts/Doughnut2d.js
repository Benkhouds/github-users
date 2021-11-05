import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.umber';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Doughnut2d = ({repos}) => {
  /* repos = repos.map(({language})=>language); */
  let data = repos.reduce((acc,{language:lang, stargazers_count:stars})=>{
        if(!lang) return acc;
        if(!acc[lang]){
           acc[lang]= {
             label : lang,
             value: stars
           };
        }else{
          acc[lang].value= acc[lang].value +stars ;
        }
        return acc;
  },{})
  data= Object.values(data).sort((a,b)=>b.value-a.value).slice(0,5);
  const chartConfigs = {
    type: 'doughnut2d',
    width: "100%",
    height: 400,
    dataSource: {
        chart: {
          caption: "Stars Per Language",
          theme:"umber",
          pieRadius:'40%',
          showPercentValues: false,
          showPercentInToolTip:true
        },
        data
      }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;


