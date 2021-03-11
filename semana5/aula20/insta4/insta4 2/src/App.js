import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'aninha'}
          fotoUsuario={'https://picsum.photos/50/50?random1'}
          fotoPost={'https://picsum.photos/200/150?random2'}
        />
        <Post
          nomeUsuario={'amandinha'}
          fotoUsuario={'https://picsum.photos/50/50?random3'}
          fotoPost={'https://picsum.photos/200/150?random4'}
        />
      </div>
    );
  }
}

export default App;
