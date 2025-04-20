import styles from "./NewsCard.module.scss"
import { IData_SnippetNews } from "../../types/news-snippets"
import utils from "../../utils/dateFormat"
import NewsHeader from "../NewsHeader/NewsHeader"
import NewsText from "../NewsText/NewsText"
import NewsTags from "../NewsTags/NewsTags"
import NewsDuplicates from "../NewsDuplicates/NewsDuplicates"
import SourceButton from "../SourceButton/SourceButton"
import DuplicatesButton from "../DuplicatesButton/DuplicatesButton"
import { Card } from 'antd'

interface NewsProps {
    newsData: IData_SnippetNews
}

export default function NewsComponent({ newsData }: NewsProps) {
   
    const formatedNews: IData_SnippetNews = {
        ...newsData,
        DP: utils.dateFormat(newsData.DP)
    }

    
    return (
        <div className={styles.news_card_wrapper}>

            <Card className={styles.news_card}>
                <NewsHeader news={formatedNews} />

                <NewsText news={formatedNews} />

                <NewsTags news={formatedNews} />

                <SourceButton url={formatedNews.URL}/>

                <NewsDuplicates />

                <Card className={styles.news_card__minimized}>
                    <NewsHeader news={formatedNews} minimized />
                </Card>

                <DuplicatesButton />

            </Card >
        </div >
    )
}