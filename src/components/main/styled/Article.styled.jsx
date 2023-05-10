import styled from "styled-components";

export const StyledArticle = styled.section`
    height: 17rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.colors.accent}25;

    .container {
        max-width: 60rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .article-title {
            margin-bottom: 2rem;
            line-height: 2.25rem;
            font-size: clamp(1.15rem, 0.9029rem + 1.1294vw, 1.75rem);
            box-shadow: 0 0rem 1rem ${({theme}) => theme.colors.accent}75;
            padding: 1rem;
            border-radius: .5rem;
        }

        .article-desc {
            margin-bottom: .5rem;
            font-size: clamp(0.9rem, 0.8588rem + 0.1882vw, 1rem);
            border-bottom: 1px solid ${({theme}) => theme.colors.textMain}75;
            padding: .25rem;
        }
    }
`;