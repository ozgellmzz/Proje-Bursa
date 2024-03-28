import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuggestionsComponent = () => {

  const [data,setData] = useState([]);
  const [selectedDays, setSelectedDays] = useState(1);

  const handleDaysChange = (e) => {
    setSelectedDays(parseInt(e.target.value));
  };
  
  const getDestinationSuggestion = () => {
    if (selectedDays === 1) {
      return 'Uludağ\'da kayak yapabilirsin :)';
    } else if (selectedDays === 2) {
      return 'Kozahan\'da közde kahve içebilirsin :)';
    } else if (selectedDays === 3) {
      return 'Cumalıkızık\'da kahvaltı yapabilirsin :)';
    } else {
      return 'Gölyazı\'daki Ağlayan Çınar\'ı mutlaka görmelisin :)';
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://proje-bursa.vercel.app/data/bursa.json');
        setData(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

   return (
    
<div className="container" style={{ maxWidth: '50%', padding: '50px'}}>
 <div className="container mx-auto mt-8">
           {data.map((item, index)=>(
             <div key={index}>
               <p>{item.id}</p>
               <p>{item.sehir}</p>
               <p>{item.adi}</p>
               <p>{item.tipi}</p>
               <p>{item.aciklama}</p>
             </div>
           ))}
     </div>
</div>
   )
 };

export default SuggestionsComponent;