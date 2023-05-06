import styled from "styled-components";

export const StyledProducts =  styled.main`

    .filters {
        margin: 0 auto;
        max-width: 30rem;

        .filters-list {
            display: flex;
            justify-content: space-evenly;
            list-style: none;
        }
    }

    .products {
        padding: 1rem;
        max-width: 60rem;
        margin: 0 auto;

        .products-list {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
    }
`;