import './Contacts.css'
import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
const Features = () =>{
    return (
        <>
        <div>
        <YMaps>
          <Map
            width={"100%"}
            height={"610px"}
            defaultState={{
                center: [43.318366, 45.692421],
                zoom: 13,
              }}
          >
            <Placemark geometry={[43.318366, 45.692421]} />
          </Map>
        </YMaps>
        </div>
      
        
        </>
    )
}
export  {Features}