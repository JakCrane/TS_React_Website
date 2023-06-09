import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width:100%;
    border-radius: 20px;
    border: 1px solid lightblue;
    height: 100%;
    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    button {
        border-radius: 0 0 20px 20px;
        background-color:lightblue;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;