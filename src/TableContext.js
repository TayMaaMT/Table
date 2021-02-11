import React from "react";
import { v4 as uuidv4 } from "uuid";
import { data } from "./components/DataTable";

const TableContext = React.createContext();
const ADD_ITEM = "ADD_ITEM";
const INITIAL_ITEM = "INITIAL_ITEM";
// const DELETE_CARD = "DELETE_CARD";

const TableReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const Items = [action.payload, ...state.Items];
      return {
        ...state,
        Items
      };
    }
    case INITIAL_ITEM:{
      const Items = action.payload;
      console.log(Items);
      return {
        Items
      };
    }
    // case SEARCH_ITEM: {

    //   const Items = !action.payload? [...state.Items]: state.Items.filter(item =>
    //       item.name.toLowerCase().includes(action.payload.toLocaleLowerCase())
    //     );
    //     console.log(Items);
    //   return {
        
    //     Items
    //   };
    // }
    // case DELETE_CARD: {
    //   const cards = state.cards.filter((card) => card.id !== action.payload);
    //   console.log(cards);
    //   return {
    //     ...state,
    //     cards
    //   };
    // }
    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const initialState = {
  Items:[]
};

export const TableProvider = (props) => {
  const [state, dispatch] = React.useReducer(TableReducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <TableContext.Provider value={value} {...props} />;
};

export const useTableContext = () => {
  const context = React.useContext(TableContext);

  if (!context) {
    throw new Error("useCardsContext must be used inside a TableProvider");
  }

  const { state, dispatch } = context;
  const {Items} = state;

  const addItem = (item) => {
   
    dispatch({ type: ADD_ITEM, payload: item });
  };
  const initialState = (initial)=> {
    dispatch({ type: INITIAL_ITEM, payload: initial });
  };
  // const SearchItems = (SearchTerm) => {
  //   dispatch({ type: SEARCH_ITEM, payload: SearchTerm });
  // };
//   const deletecard = (id) => {
//     dispatch({ type: DELETE_CARD, payload: id });
//   };
  return { Items, addItem,initialState };
};
