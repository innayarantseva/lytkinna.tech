import React from 'react';
import { StyledComponentProps } from 'styled-components';
import { Heading } from './Heading';
import { Section } from './Section';

type PageProps = {
    heading: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ heading, children, className }) => {
    return (
        <Section className={className}>
            <Heading>{heading}</Heading>
            {children}
        </Section>
    );
};
