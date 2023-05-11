import styled from "styled-components";

export const StyledCategories = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .category-btns {
        width: 100%;

        .category-btn {
            width: 50%;
            height: 2.5rem;
            border: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: ${({theme}) => theme.colors.textMain};
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
            margin: .5rem;
            text-decoration: none;
            color: #588157;
            text-transform: uppercase;
            font-weight: bold;

            &:hover {
                box-shadow: inset 0 0 1rem ${({theme}) => theme.colors.accent}40;
            }

            .light-level {
                margin-bottom: .25rem;

                svg {
                    margin: 0 .25rem;
                }
            }

            .difficulty-level {
                height: .5rem;
                width: .5rem;
                border-radius: 50%;
                margin-right: .5rem;
            }

            .easy  {
                background: green;
            }

            .hard {
                background: red;
            }
        }

        .difficulty {
            display: flex;
            flex-direction: row;
        }
    }

    @media (min-width: 768px) {
        max-width: 60rem;

        .category {
            height: 20rem;
        }
    }
`;