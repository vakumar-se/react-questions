import React, { useState } from 'react';
import './styles.css';
import { accodianData } from '../../constants/accordian';

const CustomAccordion = () => {
  console.log('data', accodianData);

  const ListItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleItemClick = e => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    };

    return (
      <li key={item?.id} onClick={handleItemClick}>
        {`${item?.name} - ${item?.id}`}
        {isOpen &&
          item?.children?.map(itm => {
            return (
              <ul style={{ marginLeft: 20 }}>
                <ListItem item={itm} />
              </ul>
            );
          })}
      </li>
    );
  };

  return (
    <div className="container">
      <ul>
        {accodianData?.map(item => {
          return <ListItem item={item} />;
        })}
      </ul>
    </div>
  );
};

export default CustomAccordion;
