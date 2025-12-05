import React, { useState, useEffect } from 'react';

const data = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pakistan', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangla', value: 'BD', cities: ['Dhaka', 'chittagong'] },
];

const CusDropdown = () => {
  const [con, setCon] = useState({ name: 'Select', value: 'sel' });
  //   const [cit, setCit] = useState([]);

  const handleCountryChange = e => {
    const val = e.target.value;
    if (val === 'sel') {
      setCon({ name: 'Select', value: 'sel' });
    } else {
      const selected = data.find(d => d.value === val);
      setCon(selected || { name: 'Select', value: 'sel' });
    }
  };

  //   useEffect(() => {
  //     const list = data?.find(itm => itm?.name === con);
  //     setCit(list?.cities || []);
  //   }, [con]);
  return (
    <div>
      <select value={con.value} onChange={handleCountryChange}>
        <option value={'sel'}>Select</option>
        {data?.map(item => (
          <option value={item.value} key={item?.value}>
            {item?.name}
          </option>
          //   <option value={item.name} key={item?.value}>
          //     {item?.name}
          //   </option>
        ))}
      </select>
      {con.value !== 'sel' && con?.cities?.length > 0 && (
        <select>
          {con?.cities?.map((city, idx) => (
            <option key={idx} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CusDropdown;
