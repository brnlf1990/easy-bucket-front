import React, { useContext } from 'react';
import './CostList.css';
import { ListCostContext } from '../context/ListCostContext';
function CostList() {
  const { costList } = useContext(ListCostContext);

  const titles = ['Data', 'Descrição', 'Categoria', 'Valor'];
  const getColumnData = (item, title) => {
    switch (title) {
      case 'Data':
        return item.date.split('T')[0];
      case 'Descrição':
        return item.description;
      case 'Categoria':
        return item.category;
      case 'Valor':
        return item.value;
      default:
        return '';
    }
  };

  return (
    <section className="cost-list">
      <h3 className="cost__title">Lista de custos</h3>

      <div className="cost-list__container">
        {titles.map((title, index) => (
          <div className={`cost-list__column column-${index}`} key={index}>
            <h3 className="cost-list__title">{title}</h3>
            <ul className="cost-list__items">
              {Array.isArray(costList) && costList.length > 0 ? (
                costList.map((item, index) => (
                  <li key={index} className={`cost-list__item item-${title}`}>
                    {getColumnData(item, title)}
                  </li>
                ))
              ) : (
                <p>Sem valores</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CostList;
