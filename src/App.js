import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ArticleDesc from "./pages/ArticleDesc";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddArticle from "./pages/AddArticle";
import { useState,useEffect } from "react";

function App() {
const [user,setUser] = useState(null);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
   setUser(user);
  }
}, []);

  return (
   <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser}/>}>
          <Route index element={<HomePage/>} />
          <Route path="article/:id" element={<ArticleDesc/>} />
          <Route path='/add_article' element={<AddArticle user={user}/>}/>
        </Route>
        <Route path="login" element={<LoginPage user={user} setUser={setUser}/>}/>
        <Route path="signup" element={<SignupPage user={user}/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
