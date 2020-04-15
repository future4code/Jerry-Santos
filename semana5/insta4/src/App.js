import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post
          nomeUsuario={'zedavelha'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=4'}
        />

        <Post
          nomeUsuario={'musical7'}
          fotoUsuario={'https://picsum.photos/50/50?a=5'}
          fotoPost={'https://picsum.photos/200/150?a=6'}
        />
      </div>
    );
  }
}

export default App;
