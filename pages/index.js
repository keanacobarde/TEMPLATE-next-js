// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'Kiki' }; // TODO: COMMENT OUT FOR AUTH
  const [counterValue, counter] = useState(0);

  const handleClick = () => {
    counter(counterValue + 1);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <h1> {counterValue} </h1>
      <button type="button" onClick={handleClick}> Increment </button>
      <button type="button" onClick={() => counter(counterValue - 1)}> Decrement </button>
      <button type="button" onClick={() => counter(counterValue - counterValue)}> Reset </button>
    </div>
  );
}

export default Home;
