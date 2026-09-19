import React, { useState } from 'react';

const BirthdayWish = ({ name = "Friend" }) => {
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  // Simple inline styles for a festive look
  const styles = {
    container: {
      border: '3px dashed #ff9ff3',
      borderRadius: '15px',
      padding: '30px',
      textAlign: 'center',
      maxWidth: '450px',
      margin: '40px auto',
      backgroundColor: '#fef3ff',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    button: {
      backgroundColor: '#f368e0',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '15px',
      transition: 'transform 0.2s'
    },
    heading: {
      color: '#ff9f43',
      fontSize: '2rem',
      margin: '0 0 15px 0'
    },
    text: {
      color: '#576574',
      fontSize: '1.2rem',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      {!isGiftOpened ? (
        <div>
          <h2 style={styles.heading}>I have a surprise for you! 🎁</h2>
          <button 
            style={styles.button} 
            onClick={() => setIsGiftOpened(true)}
          >
            Open Gift
          </button>
        </div>
      ) : (
        <div>
          <h1 style={styles.heading}>🎉 Happy Birthday, {name}! 🎂</h1>
          <p style={styles.text}>
            Wishing you a fantastic day filled with joy, laughter, and lots of code that compiles on the first try! 🎈💻🥳
          </p>
          <button 
            style={styles.button} 
            onClick={() => setIsGiftOpened(false)}
          >
            Wrap it back up
          </button>
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;