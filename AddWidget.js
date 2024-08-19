import React, { useState, useContext } from 'react';
import StoreContext from '../store/store';

const AddWidget = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const { dispatch } = useContext(StoreContext);

  const handleAdd = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      content: widgetContent
    };
    dispatch({ type: 'ADD_WIDGET', payload: { categoryId, widget: newWidget } });
    setWidgetName('');
    setWidgetContent('');
  };

  return (
    <div className="add-widget">
      <input
        type="text"
        value={widgetName}
        onChange={e => setWidgetName(e.target.value)}
        placeholder="Widget Name"
      />
      <input
        type="text"
        value={widgetContent}
        onChange={e => setWidgetContent(e.target.value)}
        placeholder="Widget Content"
      />
      <button onClick={handleAdd} className="add-btn">+ Add Widget</button>
    </div>
  );
};

export default AddWidget;
