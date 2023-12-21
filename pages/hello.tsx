// pages/hello.tsx

import React from 'react';

const Hello = ({ data }) => {
  return (
    <div>
      <h1>Hello Page</h1>
      <p>Data: {data}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Simulate an asynchronous operation (e.g., fetching data from an API)
  const fetchData = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async Data');
    }, 1000);
  });

  // Wait for the data to be fetched
  const data = await fetchData;

  // Return the data as props
  return { props: { data } };
}

export default Hello;
