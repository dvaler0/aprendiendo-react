import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde 0</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1726983029850038272/LKyDa6kb_400x400.jpg" alt="Fotografía de immdaviid" />
        <p>Hola! Me llamo David y estoy creando un clon de React Router.</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la home</button>
    </>
  )
}


function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
