import React from 'react';
import styled from 'styled-components';
import { Link, LinkProps, useLocation, useRoute } from 'wouter';

const StyledLink = styled.a<{ active: boolean }>`
    display: block;
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    padding: 0.5em;
`;

export const Navlink: React.FC<LinkProps> = (props) => {
    const [location] = useLocation();
    const [isRouteMatched] = useRoute(props.href);

    // to refactor
    const isActive =
        isRouteMatched ||
        (props.href !== '/' && location.startsWith(props.href));

    return (
        <Link {...props}>
            <StyledLink active={isActive}>{props.children}</StyledLink>
        </Link>
    );
};
