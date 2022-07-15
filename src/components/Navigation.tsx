import React from 'react';
import { Navlink } from './Navlink';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
`;

export const Navigation: React.FC = () => {
    return (
        <Nav>
            <Navlink href="/">Home</Navlink>
            <Navlink href="/blog">Blog</Navlink>
            <Navlink href="/about">About</Navlink>
        </Nav>
    );
};
