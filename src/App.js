
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Accessories from './Routes/Accessories';
import Contact from './Routes/Contact';
import Fashion from './Routes/Fashion';
import Home from './Routes/Home';
import KidsWear from './Routes/KidsWear';
import MensWear from './Routes/MensWear';
import WomensWear from './Routes/WomensWear';
import Shirts from './Routes/Shirts';
import Bottom from './Routes/Bottom';
import Sarees from './Routes/Sarees';
import Kurtas from './Routes/Kurtas';
import Western from './Routes/Western';

import Layout from './components/Layout';
import Tshirt from './Routes/Tshirt';
function App() {
  return (
    <div className="App">
        
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="fashion" element={<Fashion/>}/>
            <Route path="mens-collection" element={<MensWear/>}/>
            <Route path="shirts" element={<Shirts/>}/>
            <Route path="Bottom-wear" element={<Bottom/>}/>
            <Route path="tshirts" element={<Tshirt/>}/>
            <Route path="womens-collection" element={<WomensWear/>}/>
            <Route path="sarees" element={<Sarees/>}/>
            <Route path="kurtas" element={<Kurtas/>}/>
            <Route path="western" element={<Western/>}/>
            <Route path="kids-collections" element={<KidsWear/>}/>
            <Route path="accessories" element={<Accessories/>}/>
            <Route path="contact" element={<Contact/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
