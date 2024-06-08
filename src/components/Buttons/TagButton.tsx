import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

type TagButtonProps = {
    isActive: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export default function TagButton(props: TagButtonProps) {
    const { isActive = false, children, ...rest } = props

    return (
        <button
            className={cx(styles['button-tag'], {
                [styles['button-tag--active']]: isActive,
            })}
            {...rest}
        >
            {children}{' '}
        </button>
    )
}
