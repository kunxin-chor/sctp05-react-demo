import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import axios from 'axios';

export default function App() {


  useEffect(()=>{
   
    const fetchData = async () => {
      const response = await axios.get('shops.json');
      setShops(response.data);
      const eventResponse = await axios.get('events.json');
      setEvents(eventResponse.data);
    }

    fetchData();


  }, []); // empty array means no dependencies, run once when mounted

  const [shops, setShops] = useState([]); // <-- make a value a state WHEN
  // 1. the user will change it somehow via events
  // 2. an external process will change it
  // 3. AND when the value changes, the component should re-render

  const [events, setEvents] = useState([])

  const renderShopList = () => {
    const shopJSX = [];
    for (let s of shops) {
      shopJSX.push(<li>{s}</li>)
    }
    return shopJSX;
  }

  return (
    <>
      <div className="container">
        <h1>Shopping Mall Directory</h1>
  
        <ul>
          {
            /* renderShopList() */
          }
          {
            shops.map(s => <li>{s}</li>)
          }
        </ul>

        {
          events.map(event => <EventCard
            name={event.name}
            datetime={event.datetime}
            description={event.description}
          />)
        }




      </div>
    </>
  )
}