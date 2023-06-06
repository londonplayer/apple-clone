import React, { useEffect } from "react";
import styles from "./index.module.scss";
import HomePage from "./home/HomePage";

const Home: React.FC = () => {
	useEffect(() => {
		document.body.style.margin = "0";

		return () => {
			// Clean up the styles if needed
			document.body.style.margin = "";
		};
	}, []);

	return (
		<div className={styles.container}>
			<HomePage />
		</div>
	);
};

export default Home;
