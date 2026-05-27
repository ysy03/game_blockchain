import {BrowserRouter,Routes,Route, Outlet, Navigate} from 'react-router-dom'
import MainPage from './page/MainPage'
import Header from './page/component/Header';
import BlackJack from './page/Blackjack';
import {create} from 'zustand'

export const UserProperty = create((set)=>({
  money:50000,
  betting:0,
  setProperty: (newMoney) =>set({money:newMoney}),
  setBetting: (newbetting) =>set({betting:newbetting})
}))

export const Login = create((set)=>({
  user:false,
  login: () =>set({user:true}),
  logout: ()=>set({user:false})
}))



function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to={"/index"} replace />} />
            <Route path='/index' element={<MainPage />} />
            <Route path='/Blackjack' element={<BlackJack />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
