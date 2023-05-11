import styled from "styled-components";

export const StyledProductThumbnail = styled.div `
    border: 1px solid ${({theme}) => theme.colors.accent};
    border-radius: .25rem;
    width: 12rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: ${({theme}) => theme.transition};
    position: relative;

    &:hover {
        border: 1px solid black;
    }

    .product-img {
        height: 70%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .product-details {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .25rem;

        .product-name {
            margin-bottom: 1rem;
            text-align: center;
            margin: .35rem 0;
            color: ${({theme}) => theme.colors.textMain}; 
        }

        .product-specs {
            display: flex;
            justify-content: space-between;

            .difficulty {
                height: 1rem;
                width: 1rem;
                border-radius: 50%;
                border: 1px solid #fff;
                position: absolute;
                top: .25rem;
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
                position: absolute;
                bottom: 0;

                svg {
                    height: .75rem;
                }
            }
        }
    }
`;