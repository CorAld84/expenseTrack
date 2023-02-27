import { FlatList,  } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {

    
    function renderExpenseItem(itemData) {
        
        return <ExpenseItem
        {...itemData.item}
       /* description={itemData.item.description}
        date={itemData.item.date}
        amount={itemData.item.amount}
        id={itemData.item.id} */
        />
        
    }
    return (
        <>
            <FlatList
                data={expenses}
                renderItem={renderExpenseItem}
                keyExtractor={(item) => item.id}
            />
        </>
    );
};

export default ExpensesList;