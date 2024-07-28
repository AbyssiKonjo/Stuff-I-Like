import {useState, useEffect} from 'react'
import axios from 'axios'
// import { HashRouter, Routes, Route } from 'react-router-dom'

const Albums = () => {
    const [ albums , setAlbums ] = useState([]);
    
    useEffect(() => {
        axios.get('./ALBUMS.json')
            .then(response => {
                console.log(response.data);
                setAlbums(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    // ALBUM CARDS
    const AlbumCard = ({albums}) => {
        const mappedAlbums = albums.map((album, index) => {
            return (
                <div key={index} className='album-card'>
                    <div className='album-cover-image'>
                        <img src={album.cover_image} alt={album.first_name}/>
                    </div>
                    <div className='album-details'>
                        <h2>{album.album_name}</h2>
                        <h3>Album By: {album.artist}</h3>
                        <h4>{album.release_year}</h4>
                    </div>
                </div>
            )
        })
        return (
            <>
                {mappedAlbums}
            </>
        )
    }

    // MASTER RETURN
    return (
        <>
            <div className='album-card-grid'>
                <AlbumCard albums={albums}/>
            </div>
        </>
    )
}

export default Albums