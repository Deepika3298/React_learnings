import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingButton() {
    const [post, setPost]= useState({})
    const [id, setId] = useState(1)
    const [idOnButtonClick, setIdOnButtonClick]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idOnButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[idOnButtonClick])

    const handleClick=()=>{
        setIdOnButtonClick(id)

    }
    
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Data</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchingButton
