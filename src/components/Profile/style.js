import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 3.5rem;
        width: 6.875rem;
        height: auto;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid var(--blue);
        margin-bottom: 1.3rem
    }

    div {
        text-align: center;

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
    }

    @media screen and (min-width: 1256px) {
        width: 80vw;
        margin: 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 10vh;

        img {
            margin: 0;
            margin-right: 1rem;
            width: 7rem;
        }

        h1, h2 {
            text-align: left
        }
    }
`;