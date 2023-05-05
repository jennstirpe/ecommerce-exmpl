import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    
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
        }

        .company-mission {
            margin-bottom: .5rem;
            line-height: 1.25rem;
            width: 80%;
            font-size: .95rem;
            text-align: center;
        }

        .company-links {
            list-style: none;
            display: flex;
            justify-content: space-between;
            width: 8rem;
        }
    }

    .actions {
        .actions-links {
            list-style: none;
            text-align: center;

            .actions-link {
                margin: .5rem 0;
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
                margin-bottom: .5rem;
            }
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;