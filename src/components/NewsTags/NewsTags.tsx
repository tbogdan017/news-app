import styles from './NewsTags.module.scss'
import { Flex, Tag, Typography } from "antd"
import { SafetyCertificateOutlined } from '@ant-design/icons'
import { IData_SnippetNews } from '../../types/news-snippets'
const { Text } = Typography

interface NewsProps {
    news: IData_SnippetNews
}

export default function NewsTags({ news }: NewsProps) {

    return (
        <Flex className={styles.tags_wrapper}>
            {news.KW.map((item, i) => (
                <Tag key={`${i}-${item.value}`} className={styles.tags_words}>
                    <Flex gap={4}>
                        <SafetyCertificateOutlined className={styles.tags_icon} />
                        <span>{item.value}</span>
                        <span className="primary_text">{item.count}</span>
                    </Flex>
                </Tag>
            ))}
            <Text className="tertiary_text" style={{ cursor: "pointer" }}>Show All +9</Text>
        </Flex>
    )
}