import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Code } from '../Code/Code';

type MarkdownProps = {
    content: string;
};

const Img = styled.img`
    max-width: calc(100% + 2em);
    width: calc(100% + 2em);
    border-radius: 16px;
    margin: 0 -1em;
    box-shadow: 2px 2px 12px 4px rgb(0 0 0 / 7%);
`;

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
    return (
        <ReactMarkdown
            children={content}
            components={{
                img: ({ node, ...props }) => <Img {...props} />,
                code: Code
            }}
        />
    );
};
