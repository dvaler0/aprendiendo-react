export function TwitterTrendingTopicCard ({ trendingTopicName, trendingTopicCategory, trendingTopicTweets }) {
    return (
        <article>
            <span> {trendingTopicCategory} | Trending</span>
            <span>{trendingTopicName}</span>
            <span>{trendingTopicTweets}</span>
        </article>
    )
}