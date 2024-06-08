import { ReactElement, useState } from 'react'
import ArrowDownIcon from '../Icons/ArrowDownIcon.tsx'
import ArrowUpIcon from '../Icons/ArrowUpIcon.tsx'
import styles from './styles.module.scss'

type Option = {
    label: string
    value: 'up_desc' | 'up_asc' | 'com_desc' | 'com_asc'
}

const OPTIONS: Option[] = [
    { label: 'Most Upvotes', value: 'up_desc' },
    { label: 'Least Upvotes', value: 'up_asc' },
    { label: 'Most Comments', value: 'com_desc' },
    { label: 'Least Comments', value: 'com_asc' },
]

export default function UpvoteDropdown(props) {
    //uselocation data
    const [selected, setSelected] = useState<Option>({
        label: 'Most Upvotes',
        value: 'up_desc',
    })
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles['dropdown-upvote']}>
            <button>
                Sort by : <b>{selected.label}</b>
                {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </button>
            <div>
                {OPTIONS.map((item) => {
                    const { label, value } = item
                    return (
                        <a key={value} href={'/haha'}>
                            {label}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
