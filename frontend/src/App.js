import {  Routes, Route} from 'react-router-dom';
import { FooterWithSocialLinks } from "./Components/Footer/Footer";
import { StickyNavbar } from "./Components/Header/Header";
import Main from './Pages/Main';
import CategoryPage from './Pages/CategoryPage';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import WishList from './Pages/WishList';

function App() {
  return (
      <div className=" wrapper min-h-full flex flex-col ">
        <StickyNavbar></StickyNavbar>
        <div className=' main flex-auto my-5'>
        <Routes>
          <Route index element={<Main/>} />
          <Route path="/" element={<Main />} />
          <Route path='/cats' element={<CategoryPage category="cats"/>}/>
          <Route path='/dogs' element={<CategoryPage category="dogs"/>}/>
          <Route path='/birds' element={<CategoryPage category="birds"/>}/>
          <Route path='/fish' element={<CategoryPage category="fish"/>}/>
          <Route path='/smallpets' element={<CategoryPage category="smallpets"/>}/>
          <Route path='/reptiles' element={<CategoryPage category="reptiles"/>}/>
          <Route path='/my-account' element={<LoginSignUp/>} />
          <Route path='/wishlist' element={<WishList/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </div>
        <FooterWithSocialLinks></FooterWithSocialLinks>
      </div>
  );
}

export default App;
