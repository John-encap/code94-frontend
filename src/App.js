import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductAdd from './pages/product/ProductAdd.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import ProductEdit from './pages/product/ProductEdit.jsx'
import ProductFav from './pages/product/ProductFav.jsx'
import ProductHome from './pages/product/ProductHome.jsx'
import ProductSearch from './pages/product/ProductSearch.jsx'
import Login from './pages/product/Login.jsx';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>

              <BrowserRouter>
          <Routes>
            {/* <Route path="/admin" element={<ProtectedRoute role='admin'><AdminHome /></ProtectedRoute>}/> */}
            <Route path="/" element={<Login/>}/>
            <Route path="/product/home" element={<ProductHome/>}/>
            <Route path="/product/detail" element={<ProductDetail/>}/>
            <Route path="/product/add" element={<ProductAdd/>}/>
            <Route path="/product/edit/:id" element={<ProductEdit/>}/>
            <Route path="/product/favourits" element={<ProductFav/>}/>
            <Route path="/product/search/:search" element={<ProductSearch/>}/>
          </Routes>
        </BrowserRouter>
    </Provider>

  );
}

export default App;
