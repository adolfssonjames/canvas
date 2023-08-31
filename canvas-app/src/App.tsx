import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  NavLink,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { News } from "./pages/News";

function App() {
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
    </>
  );
}
const Root = () => {
  return (
    <>
      <div className="float-left absolute flex flex-wrap m-10">
        <header>
          <h1 className="logo-text">Soul Sisters</h1>
        </header>
      </div>
      <div className="navbar">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 decoration-2 p-2 m-2"
              : "p-2 m-2"
          }
          to="/"
        >
          Hem
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 decoration-2 p-2 m-2"
              : "p-2 m-2"
          }
          to="/news"
        >
          Nyheter
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 decoration-2 p-2 m-2"
              : "p-2 m-2"
          }
          to="/contact"
        >
          Kontakt
        </NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <footer className="min-h-screen flex flex-col mt-auto">footer</footer>
    </>
  );
};

export default App;
