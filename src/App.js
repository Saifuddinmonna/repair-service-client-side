import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SingleServiceDetails from "./components/SignleServiceDetails/SingleServiceDetails";

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
				{
					path: "/login",
					element: <LoginPage></LoginPage>,
				},
				{
					path: "/register",
					element: <RegisterPage></RegisterPage>,
				},
				{
					path: "/services/:id",
					loader: async ({ params }) => {
						return	fetch(`http://localhost:5000/services/${params.id}`);
					},

					element: <SingleServiceDetails></SingleServiceDetails>,
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
