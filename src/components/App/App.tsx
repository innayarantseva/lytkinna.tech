import React from 'react';
import { Link, Switch, Route } from 'wouter';
import styles from './App.module.css';
import './App.css';

export const App = () => {
    return (
        <section className={styles.main}>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                </nav>
            </header>

            <Switch>
                <Route path="/">
                    <h1 className={styles.heading}>
                        <p>lytk</p>
                        <p className={styles.name}>inna</p>
                    </h1>
                    <p className={styles.description}>
                        This is my very own personal site! WOW! 🎉
                    </p>
                </Route>

                <Route path="/blog">
                    Blog :)
                    <Link href="/blog/first">My first post</Link>
                </Route>

                <Route path="/blog/:post">
                    {(params: { post: string }) => (
                        <div>Hello, {params.post} post!</div>
                    )}
                </Route>

                <Route path="/blog/tags/:tag">
                    {(params: { tag: string }) => (
                        <div>There's {params.tag} page!</div>
                    )}
                </Route>

                <Route path="/about">About me :)</Route>

                <Route path="/:rest*">
                    {(params: { rest: string }) =>
                        `404, Sorry the page ${params.rest} does not exist!`
                    }
                </Route>
            </Switch>
        </section>
    );
};
