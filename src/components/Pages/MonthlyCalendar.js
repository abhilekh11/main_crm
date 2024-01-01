import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Modal from './Modal';

const MyCalendar = () => {
     
      const [data,setdata]=useState([]);
       const getCalanderData=async()=>{
        try {
            const responce = await axios.get(
              "https://crm-backend-1qcz.onrender.com/api/v1/get_calander_data"
            );
            setdata(responce?.data?.lead);
            } catch (error) {
            console.log(error);
          }

       };

   useEffect(()=>{
      getCalanderData();
   },[])
   const [showModal, setShowModal] = useState(false);
   const [selectedEvent, setSelectedEvent] = useState(null);
  const localizer = momentLocalizer(moment);
  const aaaaa=[];
  data.map((leads)=>{
        console.log(leads)
        aaaaa.push({'title':leads.massage_of_calander,'start':leads.followup_date,'end':leads.followup_date})
  })
  

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
   
    // alert(`${event.title}`);
  };
  const closeModal = () => {
    // Close modal
    setShowModal(false);
  };


  // const CustomToolbar = ({ label, onNavigate, onView }) => (
  //   <div>
  //     {/* Your custom toolbar content goes here */}
  //     <span>{label}</span>
  //     <button onClick={() => onNavigate('PREV')}>
  //       &lt; {/* Left arrow */}
  //     </button>
  //     <button onClick={() => onNavigate('NEXT')}>
  //       &gt; {/* Right arrow */}
  //     </button>
  //   </div>
  // );

  return (
    <div>
    <Calendar
      localizer={localizer}
      events={aaaaa}
      startAccessor="start"
      endAccessor="end"
      views={['month', 'agenda']}
      style={{ height: 400 }}
      onSelectEvent={handleEventSelect} 
      // components={{
      //   toolbar: CustomToolbar,
      // }}
      
    />
    {showModal && (
        <Modal
          event={selectedEvent}
          onClose={closeModal}
        />
      )}
  </div>
  );
};

export default MyCalendar;
