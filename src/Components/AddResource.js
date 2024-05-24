import React, { useEffect, useState } from 'react'
import RightImg from './assets/Addres.png'
import './Style/Addres.css'
import Logo from './assets/logoupload.png'
import Icon from './assets/Iconicon.png'

function AddResource() {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { title: name, link: link, description: desc, icon_url: 'url' }
        console.log(data)
        fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        setName('')
        setLink('')
        setDesc('')
    }
    useEffect(()=>{
        localStorage.removeItem('headButton')
    },[])
    return (
        <div className='Addres-main'>
            <div className='Addres-left'>
                <div className='user'>
                    &lt; <span><a href='/' style={{textDecoration:'none'}}> Users</a></span>
                </div>
                <div className='Addres-post'>
                    <h1>Add a Resource</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>Name</label><br />
                        <input placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                        <label>Link</label><br />
                        <input placeholder='Enter Link' value={link} onChange={(e) => setLink(e.target.value)} /><br />
                        <label>Description</label><br />
                        <textarea placeholder='Ex. Building a new connectivity platform for the team' value={desc} onChange={(e) => setDesc(e.target.value)} />

                        <div className='upload'>
                            <img src={Logo} width={"20px"} height={"20px"} style={{ padding: '5px', border: '1px solid gray', marginRight: '10px' }} />
                            <img src={Icon} />
                            <span>Change Photo</span>
                            {/* <input type='text' /> */}
                        </div>
                        <button type='submit'>CREATE</button>
                    </form>
                </div>
            </div>
            <div className='Addres-right'>
                <img src={RightImg} />
            </div>
        </div>
    )
}

export default AddResource