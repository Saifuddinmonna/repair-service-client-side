import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
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
import Legal from "./components/Legal/Legal";
import About from "./components/About/About";
import { handleApiError } from "./utils/errorHandler";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			errorElement: <ErrorBoundary />,
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
					path: "/about",
					element: <About></About>,
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
						try {
							const response = await fetch(
								`https://assignment-11-server-site-smoky.vercel.app/services/${params.id}`,
							);
							if (!response.ok) {
								throw new Error(`HTTP error! status: ${response.status}`);
							}
							return response;
						} catch (error) {
							const handledError = handleApiError(error);
							throw new Error(handledError.message);
						}
					},
					element: (
						<PrivateRoute>
							<AddService></AddService>
						</PrivateRoute>
					),
				},
				{
					path: "/services/:id",
					loader: async ({ params }) => {
						try {
							const response = await fetch(
								`https://assignment-11-server-site-smoky.vercel.app/services/${params.id}`,
							);
							if (!response.ok) {
								throw new Error(`HTTP error! status: ${response.status}`);
							}
							return response;
						} catch (error) {
							const handledError = handleApiError(error);
							throw new Error(handledError.message);
						}
					},
					element: <SingleServiceDetails></SingleServiceDetails>,
				},
				{
					path: "/terms",
					element: <Legal />,
				},
				{
					path: "/privacy",
					element: <Legal />,
				},
				{
					path: "/cookies",
					element: <Legal />,
				},
			],
		},
		{
			path: "*",
			element: <ErrorBoundary />,
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
