import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { Homepage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { About, About2 } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost.jsx'
import LoginPage from './pages/LoginPage';

import Layout from './components/Layout';

import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider';




function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='posts' element={<BlogPage />} />
            <Route path='posts/new' element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            } />
            <Route path='posts/:id' element={<Post />} />
            <Route path='about/*' element={<About />} />
            <Route path='about2' element={<About2 />} >
              <Route path="contacts" element={<p>Our contact</p>} />
              <Route path="teams" element={<p>Our teams</p>} />
            </Route>
            <Route path='about-us' element={<Navigate to='/about' replace />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
