import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto 2.5rem;
    width: 62vw;

    a {
        background: var(--blue);
        width: 100%;
        padding: 1rem;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        border-radius: 0.35rem;
        margin-bottom: 0.8rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media screen and (min-width: 1256px) {
        margin-top: 10vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        gap: 1rem;

        a {
            margin: 0;
        }
    }
`;