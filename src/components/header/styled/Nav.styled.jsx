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
        }

        .menu-closed {
            display: flex;
        }
    }
`;