import React,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { search } from '../redux/actions/filterAction'

const Searcher = ()=>{
    const dispatch= useDispatch()
    const [filters, setFilters] = useState({name:'', rate: '1', orderBy:'date', orderDir: 'up'})
    const [orderArrow, setOrderArrow] = useState('up')
    useEffect(()=>{
        let filterData={
            name: filters.name,
            rate: filters.rate,
            orderBy: filters.orderBy,
            orderDir: orderArrow
        }
        dispatch(search(filterData))
    }, [filters, orderArrow])

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFilters({
            ...filters,
            [name]: value
        })
    }

    const clearFilters=()=>{
        setFilters({
            name:'',
            rate: '1',
            orderBy:'date',
            orderDir: 'up'
        })
        setOrderArrow('up')
    }
    return(
        <nav className='card bg-mid panel'>
            <section>
                <h3>Filter Results</h3>
                <label htmlFor="input_name">Name(contains)</label>
                <input 
                    type="text" 
                    name="name" 
                    id="input_name" 
                    placeholder="Text string" 
                    value={filters.name} 
                    onChange={(e)=>handleChange(e)}
                />
            </section>
            <section className='row'>
                <div className='input-group'>
                    <label htmlFor="input_rate">Minimun Score</label>
                    <input 
                        type='number' 
                        name="rate" 
                        id="input_rate" 
                        placeholder='1' 
                        min='1' 
                        max='10' 
                        value={filters.rate} 
                        onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="input_order">Order By</label>
                    <div className='select'>
                        { 
                            orderArrow==='up'?
                                <span 
                                    className="one glyphicon glyphicon-chevron-up" 
                                    onClick={()=>setOrderArrow('down')}
                                ></span>
                            :
                                <span 
                                    className="one glyphicon glyphicon-chevron-down" 
                                    onClick={()=>setOrderArrow('up')}
                                ></span>
                        }
                        
                        <select 
                            value={filters.orderBy}
                            className='dropdown-input'
                            name="orderBy" id="input_order" placeholder='Release Date' 
                            onChange={(e)=>handleChange(e)}
                        >
                            <option value="date">Release Date</option>
                            <option value="rate">Score</option>
                            <option value="name">Name</option>
                        </select>
                        <span className="two glyphicon glyphicon-triangle-bottom"></span>
                    </div>
                </div>
                <button onClick={clearFilters} className='bg-accent clear-btn'>
                    Clear
                </button>
            </section>
        </nav>
    )
}

export default Searcher