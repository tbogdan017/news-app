import styles from './NewsText.module.scss'
import { IData_SnippetNews } from '../../types/news-snippets'
import { Flex, Typography } from 'antd'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { useState } from "react"
const { Paragraph, Text } = Typography;

interface NewsProps {
    news: IData_SnippetNews
}

export default function NewsText({ news }: NewsProps) {
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(!show)
    }

    const { HIGHLIGHTS, KW, AB } = news;
    const joinedText = HIGHLIGHTS.join(';') + AB
    const splittedText = joinedText.split(/(<kw>.*?<\/kw>)/g) 


    return (
        <Flex className={styles.card_news__text_wrapper}>
            <Paragraph className={show ? `${styles.full}` : `${styles.hidden}`} style={{ margin: 0 }}>
                {splittedText.map((text, i) => {
                    const matched = text.match(/<kw>(.*?)<\/kw>/)

                    if (matched) {
                        const wordNeeded = matched[1]
                        const cleanWord = wordNeeded.trim().toLowerCase()
                        const isKW = KW.some((w) => w.value.trim().toLowerCase() === cleanWord)

                        return (
                            <span 
                                key={`${i}-${wordNeeded}`}
                                style={{
                                    backgroundColor: isKW ? '#1677ff' : 'transparent',
                                    padding: '0 3px',
                                    borderRadius: '3px'
                                }}
                                >
                                {wordNeeded}
                                </span>
                        )
                    }
                    return <span key={`${i}-${text}`}>{text}</span>
                })}
            </Paragraph>

            <Flex gap={6} className={styles.news_card__expand}
                onClick={handleShow}
            >
                <Text className="tertiary_text">{show ? 'Show less' : 'Show more'}</Text>
                {show ? <CaretUpOutlined /> : <CaretDownOutlined />}
            </Flex>
        </Flex>
    )
}