import React, { useContext } from 'react';
import { context } from '../../context';
import { MDBSpinner } from 'mdb-react-ui-kit';

const Todos = () => {
  const {values} = useContext(context);
  const {data, loading} = values.state;


  if(loading){
    return <div className='text-center mt-5'>
    <MDBSpinner role='status'>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
  </div>
  }
  return (
    <>
      <div className="container mt-5">
        <ul className="todos list-unstyled d-flex justify-content-around flex-wrap gap-3 p-0 m-0">
          {data.map((item) => {
            return <li className="todo-item card" key={item.id}>
                <div className="card-body">
                  <h5 className="card-title text-primary">{item.id}. {item.title}</h5>
                  <p className="card-text">{`${item.completed ? "Completed" : "Uncompleted"}`}</p>
                </div>
            </li>
          })}
        </ul>
      </div>
    </>
  );
};

export default Todos;