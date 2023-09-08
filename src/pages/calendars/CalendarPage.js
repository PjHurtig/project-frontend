import React, { useEffect, useRef, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useIsSmallScreen from '../../hooks/useIsSmallScreen';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const history = useHistory();
  const isSmallScreen = useIsSmallScreen();
  const calendarRef = useRef()

  const onEventClick = (eventClickInfo) => {
    const eventId = eventClickInfo.event.id;

    history.push(`/events/${eventId}`);
  };
// get the colors of the dot on the calendar by switch case
// info from stackoverflow
  const getCategoryColor = (category) => {
    switch (category) {
      case 'bike':
        return '#E9C46A';
      case 'climbing':
        return '#264653'; 
      case 'hiking':
        return '#E76F51'; 
      default:
        return '#606c38'; 
    }
  };
// check to see if scren is small and if so, show week view instead of month
  useEffect(() => {
    if (isSmallScreen){
      calendarRef.current.getApi().changeView('dayGridWeek')
    }
    else {
      calendarRef.current.getApi().changeView('dayGridMonth')
    }
  },[isSmallScreen])
  
  useEffect(() => {
    axios.get('/events/')
      .then(response => {

  
        const eventsData = response.data.results.map(event => ({
          id: event.id,
          title: event.title,
          start: new Date(event.start_time), 
          backgroundColor: getCategoryColor(event.category),
        }));
  
        setEvents(eventsData);
      })
      .catch(error => {
        // console.error('Error fetching events:', error); 
      });
  },[]);


  return (
    <>
        <FullCalendar

        plugins={[dayGridPlugin]}
        initialView='dayGridWeek'
        events={events}
        ref={calendarRef}
        eventClick={onEventClick}
        eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            hour12: false, 
        }}
        />
    </>
        

  );
};

export default EventCalendar;