import styled from "styled-components";

export const StyledProductThumbnail = styled.div `
    border: 1px solid black;
    width: 12rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .product-img {
        height: 50%;
    }

    .product-details {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .25rem;

        .product-name {
            margin-bottom: 1rem;
            text-align: center;
            margin: .35rem 0;
        }

        .product-specs {
            display: flex;
            justify-content: space-between;

            .difficulty {
                height: 1rem;
                width: 1rem;
                border-radius: 50%;
            }

            .easy {
                background: green;
            }

            .medium {
                background: #e9c46a;
            }

            .hard {
                background: red;
            }

            .light-req {

                svg {
                    margin: 0 .1rem;
                }
            }
        }
    }
`;