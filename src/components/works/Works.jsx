import { Title } from 'components'
import React from 'react'
import './works.css'

const Works = () => {

    const works = [
        {
            id: 1,
            title: 'Pizza Palace',
            github: 'https://github.com/GEORGE-GICHURU?tab=repositories',
            img: 'https://images.pexels.com/photos/2955192/pexels-photo-2955192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            live: 'https://george-gichuru.github.io/cityzen/'
        },

        {
            id: 2,
            title: 'Awwward',
            github: 'https://github.com/GEORGE-GICHURU?tab=repositories',
            img: 'https://images.pexels.com/photos/2098578/pexels-photo-2098578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            live: 'https://awwwardsapp.herokuapp.com/'
        },

        {
            id: 3,
            title: 'Neighbourhood',
            github: 'https://github.com/GEORGE-GICHURU?tab=repositories',
            img: 'https://images.pexels.com/photos/2255938/pexels-photo-2255938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            live: 'https://django-7220app.herokuapp.com/'
        },

        {
            id: 4,
            title: 'Fichua Store',
            github: 'https://github.com/GEORGE-GICHURU?tab=repositories',
            img: 'https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            live: 'http://fichua.vercel.app/'
        },

        
        {
            id: 5,
            title: 'News Api',
            github: 'https://github.com/GEORGE-GICHURU?tab=repositories',
            img: 'https://images.pexels.com/photos/1577882/pexels-photo-1577882.jpeg?cs=srgb&dl=pexels-madison-inouye-1577882.jpg&fm=jpg',
            live: 'https://python-flashnews.herokuapp.com/'
        },

        
        {
            id: 6,
            title: 'Instagram Clone',
            github: 'https://github.com/GEORGE-GICHURU?tab=repositories',
            img: 'https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?cs=srgb&dl=pexels-cottonbro-5052877.jpg&fm=jpg',
            live: 'https://gichurugram2.herokuapp.com/'
        }

        
    ]

    return (

        <section id='portfolio'>
            <Title title='Portfolio' text="My Recent Work" />
            <div className='works-container'>
                {
                    works.map(work => {
                        return (
                            <div className='work-item' key={work.id}>
                                <div className='work-img'>
                                    <img src={work.img} alt={work.title} />
                                </div>
                                <div className='work-info'>
                                    <h3>{work.title}</h3>
                                    <p>
                                        <a
                                            href={work.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm '
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={work.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm btn-primary'
                                        >
                                            Live
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Works