import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { Homepage } from './pages/HomePage';
import { BlogPage, loader as BlogLoader } from './pages/BlogPage';
import { About, About2 } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Post, { loader as PostLoader } from './pages/Post';
import CreatePost, { createPostAction } from './pages/CreatePost.jsx'
import LoginPage from './pages/LoginPage';
import ErrorPAge from './pages/ErrorPAge';

import Layout from './components/Layout';


import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider';



/*
* Реализована переделка под версию v6.4 RouterProvider в принципе ничего сложного,
* создано 2 лоадера 
   первый   на странице BlogPage и он сразу перекидывает и потом подгружает
   второй уже на посты и там сначала подгружает пост потом переводит на страницу и подгружает комментарии
 */

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path='posts' element={<BlogPage />} loader={BlogLoader} errorElement={<ErrorPAge />} />
      <Route path='posts/new' element={
        <RequireAuth>
          <CreatePost />
        </RequireAuth>
      } />
      <Route path='posts/:id' element={<Post />} loader={PostLoader} />
      <Route path='about/*' element={<About />} />
      <Route path='about2' element={<About2 />} >
        <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="teams" element={<p>Our teams</p>} />
      </Route>
      <Route path='about-us' element={<Navigate to='/about' replace />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
) */

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: < Layout />,
      children: [
        {
          errorElement: <ErrorPAge />,
          children: [
            {
              index: true,
              element: <Homepage />,
            },
            {
              path: 'posts',
              element: < BlogPage />,
              loader: BlogLoader,
            },
            {
              path: 'posts/new',
              element: < RequireAuth ><CreatePost /></RequireAuth >,
              action: createPostAction,
            },
            {
              path: 'posts/:id',
              element: <Post />,
              loader: PostLoader,
            },
            {
              path: 'about/*',
              element: < About />,
            },
            {
              path: 'about2',
              element: < About2 />,
              children: [
                {
                  path: "contacts",
                  element: <p>Our contact</p>,
                },
                {
                  path: "teams",
                  element: <p>Our teams</p>,
                }
              ],
            },
            {
              path: 'about-us',
              element: <Navigate to='/about' replace />,
            },
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: '*',
              element: < NotFoundPage />,
            },
          ],
        }
      ],
    },
  ]
)


function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
