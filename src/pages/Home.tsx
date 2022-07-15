import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';

const Emphasized = styled.p`
    color: #e21e5e;
    text-decoration: underline;
`;

const Description = styled.p`
    display: block;
`;

export const Home = () => {
    return (
        <Page
            heading={
                <React.Fragment>
                    <p>lytk</p>
                    <Emphasized>inna</Emphasized>
                </React.Fragment>
            }
        >
            <Description>
                This is my very own personal site! WOW! 🎉
            </Description>
        </Page>
    );
};
