import React from 'react';
import styled from 'styled-components';
import { Heading } from '../components/Heading';
import { Section } from '../components/Section';

const Emphasized = styled.p`
    color: #e21e5e;
    text-decoration: underline;
`;

const Description = styled.p`
    display: block;
`;

export const Home = () => {
    return (
        <Section>
            <Heading>
                <p>lytk</p>
                <Emphasized>inna</Emphasized>
            </Heading>

            <Description>
                This is my very own personal site! WOW! 🎉
            </Description>
        </Section>
    );
};
