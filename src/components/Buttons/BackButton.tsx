import styles from './styles.module.scss'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon.tsx'

type BackButtonProps = {
    type: 'light' | 'dark'
}

export default function BackButton(props: BackButtonProps) {
    const { type = 'light' } = props

    return (
        <button className={styles[`button-back-${type}`]}>
            <ArrowLeftIcon />
            <span>Go Back</span>
        </button>
    )
}
