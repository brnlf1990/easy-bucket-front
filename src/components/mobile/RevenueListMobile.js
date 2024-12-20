import React, { useContext } from 'react';
import './RevenueListMobile.css';
import { ListRevenueContext } from '../context/ListRevenueContext';

function RevenueListMobile() {
  const { revenueList } = useContext(ListRevenueContext);

  return (
    <section className='revenue-list-mobile'>
      <h3 className="revenue__title">Lista de Entrada</h3>

    <div className="revenue-list-mobile__container">
      {Array.isArray(revenueList) && revenueList.length > 0 ? (
        revenueList.map((item, index) => (
          <div key={index} className="revenue-list-mobile__item">
            <p className="revenue-list-mobile__data">{item.date.split('T')[0]} {item.category}</p>
            <p className="revenue-list-mobile__details">
              {item.description} - {item.value}
            </p>
          </div>
        ))
      ) : (
        <p className='revenue-list-mobile__item'>Sem valores</p>
      )}
    </div>
    </section>
  );
}

export default RevenueListMobile;