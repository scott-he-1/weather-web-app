import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { City } from "./pages/City/City";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path={`/city/:cityId`} element={<City />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
