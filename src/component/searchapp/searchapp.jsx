import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './searchapp.css'


const SearchApp = ({ saved }) => {
    const [term, setTerm] = useState(' ')
    const [debounceSearch, setDebounceSearch] = useState(term)
    const [result, setResult] = useState([])

    const [bookmark, setBookmark] = useState(false);

    console.log(saved);
    const ref = useRef();
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceSearch(term)
            setBookmark(false);
        }, 1200);
        return () => clearTimeout(timeout)
    }, [term])


    useEffect(() => {
        const search = async () => {
            const responed = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceSearch,
                }
            })
            setResult(responed.data.query.search);

        }
        search()
    }, [debounceSearch]);

    const handleBookmark = () => {
        setBookmark(!bookmark);
        saved.push(term)        
    }

    const fetchResult = result.map((el) => {
        return (
            <div className="card" key={el.pageid} ref={ref}>
                <div className="card-title">
                    <a href={`https://en.wikipedia.org/wiki/${el.title}`}>{el.title}</a>
                </div>
                <p><span dangerouslySetInnerHTML={{ __html: el.snippet }} /></p>
            </div>
        )
    })

    return (
        <div className='container'>
            <div className='search-bar'>
                <div>
                    <input
                        type='text'
                        className='form-control py-3 my-3'
                        id='exampleFormControlInput1'
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />

                </div>
                <div onClick={handleBookmark} className="mx-1 mt-4" >
                    {bookmark === true ? <i className="fas fa-star yellow"></i> : <i className="fas fa-star"></i>}
                </div>
            </div>


            <div className="card-container">
                {fetchResult}
            </div>
        </div>


    )
}

export default SearchApp