import React, {  useContext } from 'react';
import { CostActivitiesContext } from '../context/CostContext';
import CurrentCard from './CurrentCard';
function CurrentCost() {
  const useGetAllCost = useContext(CostActivitiesContext);
  return (
    <CurrentCard
      type="current_cost"
      title="Valor gasto até o momento"
      value={useGetAllCost}
    />
  );
}

export default CurrentCost;
