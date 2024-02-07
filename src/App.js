import "./App.css";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewPost from "./Components/NewPost";
import PostDetails from "./Components/PostDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPost from "./Components/EditPost";
import { Provider } from "react-redux";
import Listview from "./Components/Listview";
import store from "./Slice/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<Listview />}></Route>
            <Route path="/form" element={<NewPost />}></Route>
            <Route path="/edit/:id" element={<EditPost />}></Route>
            <Route path="/read/:id" element={<PostDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
