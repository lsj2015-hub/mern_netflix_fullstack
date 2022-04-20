import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';
import Layout from './components/layout/Layout';
import ListList from './pages/listList/ListList';
import List from './pages/list/List';
import NewList from './pages/newList/NewList';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {user && (
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/movies" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/lists" element={<ListList />} />
            <Route path="/list/:listId" element={<List />} />
            <Route path="/newlist" element={<NewList />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
