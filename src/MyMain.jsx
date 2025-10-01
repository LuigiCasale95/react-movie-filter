import { useState, useEffect } from "react"
import OptionComponents from "./Components/OptionComponents"

const Films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

export default function MyMain() {
    /* Stato array completo */
    const [element, setElement] = useState(Films)

    /* Stato per array Filtrato */
    const [filterFilm, setFilterFilm] = useState (element);

    /* per la ricerca */
    const [search, setSearch] = useState("")
    
    
    /* Ago gni modifica filtra */
    useEffect(() => {
        setFilterFilm(
            element.filter(element => {{
                 return element.genre.includes(search) ;
                }
             })
        )
    }, [search , element]);



    return (
        <main>
        <div className="boxSelect">
            {/* Tasto select per la ricerca per genere */}
            <select name="Genere-Film"
             id="SelectGenre"
             value={search}
             onChange={(e) => { setSearch(e.target.value)}}>
                    <OptionComponents></OptionComponents>
            </select>
                 
        </div>

            {/* Lista dei Film */}
            <div className="boxList">
            <ul>
            {filterFilm.map((film, i) => (
                <li key={i}> {film.title} </li>
            ))}
            </ul>
            
                        </div>

        </main>
    )
}