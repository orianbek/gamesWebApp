import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Games from './components/Games';


function App() {

  const [games, setGames] = useState([]);
  const [searchBar, setSearchBar] = useState('');

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

  const filteredGames = searchBar ? games.filter(game =>
    game.name.toLowerCase().includes(searchBar.toLowerCase())
  ) : games;

  return (
    <div className="App">
      <br></br>
      <h1 className="h1">World's collection of free to play games !</h1>
      <br></br>
      <input
        type="text"
        placeholder="Search for a game"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <br></br><br></br>
      <Games items={filteredGames} />
    </div>
  );
}

export default App;
