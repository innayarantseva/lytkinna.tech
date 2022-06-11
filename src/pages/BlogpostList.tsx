import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';

export const BlogpostList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 15px;
    justify-content: center;
    padding: 0;
    margin: auto;
    width: 100%;
`;

const Li = styled.li`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    min-height: 230px;

    border: 1px solid grey;
    border-radius: 16px;

    transition: color ease-in-out 0.2s;

    &:hover {
        border-color: #e21e5e;
    }
`;

const Time = styled.time`
    color: grey;
`;

const Heading = styled.h3`
    color: #e21e5e;
`;

const Description = styled.p`
    flex-grow: 2;
`;

export type PostLinkProps = {
    href: string;
    className?: string;
    heading: string;
    description: string;
    date: string;
    tags?: string[];
};

const PostLink: React.FC<PostLinkProps> = ({
    href,
    className,
    heading,
    description,
    date,
    tags
}) => {
    return (
        <Li>
            <Link href={href} className={className}>
                <Time dateTime={date}>{date}</Time>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>

                {tags.length
                    ? tags.map((tag) => <div key={tag}>{tag}</div>)
                    : ''}
            </Link>
        </Li>
    );
};

export const BlogpostLink = styled(PostLink)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    padding: 1em;

    text-decoration: none;
    color: black;
`;
