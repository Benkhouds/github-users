import React from 'react';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import {Card} from './UI'
const UserCard = (user) => {
  const {avatar_url, html_url,name, company, bio, blog, location, twitter_username} = user;
  return(
    
        <Wrapper type="User">
            <header>
               <img src={avatar_url} alt={name} />
               <div>
                 <h4>{name}</h4>
                 <p>@{twitter_username || name}</p>
               </div>
               <a href={html_url}>follow</a>
            </header>
            <p className="bio">{bio}</p>
            <div className="links">
               <p><MdBusiness/>{company}</p>
               <p><MdLocationOn/>{location || 'Unknown'}</p>
                <a href={blog}><MdLink/>{blog}</a>
            </div>
        </Wrapper>

  )
};
const Wrapper = styled(Card)`
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default UserCard;
