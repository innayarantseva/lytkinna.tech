import React from 'react';
import styled from 'styled-components';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

// // languages
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import nginx from 'react-syntax-highlighter/dist/esm/languages/prism/nginx';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('nginx', nginx);

// styles
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
    border-radius: 16px;
`;

export const Code: React.FC<CodeProps> = ({
    node,
    inline,
    className,
    children,
    ...props
}) => {
    const match = /language-(\w+)/.exec(className || '');

    if (inline || !match) {
        return (
            <code className={className} {...props}>
                {children}
            </code>
        );
    }

    const [, language] = match;
    const str = String(children).replace(/\n$/, '');

    return (
        <StyledSyntaxHighlighter
            children={str}
            style={prism}
            language={language}
            customStyle={{ margin: '0 -1em' }}
            // PreTag="div"
            {...props}
        />
    );
};
