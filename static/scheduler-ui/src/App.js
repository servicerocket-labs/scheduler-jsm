import React, {useEffect, useState} from 'react';
import {invoke} from '@forge/bridge';
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', {example: 'my-invoke-variable'}).then(setData);
  }, []);

  return (
    <>
      <Header/>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-3xl font-bold underline">
            {data ? data : 'Loading...'}
          </div>
        </div>
      </main>
    </>

  );
}

export default App;
