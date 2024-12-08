import logo from './logo.svg';
import './App.css';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://api.deezer.com/search?q=denis%20loyd")
        const data = await response.json()

        const formatSongs = data.data.map(song => ({
          name: song.title,
          img: song.album.cover_medium,
          duration: song.duration
        }))

        setSongs(formatSongs)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSongs()

  }, []);
  return (
    <div className="App">
      <Song items ={songs}/>
    </div>
  );
}

export default App;
