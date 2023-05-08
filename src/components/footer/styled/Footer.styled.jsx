import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* max-width: 90rem; */
    margin: 0 auto;
    padding: 1.5rem 0;
    background: ${({theme}) => theme.colors.accent};
    
    section {
        width: 100%;
        max-width: 35rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .company-details {
        .company-title {
            margin-bottom: .5rem;
            font-size: 2.25rem;
            text-transform: uppercase;
        }

        .company-mission {
            margin-bottom: .5rem;
            line-height: 1.25rem;
            width: 80%;
            font-size: .75rem;
            text-align: center;
            
        }

        .company-socials {
            list-style: none;
            display: flex;
            justify-content: space-between;
            width: 8rem;

            li {
                transition: ${({theme}) => theme.transition};

                &:hover {
                    cursor: pointer;
                    color: #ffffff75;
                }
            
            }
        }
    }

    .actions {
        .actions-links {
            list-style: none;
            text-align: center;

            .actions-link {
                margin: .5rem 0;
                font-size: .9rem;
                transition: ${({theme}) => theme.transition};

                &:hover {
                    cursor: pointer;
                    color: #ffffff75;
                }
            }
        }
    }

    .newsletter {
        .signup {
            width: 22rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            .email-label {
                text-align: center;
                margin-bottom: .75rem;
                font-size: .9rem;
            }

            #email-input, .email-submit {
                height: 2.25rem;
                padding: .5rem;
                border: none;
            }

            #email-input {
                border-top-left-radius: .25rem;
                border-bottom-left-radius: .25rem;

                &::placeholder {
                    font-family: ${({theme}) => theme.fonts.body};
                    letter-spacing: 1px;
                    font-size: .75rem;
                }
            }

            .email-submit {
                background: ${({theme}) => theme.colors.textMain};
                color: #fff;
                transition: ${({theme}) => theme.transition};
                border-top-right-radius: .25rem;
                border-bottom-right-radius: .25rem;

                &:hover {
                    background: #ffffff75;
                    color: ${({theme}) => theme.colors.textMain};
                }
            }
        }
    }

    @media (min-width: 900px) {
        flex-direction: row;
    }
`;