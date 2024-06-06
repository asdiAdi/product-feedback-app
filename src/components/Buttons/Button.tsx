import styles from './styles.module.scss'
import React from 'react'

type ButtonProps = {
    type: '1' | '2' | '3' | '4'
} & React.HTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
    const { type = '1', children } = props

    return <button className={styles[`button-${type}`]}>{children}</button>
}

export default Button
