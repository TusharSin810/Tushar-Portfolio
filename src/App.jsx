import React, {useState} from 'react'
import Homepage from './components/Homepage';
import LoadingContainer from './components/LoadingContainer';

function App() {

    const [loading, setLoading] = useState(true);

    const handleLoadingComplete = () => {
    setLoading(false);
    };

  return (
    <div>
      {loading && <LoadingContainer onLoaded={handleLoadingComplete} />}
      {!loading && <Homepage />}
    </div>
  )
}

export default App
