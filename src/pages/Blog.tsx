import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { Heading } from '../components/Heading';
import { Section } from '../components/Section';

const Time = styled.time`
    color: grey;
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0 0 0;
    margin: auto;
    max-width: 700px;
`;
const Li = styled.li`
    padding: 0;
    margin: 5px;
    list-style: none;
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

    width: 250px;
    min-height: 230px;
    padding: 1em;

    border: 1px solid grey;
    border-radius: 16px;

    text-decoration: none;
    color: black;

    transition: color ease-in-out 0.2s;

    &:hover {
        border-color: #e21e5e;
    }
`;

export const Blog = () => {
    return (
        <Section>
            <Heading>Blog</Heading>
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
            </Ul>
        </Section>
    );
};
