import React, { useReducer, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { context } from './context';
import axios from 'axios';
import { getPosts, getComments, getToDos, getError } from './Action/Action';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import Todos from './components/Todos/Todos';

const App = () => {
  const initialArg = {data: [], loading: true};

  const [link, setLink] = useState(window.localStorage.getItem("link") || "posts")
  const [state, dispatch] = useReducer(reduser, initialArg);

  

  useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/${link}`)
        .then((data) => {
          switch (link){
            case "posts":
              return dispatch(getPosts(data.data));
            case "comments":
              return dispatch(getComments(data.data));
            case "todos":
              return dispatch(getToDos(data.data));
          }
          })
        .catch((error) => dispatch(getError()));
  }, [link])

  function reduser(state, action) {
    switch (action.type){
      case "posts":
        return {
          ...state,
          loading: false,
          data: action.payLoad
        };
        case "comments":
        return {
          ...state,
          loading: false,
          data: action.payLoad
        };
        case "todos":
        return {
          ...state,
          loading: false,
          data: action.payLoad
        };
    }
  }

  const values = {
    link,
    state,
    setLink
  }

  return (
    <>
      <context.Provider value={{values}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/comments' element={<Comments/>}/>
            <Route path='/todos' element={<Todos/>}/>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </>
  );
};

export default App;