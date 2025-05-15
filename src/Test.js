import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function App() {
	return (
		<PhotoProvider>
			<PhotoView src="https://i.ibb.co/BfkY8K5/desktop-icon2.jpg">
				<img src="/https://i.ibb.co/k6HR6G9/imac.png" alt="" />
			</PhotoView>
		</PhotoProvider>
	);
}
/* 
https://i.ibb.co/BfkY8K5/desktop-icon2.jpg
https://i.ibb.co/k6HR6G9/imac.png
https://i.ibb.co/hCfm8Hj/ipads.png
https://i.ibb.co/QvNsVLV/iphone-8-repair.png
https://i.ibb.co/nLt4X6M/laptop-image.png
https://i.ibb.co/VSWWjJX/smartphones.png


*/