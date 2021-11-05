import React from 'react';
import styled from 'styled-components';
import {Card, FollowerItem} from './UI'

const FollowersCard = ({followers}) => {
  console.log(followers[0])
  return (
    <Wrapper type="Followers">
        <div className="followers">
             {followers.map((follower)=>(<FollowerItem key={follower.id} {...follower}/>))}
        </div>
    </Wrapper>
  )
};

const Wrapper = styled(Card)`
  .followers {
    overflow-y: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;
export default FollowersCard;
