import styles from './NewsDuplicates.module.scss'
import { Flex, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Text } = Typography

export default function NewsDuplicates() {
    return (
        <Flex className={styles.duplicates_section}>
            <Flex gap={4}>
                <Text className="secondary_text">Duplicates:</Text>
                <Text className="primary_text">192</Text>
            </Flex>
            <Flex gap={12} style={{ cursor: "pointer" }}>
                <Text className="secondary_text">By Relevance</Text>
                <DownOutlined className={styles.thick_arrow} />
            </Flex>
        </Flex>
    )
}