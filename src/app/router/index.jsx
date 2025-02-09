import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Layout } from '../../widgets/Layout'
import { NotFound } from '../../pages/NotFound'
import { Home }  from '../../pages/Home'
import { Catalog } from '../../pages/Catalog'
import  Favorites  from '../../pages/Favorites'
import { AuthRouter } from '../../features/Auth'
import ThingsToDo from '../../pages/ThingsToDo'
import News from '../../pages/Neews'
import FoodGuide from '../../pages/FoodGuide'
import AirportTransfer from '../../pages/AirportTransfer'
import ContactUs from '../../pages/ContactUs'
import Tour from '../../pages/Tour'
import WaterAdventure from '../../pages/WaterAdventure'
import More from '../../pages/More'
import NationalD from '../../pages/NationalD'
import National from '../../pages/National'

export  function MyRoutes() {
    const myRouter = useRoutes([

        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                }, 
                {
                    path: 'thingstodo',
                    element: <ThingsToDo />
                },   
                {
                    path: 'news',
                    element: < News/>
                },  
                 
                  {
                    path: 'foodguide',
                    element: <FoodGuide />
                },  
                  {
                    path: 'Airporttransfer',
                    element: <AirportTransfer />
                },  
                  {
                    path: 'contactus',
                    element: < ContactUs/>
                },  
                {
                    path: 'catalog',
                    element: <Catalog />
                },
                {
                    path: 'favorites',
                    element: <Favorites />
                },    
                { 
                  path: 'tour', 
                  element: <Tour/>
                }, 
                { 
                  path: 'snorkel', 
                  element: <WaterAdventure/>
                },
                { 
                  path: 'more', 
                  element: <More/>
                },
               
                { 
                  path: 'cuisine/:cuisine', 
                  element: <National/>
                },
                { 
                  path: 'nationald/:id', 
                  element: <NationalD/>
                }
            ]
        },
        AuthRouter,

        { path: '*', element: <NotFound /> }
    ])
    return myRouter
}

