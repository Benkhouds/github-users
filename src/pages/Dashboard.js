import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import styled from 'styled-components';
import preloader from '../images/preloader.gif';
import { GithubContext } from '../context/context';


export default function Dashboard() {
  const { user, followers, repos , isLoading ,fetchUserData, requests, error } = React.useContext(GithubContext) ;
  return (
    <main>
      <Navbar/>
      <Search error={error} fetchUserData={fetchUserData} remaining={requests}/>
     
      {isLoading
           ?
             <ImageWrapper src={preloader} alt="preloader"/> 
            :
            (!error &&
            <>
              <Info user={user} />
              <User user={user} followers={followers}/>
              <Repos repos={repos}/>
            </>) 
      }
    </main>
  )
}

/*const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`; */
const ImageWrapper = styled.img`
  position: absolute;
  width: 100px;
  top:50% ;
  left:50%; 
  transform : translate(-50%,-50%);

`;

