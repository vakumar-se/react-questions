import React from 'react';

const Menu = ({ title = 'Cars', menuList = ['BMW', 'Ford', 'Hyundai'] }) => {
  return (
    <section>
      <label> {title}</label>
      {menuList.map((item, index) => {
        return <div key={item}>{item}</div>;
      })}
    </section>
  );
};

export default Menu;
