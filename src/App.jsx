import { useState } from 'react';
import BorderRadios from './components/BorderRadios';
import InputCustom from './components/InputCustom';
import './App.css';

function App() {
  const [topLeft, setTopLeft] = useState(50);
  const [topRight, setTopRight] = useState(0);
  const [bottonLeft, setBottonLeft] = useState(0);
  const [bottonRight, setBottonRight] = useState(0);

  return (
    <div className="App">
      <h1>[Previewer]</h1>
      <h2>border-radius:</h2>
      <div className="contentValuesBorderRadius">{`border-radius: ${topLeft}${
        topLeft > 0 ? 'px' : ''
      } ${topRight}${topRight > 0 ? 'px' : ''} ${bottonLeft}${
        bottonLeft > 0 ? 'px' : ''
      } ${bottonRight}${bottonRight > 0 ? 'px' : ''};
        `}</div>
      <div className="content">
        <div className="contentInput">
          <InputCustom
            onChange={(e) => setTopLeft(e.target.value)}
            value={topLeft}
            label="Top Left"
            name="topLeft"
            id="topLeft"
          />
          <InputCustom
            onChange={(e) => setTopRight(e.target.value)}
            value={topRight}
            label="Top Right"
            name="topRight"
            id="topRight"
          />
        </div>
        <BorderRadios
          topLeft={topLeft}
          topRight={topRight}
          bottonLeft={bottonLeft}
          bottonRight={bottonRight}
        />
        <div className="contentInput">
          <InputCustom
            onChange={(e) => setBottonLeft(e.target.value)}
            value={bottonLeft}
            label="Bottom Left"
            name="BottonLeft"
            id="BottonLeft"
          />
          <InputCustom
            onChange={(e) => setBottonRight(e.target.value)}
            value={bottonRight}
            label="Bottom Right"
            name="BottonRight"
            id="BottonRight"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
