import React, { useContext } from 'react';
import './CostListMobile.css';
import { ListCostContext } from '../context/ListCostContext';

function CostListMobile() {
  const { costList } = useContext(ListCostContext);

  return (
    <section className='cost-list-mobile'>
      <h3 className="cost__title">Lista de custos</h3>

    <div className="cost-list-mobile__container">
      {Array.isArray(costList) && costList.length > 0 ? (
        costList.map((item, index) => (
          <div key={index} className="cost-list-mobile__item">
            <p className="cost-list-mobile__data">{item.date.split('T')[0]} {item.category}</p>
            <p className="cost-list-mobile__details">
              {item.description} - {item.value}
            </p>
          </div>
        ))
      ) : (
        <p className='cost-list-mobile__item'>Sem valores</p>
      )}
    </div>
    </section>
  );
}

export default CostListMobile;