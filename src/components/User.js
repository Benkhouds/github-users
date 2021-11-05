import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import FollowersCard from './FollowersCard';

const User = ({user, followers}) => {
  return (
    <section className="section">
      <Wrapper className="section-center">
            <>
              <UserCard {...user} />
              <FollowersCard followers={followers} />
            </>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
