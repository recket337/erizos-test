// TODO: REFACTORING
// TODO: OPTIMIZATIONS
// TODO: DEL UNUSED

import React from 'react';
import './App.css';
import { myParseInt } from './myParseInt';
import { printSpiralMatrix } from './printSpiralMatrix';
import MyBrowser from './components/MyBrowser/MyBrowser';

function App() {
  // console.log(myParseInt('-123'));
  // console.log(myParseInt('-123') + 2);
  // console.log(myParseInt('   -1a2f3', true) + 2);

  // console.log(printSpiralMatrix([[1,2,3],[4,5,6],[7,8,9]]));
  // console.log(printSpiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));

  const expandedFolders = ['/Folder 1', '/Folder 1/Folder 1.1/Folder 2'];

  return (
    <div className="App">
      <header className="App-header">
        <MyBrowser expandedFolders={expandedFolders} />
      </header>
    </div>
  );
}

export default App;
