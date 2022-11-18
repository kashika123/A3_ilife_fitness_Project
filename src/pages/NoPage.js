import React from 'react'


const NotPageFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Opps!</h1>
        <p>
          Sorry, we couldn't find the you are looking for or it still under
          construction.
        </p>
      </div>
    </>
  );
};
export default NotPageFound;
