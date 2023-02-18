import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/Home.module.css'


function Home() {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}></div>
            <h1 className={styles.heading}>Join</h1>


            <form className={styles.form}>
                <div className={styles.group}>
                    <input type="text"
                        name="username"
                        placeholder="Username"
                        className={styles.input}
                        onChange={() => { }}
                        autoComplete="off" />
                </div>

                <div className={styles.group}>
                    <input type="text"
                        name="room"
                        placeholder="room"
                        className={styles.input}
                        onChange={() => { }}
                        autoComplete="off" />
                </div>

                <Link to="/chat">
                    <button className={styles.button}>Sign In</button>
                </Link>
            </form>
        </div>
    )
}

export default Home