import React, { useContext } from 'react';
import StoreContext from '../store/store';

const Widget = ({ categoryId, widget }) => {
  const { dispatch } = useContext(StoreContext);

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId: widget.id } });
  };

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.content}</p>
      <button onClick={handleRemove} className="remove-btn">×</button>
    </div>
  );
};

export default Widget;
