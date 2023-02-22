import { TwitterFollowCard } from "./TwitterFollowCard";
import { TwitterTrendingTopicCard } from "./TwitterTrendingTopicCard";

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'immdaviid',
    name: 'David Valero Terrón',
    isFollowing: false
  }
]

const trendingTopics = [
  {
    trendingTopicName: 'BeReal',
    trendingTopicCategory: 'Technology',
    trendingTopicTweets: '23.3K'
  }
]

export function App () {
  return (
    <>
      <section className="App">
        What's happening
        {
          trendingTopics.map(({ trendingTopicName, trendingTopicCategory, trendingTopicTweets }) => {
            return (
              <TwitterTrendingTopicCard 
                key={trendingTopicName}
                trendingTopicName={trendingTopicName}
                trendingTopicCategory={trendingTopicCategory}
                trendingTopicTweets={trendingTopicTweets}
              />
            )   
          })
        }
        {
          users.map(({ userName, name, isFollowing }) => {
            return (
              <TwitterFollowCard 
                key={userName}
                userName={userName} 
                initialIsFollowing={isFollowing}
              >
                {name}
              </TwitterFollowCard>
            )
          })
        }
        </section>  
    </>
  )
}