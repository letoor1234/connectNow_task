import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchApi} from './redux/actions/apiActions'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Nav from './comps/Nav'
import Searcher from './comps/Searcher'
import Main from './comps/Main'
import ContactForm from './comps/ContactForm'
const App =()=>{
    const dispatch = useDispatch()
    const store = useSelector(state=>state.games.data)
    const load = useSelector(state=>state.games.loading)
    const fail = useSelector(state=>state.games.failure)
    const [display, setDisplay]=useState(false)
    useEffect(()=>{
        if(store.length===0){
            dispatch(fetchApi());
        }else if(!load){
            if(!fail){
                setDisplay(true)
            }
        }
    }, [store])

    if(!display){
        return <div className='loader'>Loading...</div>
    }else{
        return(
            <Router>
                <Nav/>
                <Route path='/' exact>
                    <div className='desktop-container'>
                        <Searcher/>
                        <Main/>
                    </div>
                </Route>
                <Route path='/contact'>
                    <ContactForm/>
                </Route>

            </Router>
        )
    }
}

export default App