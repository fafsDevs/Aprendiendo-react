import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'mouredev',
    name: 'Brais Moure',
    isFollowing: false
  },
  {
    userName: 'fazt',
    name: 'Fazt Tech',
    isFollowing: false
  },
  {
    userName: 'cazaustre',
    name: 'Carlos Azaustre',
    isFollowing: false
  }
]

export function App () {
  return(
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
      </section>
    )
  }