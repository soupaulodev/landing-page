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
`;