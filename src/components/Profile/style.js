import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 3.5rem;
        width: 110px;
        height: auto;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid var(--blue);
        margin-bottom: 1.3rem
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0.1rem
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
    }
`;