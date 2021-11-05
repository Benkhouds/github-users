import React from 'react';
import styled from 'styled-components';
import { Pie2D, Column2D, Bar2D, Doughnut2D } from './Charts';

const Repos = ({repos}) => {
  

/* React.useEffect(()=>{
    if(!repos.length){
      return ;
    }
      let langData = repos.reduce((acc,{language:lang, stargazers_count:stars,})=>{
        if(!lang) return acc;
        if(!acc[lang]){
          acc[lang]= {
            label : lang,
            value: 1,
            stars
          };
        }else{
          acc[lang].value= acc[lang].value +1 ;
          acc[lang].stars = acc[lang].stars + stars;
        }
        return acc;
    },{})

    let reposData = repos.reduce((acc,{name, forks_count:forks, stargazers_count:stars})=>{
             acc.stars[stars]={
               label: name ,
               value:stars
             }
             acc.forks[forks]={
               label:name ,
               value:forks
             }

             return acc;
    },{stars:{},forks:{}})

    const mostStarredRepos = Object.values(reposData.stars).slice(-5).reverse();
    const mostForkedRepos = Object.values(reposData.forks).slice(-5).reverse();
    const mostUsedLangs = Object.values(langData).map(({label, value})=>({label, value})).sort((a,b)=>(b.value-a.value)).slice(0,5);
    const mostPopularLangs = Object.values(langData).map(({label, stars})=>({label, value:stars})).sort((a,b)=>(b.value-a.value)).slice(0,5);
    console.log(mostStarredRepos)
    console.log(mostForkedRepos)
    console.log(mostUsedLangs);
    console.log(mostPopularLangs);
},[repos]) */
  
  return(
    <section className="section-center">
        <Wrapper>
              <Pie2D repos={repos}/>
              <Column2D repos={repos}/>
              <Doughnut2D repos={repos}/>
              <Bar2D repos={repos}/>
        </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
