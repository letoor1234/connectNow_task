import React from 'react';

const Searcher = (props)=>{

    return(
        <nav className='card bg-mid panel'>
            <section>
                <h3>Filter Results</h3>
                <label htmlFor="input_name">Name(contains)</label>
                <input type="text" name="input_name" id="input_name" placeholder="Text string"/>
            </section>
            <section>
                <div id='row'>
                    <label htmlFor="input_rate">Minimun Score</label>
                    <select name="input_rate" id="input_rate" placeholder='1 - 10'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div id='row'>
                    <label htmlFor="input_order">Minimun Score</label>
                    <select name="input_order" id="input_order" placeholder='Release Date'>
                        <option value="date">Release Date</option>
                        <option value="score">Score</option>
                        <option value="name">Name</option>
                    </select>
                    <button class='bg-accent'>
                        Clear
                    </button>
                </div>
                
            </section>
        </nav>
    )
}

export default Searcher