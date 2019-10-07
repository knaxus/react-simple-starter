import React from 'react';
import RandomQuote from '../RandomQuote/container';
import TodoApp from './TodoApp/container';

export default function App() {
  return (
    <div>
      <h1>Hello React with Hot Reload !</h1>
      <br />
      <RandomQuote />
      <br/>
      <h1>Todos App - React hooks🔥</h1>
      <div style={{marginLeft: '20%'}}>
      <TodoApp />
      </div>
    </div>
  );
}
