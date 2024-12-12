import React, { useState } from 'react';

function App() {
  // Step 1: Declare state variable for the counter
  const [count, setCount] = useState(0);

  // Step 2: Increment function
  const increment = () => setCount(count + 1);

  // Step 3: Decrement function
  const decrement = () => setCount(count - 1);

  // Step 4: Reset function
  const reset = () => setCount(0);

  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.header}>Counter App</h1>
      <div style={styles.counterDisplay}>
        <p style={styles.count}>{count}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
        <button style={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  counterDisplay: {
    margin: '20px',
  },
  count: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#008CBA',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default App;
