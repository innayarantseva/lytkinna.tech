import React from 'react';
import { Switch, Route } from 'wouter';
import { Navigation } from '../Navigation';
import { Home } from '../../pages/Home';
import { Blog } from '../../pages/Blog';
import { Blogpost } from '../../pages/Blogpost';
import { About } from '../../pages/About';
import styled from 'styled-components';
import './App.css';

const Container = styled.section`
    flex: 1 0 auto;
    width: 100%;
`;

export const App = () => {
    return (
        <Container>
            <header>
                <Navigation />
            </header>

            <main>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="/blog">
                        <Blog />
                    </Route>

                    <Route path="/blog/:post">
                        {(params: { post: string }) => (
                            <Blogpost id={params.post} />
                        )}
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/:rest*">
                        {(params: { rest: string }) =>
                            `404, Sorry the page ${params.rest} does not exist!`
                        }
                    </Route>
                </Switch>
            </main>
        </Container>
    );
};
