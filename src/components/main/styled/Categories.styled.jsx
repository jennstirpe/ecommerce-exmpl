import styled from "styled-components";

export const StyledCategories = styled.section`
    max-width: 28rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .category-btns {
        
        .category-btn {
            width: 50%;
        }
    }

    .category {
        height: 24rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        .category-option {
            border: 1px solid black;
            height: 10rem;
            width: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    @media (min-width: 768px) {
        max-width: 60rem;

        .category {
            height: 20rem;
        }
    }
`;