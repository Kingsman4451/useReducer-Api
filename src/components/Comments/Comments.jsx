import React, { useContext } from 'react';
import { context } from '../../context';
import { MDBSpinner } from 'mdb-react-ui-kit';

const Comments = () => {
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
        <ul className="comments list-unstyled d-flex justify-content-around flex-wrap gap-3 p-0 m-0">
          {data.map((item) => {
            return <li className="comment-item card" key={item.id}>
                <div className="card-body">
                  <h5 className="card-title text-primary">{item.id}. {item.name}</h5>
                  <p className="card-text">{item.body}</p>
                  <p className="card-text">{item.email}</p>
                </div>
            </li>
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;