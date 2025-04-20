import styles from './DuplicatesButton.module.scss'
import { Flex, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Text } = Typography

export default function DuplicatesButton() {
    return (
        <Flex gap={0} className={styles.duplicates_wrapper}>
            <DownOutlined className={styles.thick_arrow} />
            <Text className={styles.duplicates_text}>View Duplicates</Text>
        </Flex>
    )
}