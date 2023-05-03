import styled from "styled-components";

export const StyledHeader = styled.header`
    
    .updates-bar {
        width: 100vw;
        height: 3rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid black;
        
        .updates {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            list-style: none;
            position: relative;
            height: 6rem;
            /* animation: 5s scrollUpdates ease-in-out infinite alternate; */
            
            @keyframes scrollUpdates {
                0% {
                    bottom: 0;
                }

                25% {
                    bottom: 0;
                }

                75% {
                    bottom: 3rem;
                }

                100% {
                    bottom: 3rem;
                }
            }

            .update {
                font-size: 1.25rem;
            }
        }
    }

    .company-logo {
        text-align: center;
        font-size: 3rem;
        padding: .75rem 0;

        a {
            text-decoration: none;
        }
        
    }
`;