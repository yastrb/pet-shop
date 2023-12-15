import {  Routes, Route} from 'react-router-dom';
import { FooterWithSocialLinks } from "./Components/Footer/Footer";
import { StickyNavbar } from "./Components/Navbar/Header";
import Main from './Pages/Main';
import CategoryPage from './Pages/CategoryPage';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="body h-full">
      <div className=" wrapper min-h-full flex flex-col">
        <StickyNavbar></StickyNavbar>
        <Routes>
          <Route index element={<Main/>} />
          <Route path="/" element={<Main />} />
          <Route path='/cats' element={<CategoryPage category="cats"/>}/>
          <Route path='/dogs' element={<CategoryPage category="dogs"/>}/>
          <Route path='/birds' element={<CategoryPage category="birds"/>}/>
          <Route path='/smallpets' element={<CategoryPage category="smallpets"/>}/>
          
        </Routes>
        <FooterWithSocialLinks></FooterWithSocialLinks>
      </div>
    </div>
  );
}

export default App;
