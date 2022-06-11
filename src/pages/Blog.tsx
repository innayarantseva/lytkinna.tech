import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { Page } from '../components/Page';

const Time = styled.time`
    color: grey;
`;

const Ul = styled.ul`
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

const PostHeading = styled.h4`
    color: #e21e5e;
`;

const Description = styled.p`
    flex-grow: 2;
`;

type PostLinkProps = {
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
                <PostHeading>{heading}</PostHeading>
                <Description>{description}</Description>

                {tags.length
                    ? tags.map((tag) => <div key={tag}>{tag}</div>)
                    : ''}
            </Link>
        </Li>
    );
};

const StyledPostLink = styled(PostLink)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    padding: 1em;

    text-decoration: none;
    color: black;
`;

export const Blog = () => {
    return (
        <Page heading="Blog">
            <Ul>
                <StyledPostLink
                    href="/blog/first-post"
                    heading="Tech Diary #1: Getting A Space For The Blog"
                    description="Setting up a domain name and a hosting for the site"
                    date="sometime soon"
                    tags={['tech_diary']}
                />
                <StyledPostLink
                    href="/blog/second-post"
                    heading="Tech Diary #2: Dockerize The Site!"
                    description="Wrapping it all in Docker"
                    date="sometime soon"
                    tags={['tech_diary']}
                />
                <StyledPostLink
                    href="/blog/third"
                    heading="Tech Diary #3: Adding React, TS And Bundling"
                    description=""
                    date="sometime soon"
                    tags={['tech_diary']}
                />
            </Ul>
        </Page>
    );
};
