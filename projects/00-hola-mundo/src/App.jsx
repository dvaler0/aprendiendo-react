import { TwitterFollowCard } from "./TwitterFollowCard";

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

export function App () {
    return (
        <section className="App">
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
    )
}