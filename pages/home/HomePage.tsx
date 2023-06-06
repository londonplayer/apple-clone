import React from "react";
import styles from "./HomePage.module.scss";
import NavBar from "../navbar/NavBar";
import { AiFillApple } from "react-icons/ai";
import Image from "next/image";
import background from "../../public/image.jpg";

const HomePage = () => {
	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<Image alt="" src={background} className={styles.backgroundImage} />
				<div className={styles.copy_container}>
					<div className={styles.headline}>
						<AiFillApple />
						<span>WWDC23</span>
					</div>
					<div className={styles.subhead}>
						<span>
							Introducing Apple Vision Pro and the era of spatial computing. The new 15-inch MacBook
							Air with M2, Mac Studio with M2 Max and M2 Ultra, and Mac Pro with M2 Ultra. And
							previews of iOS 17, iPadOS 17, macOS Sonoma, and watchOS 10.
						</span>
					</div>
					<a className={styles.button} href="https://www.apple.com/apple-events/">
						Watch the keynote
					</a>
				</div>
			</div>
		</>
	);
};

export default HomePage;
