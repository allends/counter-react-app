import './App.css';
import './Styles.css'
import { React, useState } from 'react'
import { Button, ButtonGroup, Card, Checkbox } from '@material-ui/core';

function App() {

  const [count, setCount] = useState(1);
  const [toggled, setToggled] = useState(false);
  const [saveCount, setSaveCount] = useState(0);

  const divStyle = {
    margin: 15,
    display: "inline-block",
    fontSize: "150%",
  }

  function setCountHandler(number) {
    if(toggled){
      return
    }
    setCount(number)
  }

  function checkHandler(event){
    if(event.target.checked){
      setSaveCount(count);
      setCount(69)
    }else{
      setCount(saveCount)
    }
    setToggled(event.target.checked)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Have you forgotten how to count again?
        </h1>
      </header>
      <Card elevation={5} style={{margin: 15, padding: 10}}>
        <div style={{padding:15}}>
        <div>
          <h2>
            Here are the numbers...
          </h2>
          <div style={divStyle}>
            {count - 1}
          </div>
          <div style={divStyle}>
            <div style={{fontSize:"175%"}}>
              {count}
            </div>
          </div>
          <div style={divStyle}>
            {count + 1}
          </div>
        </div>
        <ButtonGroup 
        size = "small" 
        variant="contained"
        style={{font: 24}}
        >
          <Button color="primary"
          onClick={setCountHandler.bind(this, count + 1)}>
              Count up one please.
          </Button>
          <Button color="secondary"
          size="large"
          onClick={setCountHandler.bind(this, 1)}>
              Wait! Start over.
          </Button>
        </ButtonGroup>
        <Checkbox
        checked={toggled}
        label="Auto"
        name="Auto count"
        onChange={checkHandler}>
            A Checkbox {toggled}
        </Checkbox>
        </div>
      </Card> 
    </div>
  );
}

export default App;
