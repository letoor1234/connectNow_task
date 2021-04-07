import React from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './App'
import {BrowserRouter} from "react-router-dom";

//const storeInit = store()

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
    )