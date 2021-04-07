import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Item from './Item'
const Main =()=>{
    const filters= useSelector(state=>state.filters)
    const backUp= useSelector(state=>state.games)
    const [filtered, setFiltered]= useState([])
    useEffect(()=>{
        if(!backUp.load){
            const firstFilter = backUp.data.filter((item)=>{

                const itemData = item.name.toUpperCase()
                const textData = filters.name.toUpperCase()

                return itemData.indexOf(textData) > -1
            })//Working

            const secondFilter = firstFilter.filter((item)=>(item.rate>=filters.rate))//Working

            if(filters.orderDir==='up'){
                
                if(filters.orderBy==='name'){
                    secondFilter.sort((a, b)=>{
                        if(a.name < b.name){
                            return -1
                        } else{
                            return 1
                        }
                    })
                } else if (filters.orderBy==='rate'){
                    secondFilter.sort((a, b)=> 
                        a.rate - b.rate
                    )
                } else if(filters.orderBy==='date'){
                    secondFilter.sort((a, b)=> 
                        a.date_timestamp - b.date_timestamp
                    )
                }
            } else{
                
                if(filters.orderBy==='name'){
                    secondFilter.sort((a, b)=>{
                        if(a.name > b.name){
                            return -1
                        } else{
                            return 1
                        }
                    })
                } else if (filters.orderBy==='rate'){
                    secondFilter.sort((a, b)=> 
                        b.rate - a.rate
                    )
                } else if(filters.orderBy==='date'){
                    secondFilter.sort((a, b)=> 
                        b.date_timestamp - a.date_timestamp
                    )
                }
            }//Working

            setFiltered(secondFilter)
        }
        
    },[filters, backUp])
    return(
        <main>
            {
                filtered.length<=0 ?
                    backUp.data.map((item)=>{
                        return(
                            <Item 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                date={item.date}
                                summary={item.summary}
                                rate={item.rate}
                            />
                        )
                    })
                :
                    filtered.map((item)=>{
                        return(
                            <Item 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                date={item.date}
                                summary={item.summary}
                                rate={item.rate}
                            />
                        )
                    })
            }
        </main>
    )
}

export default Main