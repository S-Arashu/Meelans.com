import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={
        <div className="main">
        {/* <MainPage /> */}
        </div>
        } />
    </Routes>
    </div>
  );
}

export default App;
