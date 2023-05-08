import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100vw;
    display: flex;
    position: relative;

    .mobile-menu-btn {
        margin-right: auto;
    }

    .nav-section {
        display: flex;
        align-items: center;
        background: ${({theme}) => theme.colors.bgMain};
        padding: .5rem 0;

        a, button {
            margin-right: 1rem;
        }
    }

    .main-menu {
        position: absolute;
        top: 2.5rem;
        width: 100%;
        justify-content: space-evenly;

        .shop-menu {
            position: absolute;
            top: 2rem;
            list-style: none;
            padding: 1rem;
            text-align: center;
            background: ${({theme}) => theme.colors.bgMain};
            border-radius: .5rem;
            box-shadow:
                1.2px 1.7px 2.2px rgba(0, 0, 0, 0.02),
                2.8px 4px 5.3px rgba(0, 0, 0, 0.028),
                5.3px 7.5px 10px rgba(0, 0, 0, 0.035),
                9.4px 13.4px 17.9px rgba(0, 0, 0, 0.042),
                17.5px 25.1px 33.4px rgba(0, 0, 0, 0.05),
                42px 60px 80px rgba(0, 0, 0, 0.07)
                ;

            .shop-menu-item {
                margin: .35rem 0;
                
                &:last-of-type {
                    border-top: 1px solid ${({theme}) => theme.colors.accent}50;
                    margin-top: 1rem;
                    padding-top: .25rem;
                }
            }
        }

        .search-bar {
            background: none;
            border: 1px solid ${({theme}) => theme.colors.accent};
            height: 2rem;
            padding: .5rem;
            font-family: ${({theme}) => theme.fonts.body};
            color: ${({theme}) => theme.colors.accent};
            border-radius: .5rem;
        }
        
    }

    .menu-closed {
        display: none;
    }


    @media (min-width: 768px) {
        .mobile-menu-btn {
            display: none;
        }

        .main-menu {
            position: static;
            justify-content: flex-start;
            
            a, button {
                margin-right: 3rem;
            }

            .shop-menu {
                left: 5.5rem;

            }
        }

        .menu-closed {
            display: flex;
        }
    }
`;