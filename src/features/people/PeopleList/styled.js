import styled from "styled-components";

export const Wrapper = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap:24px;

    @media (max-width: ${({theme}) => theme.breakpoint.tablet}px){
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px){
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
`;
