import styled from "styled-components";

import banner from "../../../assets/banner/banner.jpg"

export const StyledBanner = styled.section`
    margin-top: 14.8rem;
    position: relative;
    height: 30rem;
    display: flex;
    align-items: center;
    
    .banner-content {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .banner-headline {
            padding: 1rem;
            text-align: center;
            font-size: clamp(1.75rem, 1.2353rem + 2.3529vw, 3rem);
            background: ${({theme}) => theme.colors.textMain}50;
            margin: 3rem 5%;
            border: 3px solid white;
            color: white;
        }

        .banner-links {
            .banner-link {
                display: block;
                text-align: center;
            }
        }
    }
    
    .banner-img {
        position: absolute;
        top: 0;
        z-index: -5;
        height: 100%;
        width: 100%;
        background-image: url(${banner});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }


    @media (min-width: 900px) {
        height: 40rem;

        .banner-content {
            display: flex;
            flex-direction: row;

            .banner-headline {
                padding: 2rem 10%;
                width: 50%;
            }

            .banner-links {
                width: 50%;
                padding-right: 2rem;

                .banner-link {
                    margin: 2rem 0;
                }
            }
        }
    }
`;