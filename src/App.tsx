import './styles/_globals.scss'
import { newsData } from './data/news-data'
import NewsCard from "./components/NewsCard/NewsCard"


function App() {

  return (
    <div className="container">
      {newsData.map((newsData) => (
        <NewsCard key={newsData.ID} newsData={newsData} />
      ))}
    </div>
  )
}

export default App
