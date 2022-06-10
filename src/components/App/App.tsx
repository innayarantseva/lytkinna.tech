import React from 'react';
import { Switch, Route } from 'wouter';
import { Navigation } from '../Navigation';
import styles from './App.module.css';
import './App.css';
import { Home } from '../../pages/Home';
import { Blog } from '../../pages/Blog';
import { Blogpost } from '../../pages/Blogpost';
import { About } from '../../pages/About';

export const App = () => {
    return (
        <section className={styles.section}>
            <header>
                <Navigation />
            </header>

            <main className={styles.main}>
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
        </section>
    );
};
