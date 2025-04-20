import styles from './SourceButton.module.scss'
import { Button } from "antd"

interface NewsUrlProps {
    url: string
}

export default function SourceButton({ url }: NewsUrlProps) {
    return (
        <Button
            className={styles.source_btn}
            href={url}
            target="_blank"
        >
            Original Source
        </Button>
    )
}