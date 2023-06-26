import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "./recoil/state";

import MainLayout from "./component/MainLayout";
import Main from "./page/Main";
import Login from "./page/Login";
import Download from "./page/Download";
import Reference from "./page/Reference";
import View from "./page/View";
import Wallet from "./page/Wallet";
import Setting from "./page/Setting";
import Detail from "./page/Detail";


function App() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const isLogin = userInfo.login;
  // const isLogin = true;
  
  console.log("isLogin :",isLogin);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={isLogin ? <Navigate to="/reference" /> : <Navigate to="/main" />}/>
        <Route path="/main" element={isLogin ? <Navigate to="/reference" /> : <Main/>}/>
        <Route exact path="/login" element={<Login />} />
        
        <Route element={<MainLayout />}>
          <Route exact path="/reference" element={<Reference />} />
          <Route exact path="/view" element={<View />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/detail" element={isLogin ? <Detail /> : <Main/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
