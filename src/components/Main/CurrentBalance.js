import React, {  useContext } from "react";
import { CurrentValueContext } from "../context/CurrentValue";
import { CostActivitiesContext } from "../context/CostContext";
import CurrentCard from "./CurrentCard";
function CurrentBalance() {
    const useGetAllCost = useContext(CostActivitiesContext);
    const useGetAllRevenue = useContext(CurrentValueContext);
    
    return ( 
    <CurrentCard
    type="current_balance"
    title="Valor atual"
    value={useGetAllRevenue - useGetAllCost}
    />        
     );
}

export default CurrentBalance;