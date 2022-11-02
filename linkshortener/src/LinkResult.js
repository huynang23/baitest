import { useEffect, useState } from 'react'
import axios from "axios"
const LinkResult = ({inputValue}) => {
    const [shortenLink, setShortenLink] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
 
    const fetchData = async () =>{
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue} `);
            setShortenLink(res.data.result.full_short_link)
        } catch (err) {
            setError(err);
        }finally{
           setLoading(false)
        }
    }

    useEffect(()=>{
        if(inputValue.length){
            fetchData();
        }
    },[inputValue]);

    if(loading){
        return<p className='noData'>Loading...</p>
    }if(error){
        return <p className='no'>Thử Link khác...</p>
    }

   
  return (
    <>
    {shortenLink &&(
    <div className='result'>
        <p>{shortenLink}</p>
    </div>

    )}
    </>
  )
}

export default LinkResult