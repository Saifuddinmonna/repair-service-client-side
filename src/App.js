import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/",
					element: <Home></Home>,
					children: [],
				},
				{
					path: "/blog",
					element: <Blog></Blog>,
				},
				{
					path: "/services",
					element: <Services></Services>,
				},
			],
		},
		{
			path: "*",
			element: <ErrorPage></ErrorPage>,
		},
  ]);

  return (
		<div className="App">
			<h2>my site is running</h2>
			<RouterProvider router={router} />
		</div>
  );
}

export default App;
