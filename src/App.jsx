import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "./recoil/state";

import MainLayout from "./component/MainLayout";
import Intro from "./page/Intro";
import Login from "./page/Login";
import Download from "./page/Download";
import Main from "./page/Main";
import View from "./page/View";
import Wallet from "./page/Wallet";
import Setting from "./page/Setting";
import Detail from "./page/Detail";
import Discover from "./page/Discover";


function App() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const isLogin = userInfo.login;
  // const isLogin = true;
  
  console.log("isLogin :",isLogin);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={isLogin ? <Navigate to="/main" /> : <Navigate to="/intro" />}/>
        <Route path="/Intro" element={isLogin ? <Navigate to="/main" /> : <Intro/>}/>
        <Route exact path="/login" element={<Login />} />
        
        <Route element={<MainLayout />}>
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/view" element={<View />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/detail" element={isLogin ? <Detail /> : <Intro/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
