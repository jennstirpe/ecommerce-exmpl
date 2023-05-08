import styled from "styled-components";

export const StyledHeader = styled.header`
    
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
        font-size: clamp(1.75rem, 1.4412rem + 1.4118vw, 2.5rem);
        padding: 1rem 0;

        a {
            text-decoration: none;
            color: ${({theme}) => theme.colors.textMain};
            text-transform: uppercase;
            letter-spacing: 4px;

            h1 {
                font-family: ${({theme}) => theme.fonts.accent};
            }
        }
        
    }
`;