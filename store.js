import React, { createContext, useReducer } from 'react';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Security Score", content: "This is a security score widget" },
        { id: 2, name: "Compliance Status", content: "This is a compliance status widget" }
      ]
    },
    {
      id: 2,
      name: "Operational Dashboard",
      widgets: [
        { id: 3, name: "Resource Utilization", content: "This is a resource utilization widget" }
      ]
    }
  ]
};

const StoreContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        )
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
