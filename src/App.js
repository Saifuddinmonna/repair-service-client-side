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
import AddService from "./components/Addservice/AddService";
import MyReview from "./components/Myreview/MyReview";
import PrivateRoute from "./routes/PrivateRouter/PrivateRoute";
import "react-photo-view/dist/react-photo-view.css";
import { Helmet } from "react-helmet";
import EditReview from "./components/Myreview/EditReview";
import { Toaster } from 'react-hot-toast';
import Contact from "./components/Contact/Contact";

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
					path: "/contact",
					element: <Contact></Contact>,
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
					path: "/myreview",
					element: (
						<PrivateRoute>
							<MyReview></MyReview>
						</PrivateRoute>
					),
				},
				{
					path: "/addservice/:id",
					loader: async ({ params }) => {
						return fetch(
							`https://assignment-11-server-site-smoky.vercel.app/services/${params.id}`,
						);
					},
					element: (
						<PrivateRoute>
							<AddService></AddService>
						</PrivateRoute>
					),
				},
				// {
				// 	path: "/review/editreview",
				// 	element: (
				// 		<PrivateRoute>
				// 			<EditReview></EditReview>
				// 		</PrivateRoute>
				// 	),
				// },
				{
					path: "/services/:id",
					loader: async ({ params }) => {
						return fetch(
							`https://assignment-11-server-site-smoky.vercel.app/services/${params.id}`,
						);
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
			<Toaster position="top-center" />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
