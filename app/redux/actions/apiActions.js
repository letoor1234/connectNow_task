const Fetch_Success = (data)=>{
    return { type: 'FETCH_SUCCESS', payload:data }
}

const Fetch_Failure = ()=>{
    return {type: "FETCH_FAILURE"}
}


export const fetchApi = () => {
    return((dispatch)=>{
        const endpoint = "https://public.connectnow.org.uk/applicant-test/";
        fetch(endpoint)
         .then((res)=>{
            return res.json()
         })
         .then((json)=>{
            const maped = json.map((item)=>{
                var date= new Date(item.first_release_date);
                var month= date.getUTCMonth()+1;
                var day= date.getUTCDate();
                var year= date.getUTCFullYear();

                var finalDate = day+'/'+month+'/'+year;

                var rateStr= item.rating.toString().slice(0, 1);
                var rate= parseInt(rateStr)
                return{
                    id: item.id,
                    name: item.name,
                    date: finalDate,
                    rate: rate,
                    summary: item.summary,
                    date_timestamp: item.first_release_date
                }
            })
            dispatch(Fetch_Success(maped))
         })
         .catch((e)=>{
            dispatch(Fetch_Failure())
         })
    })
}