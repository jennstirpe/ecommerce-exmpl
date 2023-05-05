import styled from "styled-components";

export const StyledLightArticle =  styled.main`
    

    .article-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;

        .article-section-header {
            margin: 1rem 0;
            text-align: center;
            border-bottom: 1px solid black;
            text-transform: uppercase;
        }

        .article-img  {
            width: 100%;
            max-width: 35rem;
        }

        .article-list {
            list-style: none;

            .list-item  {
                padding: 1rem;

                .list-item-header {
                    text-transform: uppercase;
                    margin-bottom: .5rem;
                }

                .list-item-desc {
                    line-height: 1.5rem;
                    max-width: 50rem;
                }
            }
        }
    }

    .article-section:nth-of-type(2) {
        background: #f1f1f1;
    }

    .article-section:nth-of-type(3) {
        background: #d1d1d1;
    }

    .light-test {

        .light-test-inst {
            line-height: 1.5rem;
            font-size: 1.1rem;
        }

        .light-test-results {
            margin: .75rem;

            .light-test-result {
                margin: .15rem 0;

                .result-desc span {
                    font-size: 1.1rem;
                    font-weight: bold;
                }
            }
        }
    }
    
`;