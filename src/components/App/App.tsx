import React from 'react';
import styles from './App.module.css';
import './App.css';

export const App = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.heading}>
                <p>lytk</p>
                <p className={styles.name}>inna</p>
            </h1>
            <p className={styles.description}>
                This is my very own personal site! WOW! 🎉
            </p>
        </section>
    );
};
