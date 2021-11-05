import styled from 'styled-components';

export default styled.article`

background: var(--clr-white);
padding: ${props=> props.type === "User" ?'1.5rem 2rem' : '1.5rem 0'};
border-top-right-radius: var(--radius);
border-bottom-left-radius: var(--radius);
border-bottom-right-radius: var(--radius);
position: relative;

&::before {
 content: '${props=>props.type}'; 
 position: absolute;
 top: 0;
 left: 0;
 transform: translateY(-100%);
 background: var(--clr-white);
 color: var(--clr-grey-5);
 border-top-right-radius: var(--radius);
 border-top-left-radius: var(--radius);
 text-transform: capitalize;
 padding: 0.5rem 1rem 0 1rem;
 letter-spacing: var(--spacing);
 font-size: 1rem;
}
`
