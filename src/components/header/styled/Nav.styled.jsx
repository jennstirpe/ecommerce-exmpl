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

        a, button {
            margin-right: 1rem;
        }
    }

    .main-menu {
        position: absolute;
        top: 2rem;
        width: 100%;
        justify-content: space-evenly;

        .shop-menu {
            position: absolute;
            top: 1.75rem;
            list-style: none;
            padding: 1rem;
            text-align: center;
            background: ${({theme}) => theme.colors.bgMain};

            .shop-menu-item {
                margin: .35rem 0;
                
                &:last-of-type {
                    border-top: 1px solid black;
                    margin-top: 1rem;
                    padding-top: .25rem;
                }
            }
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