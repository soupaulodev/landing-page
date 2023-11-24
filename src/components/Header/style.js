import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 4rem;
    background-color: var(--backgroundColor2);
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25); */
    border-bottom: 1px solid var(--border)

    .img {
        width: 2.6rem;
        height: auto;

        transition: transform 0.5s;

        &:hover {
            transform: rotate(90deg);
        }
    }
`;
