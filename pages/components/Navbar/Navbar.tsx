import styles from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../common/Button/Button";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [open, SetOpen] = useState(false);

  const handleOpen = () => {
    if (open) {
      SetOpen(false);
      console.log(true);
    } else {
      SetOpen(true);
    }
  };
  return (
    <nav className={styles.NavbarContainer}>
      <div className={styles.Navbar}>
        <Link href="/">
          <img src="./img/NavBarLogo.png" alt="" />
        </Link>
        <div className={styles.Links}>
          <a href="">Get started</a>
          <a href="">Vision</a>
          <a href="">Developers</a>
          <a href="">Integration</a>
          <Button text="Contact Us" style="Navbar" />
        </div>
        <div className={styles.Burger}>
          <Button
            image="./img/Burger.png"
            style="Navbar"
            onclick={handleOpen}
          />
        </div>
      </div>
      <div className={open ? styles.OpenBurger : styles.close}>
        <div className={styles.BurgerClose}>
          <img className={styles.logo} src="./img/NavBarLogo.png" alt="" />
          <Button image="./img/Cross.png" style="Navbar" onclick={handleOpen} />
        </div>
        <div className={styles.LinksMobile}>
          <a href="">Get started</a>
          <a href="">Vision</a>
          <a href="">Developers</a>
          <a href="">Integration</a>
          <a className={styles.green} href="">
            Contact Us
          </a>
        </div>
        <div className={styles.credits}>
          <p>Copyright © 2022 – Berty.Tech non-profit organization</p>
          <div>
            <img src="./img/Telegram.png" alt="" />
            <img src="./img/Twitter.png" alt="" />
            <img src="./img/Discord.png" alt="" />
            <img src="./img/Instagram.png" alt="" />
            <img src="./img/Around.png" alt="" />
            <img src="./img/Linkedin.png" alt="" />
            <img src="./img/Git.png" alt="" />
            <img src="./img/Reddit.png" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
