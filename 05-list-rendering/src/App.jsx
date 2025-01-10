import React, { useState } from 'react';
import EventCard from './EventCard';

export default function App() {


  const [shops, setShops] = useState([
    "MacDonalds",
    "Coffee Beans",
    "Starbucks",
    "Giants Supermarket",
    "Ulqo"
  ]); // <-- make a value a state WHEN
  // 1. the user will change it somehow via events
  // 2. an external process will change it
  // 3. AND when the value changes, the component should re-render

  const [events, setEvents] = useState([
    {
      "datetime": "28th Jan 10pm",
      "name": "Countdown to CNY 2025",
      "description": "Come down and usher in the new year for CNY 2025"
    },
    {
      "datetime": "29th Jan 11am",
      "name": "Lion Dance",
      "description": "Two human beings pretending to be lions dancing and perform dangerous trick on sticks"
    },
    {
      "datetime": "29th Jan 7pm",
      "name": "MediaCorpse Meet and Greet",
      "description": "All the actors and actress that you have stopped watching will come and sign. Got lucky draw"
    }
  ])

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