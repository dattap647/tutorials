function EventHandlingExample() {

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h2>Handling Events Example</h2>
      <button onClick={handleClick}>Click Me Here</button>
    </div>
  );
}

export default EventHandlingExample;
