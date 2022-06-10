import React from 'react';
import styled from 'styled-components';

const Post = styled.article``;

type BlogpostProps = {
    id: string;
};

export const Blogpost: React.FC<BlogpostProps> = ({ id }) => {
    return (
        <Post>
            <h2>{`A post with ID ${id}`}</h2>
            <p>This is soon to be implemented 👩‍💻 Sorry 😬</p>
        </Post>
    );
};
