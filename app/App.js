import React, {Fragment} from 'react';

import Nav from './comps/Nav'
import Searcher from './comps/Searcher'
const App =(props)=>{
    return(
        <Fragment>
            <Nav/>
            {}
            <Route path='/' exact>
                <Searcher/>
            </Route>
            <Route path='/contact'>
            </Route>
        </Fragment>
    )
}

export default App