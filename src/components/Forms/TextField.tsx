import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

type TextFieldProps = {
    // defaultValue: string
} & React.InputHTMLAttributes<HTMLInputElement>
export default function TextField(props: TextFieldProps) {
    // const { defaultValue = '', type, ...rest } = props

    return (
        <div>
            <input
                type="text"
                className={cx(styles['text-field'], {
                    [styles['text-field--error']]: true,
                })}
            />
            <div className={styles['error-message']}>Can't be empty</div>
        </div>
    )
}
