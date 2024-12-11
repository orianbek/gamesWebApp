import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Games from './components/Games';

function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://corsproxy.io/https://www.freetogame.com/api/games")
        const data = await response.json()

        const formatGames = data.map(game => ({
          name: game.title,
          img: game.thumbnail,
          realesDate: game.release_date
        }))

        setGames(formatGames)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGames()

  }, []);
  return (
    <div className="App">
      <Games items={games} />
    </div>
  );
}

export default App;
