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
            background: ${({theme}) => theme.colors.bgMain}95;
            margin-bottom: 3rem;
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


    @media (min-width: 768px) {
        height: 40rem;

        .banner-content {
            .banner-headline {
                padding: 2rem 10%;
            }
        }
    }
`;