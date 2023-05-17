import Dashboard from './components/Dashboard';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<PageNotFound />} />
          <Route path="/recent" element={<PageNotFound />} />
          <Route path="/settings" element={<PageNotFound />} />
          <Route path="/profile" element={<PageNotFound />} />
          <Route path="/events" element={<PageNotFound />} />
          <Route path="/boards" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
