import styles from './NewsHeader.module.scss'
import { Flex, Typography, Tag } from 'antd'
import utils from '../../utils/dateFormat'
import { GlobalOutlined, BookOutlined, UserOutlined } from '@ant-design/icons'
import { IData_SnippetNews } from '../../types/news-snippets'
import { getFlag } from '../../utils/flags'
import squareIcon from '../../assets/square-icon.svg'
import squareInfoIcon from '../../assets/square-info-icon.svg'

const { Text } = Typography

interface NewsProps {
    news: IData_SnippetNews,
    minimized?: boolean
}

export default function NewsHeader({ news, minimized = false }: NewsProps) {
    const dayMonth = news.DP.slice(0, 6)
    const day = parseInt(dayMonth.slice(0, 2))

    const month = dayMonth.slice(3)
    const year = news.DP.slice(-5)

    function formatReach(reach: number): string {
        if (reach < 1000) {
            return reach.toString()
        }
        return `${((reach / 1000)).toFixed(1)}K`
    }

    const formattedReach = formatReach(news.REACH)

    const emoji = getFlag(news.CNTR.toLowerCase())

    return (
        <>
            <Flex justify="space-between">
                <Flex gap={18} style={{ width: "fit-content" }}>

                    <Flex gap={4}>
                        <Text className={!minimized ? 'primary_text' : 'secondary_text'}>{day}</Text>
                        <Text className="secondary_text">{month}</Text>
                        <Text className="secondary_text">{year}</Text>
                    </Flex>

                    <Flex gap={4}>
                        <Text className="primary_text">{formattedReach}</Text>
                        <Text className=
                            {!minimized ? 'secondary_text' : 'primary_text'}
                        >
                            {!minimized ? 'Reach' : 'Top Reach'}
                        </Text>
                    </Flex>

                    <Flex gap={4}>
                        {!minimized &&
                            <>
                                <Text className="secondary_text">Top Traffic:</Text>

                                {news.TRAFFIC.map((item, i) => (
                                    <Flex key={`${i}-${item.value}`} gap={4}>
                                        <Text className="secondary_text">{item.value}</Text>
                                        <Text className="primary_text">{utils.toPercent(item.count)}</Text>
                                    </Flex>
                                ))}
                            </>
                        }

                    </Flex>

                </Flex>

                <Flex gap={12}>
                    {!minimized &&

                        <Tag className={styles.news_card__sent}
                            style=
                            {{
                                backgroundColor: news.SENT === 'Negative' ? '#d75f5f' : '#77f8b7',
                                border: news.SENT === 'Negative' ? '#d75f5f' : '#77f8b7',
                            }}
                        >
                            {news.SENT}
                        </Tag>
                    }

                    <img src={squareInfoIcon} className={styles.news_card__icon} />
                    <img src={squareIcon} className={styles.news_card__icon} />
                </Flex>
            </Flex>

            <Text className="tertiary_text" style={{ fontSize: "22px" }}>{news.TI}</Text>

            <Flex gap="middle" align="center">

                <Flex>
                    <GlobalOutlined className="secondary_text" style={{ marginRight: "0.25em" }} />
                    <a href={'https://' + news.DOM} target="_blank" style={{ textDecoration: "underline" }}>{news.DOM}</a>
                </Flex>

                <Flex align="center">
                    <Text style={{ fontSize: "1.2rem", marginRight: "0.25em" }}>{emoji}</Text>
                    <Text className="secondary_text">{news.CNTR}</Text>
                </Flex>

                <Flex>
                    <BookOutlined className="secondary_text" style={{ marginRight: "0.25em" }} />
                    <Text className="secondary_text">{news.LANG}</Text>
                </Flex>

                <Flex>
                    <UserOutlined className="secondary_text" style={{ marginRight: "0.25em" }} />
                    <Text className="secondary_text">{news.AU}</Text>
                </Flex>
                
            </Flex>
        </>
    )
}