import React from 'react';
import { Page } from '../components/Page';

type BlogpostProps = {
    id: string;
};

export const Blogpost: React.FC<BlogpostProps> = ({ id }) => {
    return (
        <Page heading={`A post with ID ${id}`}>
            <p>This is soon to be implemented 👩‍💻 Sorry 😬</p>
        </Page>
    );
};
