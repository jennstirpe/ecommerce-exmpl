import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    z-index: 10;
    top: 0;
    background: ${({theme}) => theme.colors.bgMain};
    box-shadow: 0 0 .5rem #00000030;

    .updates-bar {
        width: 100vw;
        height: 3rem;
        overflow: hidden;
        position: relative;
        background: ${({theme}) => theme.colors.accent}95;

        .updates {
            list-style: none;
            position: relative;
            height: 5rem;
            
            .update {
                position: absolute;
                height: 1rem;
                text-align: center;
                top: 1rem;
                left: 0;
                right: 0;
                margin-left: 0;
                margin-right: 0;
                font-size: clamp(0.75rem, 0.6882rem + 0.2824vw, 0.9rem);
            }
            .first {
                animation: 8s fade-in-one ease-in-out infinite alternate;
            }

            .second {
                animation: 8s fade-in-two ease-in-out infinite alternate;
            }
           
            @keyframes fade-in-one {
                0% {
                    opacity: 1;
                }

                50% {
                    opacity: 0;
                }

                100% {
                    opacity: 0;
                }
            }

            @keyframes fade-in-two {
                0% {
                    opacity: 0;
                }

                50% {
                    opacity: 0;
                }

                75% {
                    opacity: 1;
                }

                100% {
                    opacity: 1;
                }
            }
        }
    }

    .company-logo {
        text-align: center;
        /* font-size: clamp(1.75rem, 1.4412rem + 1.4118vw, 2.5rem); */
        font-size: 2.5rem;

        a {
            text-decoration: none;
            color: ${({theme}) => theme.colors.textMain};
            text-transform: uppercase;
            letter-spacing: 4px;

            h1 {
                padding-top: .75rem;
                font-family: ${({theme}) => theme.fonts.accent};
            }
        }
        
    }
`;