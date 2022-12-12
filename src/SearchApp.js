import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'


const SearchApp = () => {
    const [term, setTerm] = useState(' ')
    const [debounceSearch, setDebounceSearch] = useState(term)
    const [result, setResult] = useState([])
   

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceSearch(term)
           
        } , 1200);
        return () => clearTimeout(timeout)
    } , [term] )
    

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
       
      
     

    const fetchResult = result.map((el, index) => {
        return (
            <tr key={el.pageid}>
                <th scope='row' >{(index + 1)}</th>
                <td>{el.title}</td>
                <td><span dangerouslySetInnerHTML={{ __html: el.snippet }} /></td>
            </tr>
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='my-3'>
                        <label htmlFor='exampleFormControlInput1' className='form-label'>
                            Search Input
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            onChange={(e) => setTerm(e.target.value)}
                            value={term}
                        />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Desc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchResult}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchApp
