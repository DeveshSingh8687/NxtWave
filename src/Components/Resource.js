import React, { useEffect, useState } from 'react'
import './Style/Resouce.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Resource() {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://media-content.ccbp.in/website/react-assignment/resources.json')
            .then(res => res.json())
            .then(data => setData(data))
        localStorage.setItem('headButton',true)
    }, [])
    console.log(data);
    return (
        <div className='resouce-main'>
            <div className='nav-top'>
                <div className='nav-buttons'>
                    <p style={{ background: '#0B69FF', color: 'white' }}>Resources</p><hr />
                    <p>Requests</p><hr />
                    <p>Users</p>
                </div>
            </div>
            <div className='search-area'>
                <input placeholder='Search' />
            </div>
            <div className='cards'>
                {
                    data && data.map((value) => {
                        return (
                            <Card variant="outlined" className='mui-card'>
                                <CardContent>
                                    <div className='card-title'>
                                        <img src={value.icon_url} alt='image' width={'44px'} height={'44px'} />
                                        <div style={{ marginLeft: '10px' }}>
                                            <p>{value.title}</p>
                                            <span>{value.category}</span>
                                        </div>
                                    </div>
                                    <div className='card-link'>
                                        <span>
                                            <a href={value.link} target='blank'>{value.link}</a>
                                        </span>
                                    </div>
                                    <div className='card-description'>
                                        <span>
                                            {value.description}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Resource