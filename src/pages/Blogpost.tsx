import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Markdown } from '../components/Markdown/Markdown';
import { Page } from '../components/Page';
import { Time } from '../components/Time';
import { POSTS } from '../data/posts';

const getPostMetadataById = (id: string) => {
    const postMetadata = POSTS.find((post) => post.id === id);

    return postMetadata;
};

const Container = styled.article`
    display: flex;
    flex-direction: column;

    flex: 1 0 auto;
    width: 100%;
    word-break: break-word;
    max-width: 720px;

    margin-bottom: 8em;
`;

type BlogpostProps = {
    id: string;
};

export const Blogpost: React.FC<BlogpostProps> = ({ id }) => {
    const [content, setContent] = useState('');

    const { heading, date } = useMemo(() => getPostMetadataById(id), []);

    useEffect(() => {
        fetch(`/data/posts/${id}.md`)
            .then((res) => {
                if (res.ok) {
                    return res.text();
                }

                return 'Oops! This post **is not ready** yet. Try again a bit later 🙏';
            })
            .then((text) => {
                setContent(text);
            });
    }, []);

    return (
        <Page heading={heading}>
            <Container>
                <Time>{date}</Time>
                <Markdown content={content} />
            </Container>
        </Page>
    );
};
