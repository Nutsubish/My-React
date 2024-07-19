
const CounterButton = () => {
    let amountofclick = 0;
  
    const handleClick = () => {
      amountofclick++;
      document.getElementById('count').innerText = amountofclick;
    };
  
    return (
    <div className="Main-Btn">
        <div className="Btn-Div">
            <p id="count">{amountofclick}</p>
            <button onClick={handleClick}>Click on me!</button>
        </div>
    </div>
    );
  };
  
  export default CounterButton;
  