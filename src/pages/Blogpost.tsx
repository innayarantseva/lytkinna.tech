import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { POSTS } from '../data/posts';

const getHeadingByPostId = (id: string) => {
    const postMetadata = POSTS.find((post) => post.id === id);

    return postMetadata ? postMetadata.heading : `A post with ID ${id}`;
};

const Container = styled.article`
    width: 100%;
    max-width: 700px;
`;

type BlogpostProps = {
    id: string;
};

export const Blogpost: React.FC<BlogpostProps> = ({ id }) => {
    const [content, setContent] = useState('');

    const heading = useMemo(() => getHeadingByPostId(id), []);

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
                <ReactMarkdown
                    children={content}
                    components={{
                        img: ({ node, ...props }) => (
                            <img style={{ maxWidth: '100%' }} {...props} />
                        )
                    }}
                />
            </Container>
        </Page>
    );
};
