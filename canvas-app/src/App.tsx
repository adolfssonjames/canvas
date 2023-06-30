import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Banner } from "./components/banner";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { News } from "./pages/News";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Banner />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} Yas
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
const Root = () => {
  return (
    <>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/news">Nyheter</Link>
        <Link to="/contact"> kontakta oss</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default App;
