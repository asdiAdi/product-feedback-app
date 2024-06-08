import React from 'react'
import ArrowUpIcon from '../Icons/ArrowUpIcon.tsx'
import cx from 'classnames'
import styles from './styles.module.scss'

type UpvoteButtonProps = {
    isActive: boolean
    count: number
    orientation?: 'horizontal' | 'vertical'
} & React.HTMLAttributes<HTMLButtonElement>

export default function UpvoteButton(props: UpvoteButtonProps) {
    const {
        count = 0,
        isActive = false,
        orientation = 'vertical',
        ...rest
    } = props

    return (
        <button
            className={cx(styles['button-upvote'], {
                [styles['button-upvote--active']]: isActive,
                [styles['button-upvote--horizontal']]:
                    orientation === 'horizontal',
                [styles['button-upvote--vertical']]: orientation === 'vertical',
            })}
            {...rest}
        >
            <span>
                <ArrowUpIcon />
                {count}
            </span>
        </button>
    )
}
