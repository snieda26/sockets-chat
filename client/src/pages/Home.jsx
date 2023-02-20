import React, { useState } from "react"
import { Link } from "react-router-dom"

import styles from '../styles/Home.module.css'


function Home() {
    const [values, setValues] = useState({ name: '', room: '' })
    const handleChange = e => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleClickIn = (e) => {
        const isDisabled = Object.values(values).some(v => !v)
        console.log(isDisabled)
        if (isDisabled) e.preventDefault()
    }


    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Join</h1>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <input type="text"
                            name="name"
                            placeholder="Username"
                            className={styles.input}
                            onChange={handleChange}
                            value={values.name}
                            autoComplete="off" />
                    </div>

                    <div className={styles.group}>
                        <input type="text"
                            name="room"
                            placeholder="room"
                            className={styles.input}
                            onChange={handleChange}
                            value={values.room}
                            autoComplete="off" />
                    </div>

                    <Link to="/chat" onClick={handleClickIn}>
                        <button className={styles.button}>Sign In</button>
                    </Link>
                </form>
            </div>

        </div>
    )
}

export default Home