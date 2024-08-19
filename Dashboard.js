import React, { useContext } from 'react';
import StoreContext from '../store/store';
import Widget from './Widget';
import AddWidget from './AddWidget';

const Dashboard = () => {
  const { state } = useContext(StoreContext);

  return (
    <div className="dashboard">
      {state.categories.map(category => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.map(widget => (
              <Widget key={widget.id} categoryId={category.id} widget={widget} />
            ))}
          </div>
          
          <AddWidget categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
