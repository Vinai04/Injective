import LaunchApp from "./components/LaunchApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Borrow from "./components/Borrow";
import Lend from "./components/Lend";
import HomePage from "./components/HomePage";
import { WalletProvider } from "./Contexts/WalletContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <WalletProvider>
        <ToastContainer />
          <Routes>
            <Route path="/">
              <Route index element={<LaunchApp />} />
              <Route path="home" element={<HomePage />} />
              <Route path="borrow" element={<Borrow />} />
              <Route path="lend" element={<Lend />} />
            </Route>
          </Routes>
        </WalletProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
