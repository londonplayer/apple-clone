import React from "react";
import styles from "./NavBar.module.scss";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const NavBar = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.buttons}>
				<div className={styles.logo}>
					<AiFillApple />
				</div>
				<div className={styles.store}>
					<span>Store</span>
				</div>
				<div className={styles.mac}>
					<span>Mac</span>
				</div>
				<div className={styles.ipad}>
					<span>iPad</span>
				</div>
				<div className={styles.iphone}>
					<span>iPhone</span>
				</div>
				<div className={styles.watch}>
					<span>Watch</span>
				</div>
				<div className={styles.vision}>
					<span>Vision</span>
				</div>
				<div className={styles.airpods}>
					<span>AirPods</span>
				</div>
				<div className={styles.tvhome}>
					<span>TV & Home</span>
				</div>
				<div className={styles.entertainment}>
					<span>Entertainment</span>
				</div>
				<div className={styles.accessories}>
					<span>Accessories</span>
				</div>
				<div className={styles.support}>
					<span>Support</span>
				</div>
				<div className={styles.search}>
					<AiOutlineSearch />
				</div>
				<div className={styles.cart}>
					<BsBag />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
