import React from 'react';
import { Page } from '../components/Page';
import { POSTS } from '../data/posts';
import { BlogpostLink, BlogpostList } from './BlogpostList';

export const Blog = () => {
    return (
        <Page heading="Blog">
            <BlogpostList>
                {POSTS.map((post) => (
                    <BlogpostLink key={post.id} {...post} />
                ))}
            </BlogpostList>
        </Page>
    );
};
