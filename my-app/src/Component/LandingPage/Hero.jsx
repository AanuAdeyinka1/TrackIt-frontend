import style from "./style.module.css"
import logosvg from "../Assets/images/logo.svg.svg";
import heroLady from "../Assets/images/heroLady.svg"
import CustomButton from "../CustomButton/CustomButton";
import { Features } from "./Features";

export const HeroSection =() =>{
    return (
      <div>
        <div className={style.header}>
          <div>
            <img src={logosvg} />
          </div>
          <div>
            <nav className={style.navigation}>
              <a href="#">Home</a>
              <a href="#">Contact</a>
              <a href="#">Sign in</a>
              <a className={style.createAccount} href="#">
                Create an account
              </a>
            </nav>
          </div>
        </div>
        <div className={style.heroContainer}>
          <div className={style.heroLeft}>
            <h1 className={style.title}>
              Experience hassle-free <br /> package delivery with <br /> our trusted brand.
            </h1>
            <p className={style.para}>Skilled riders, Real time tracking, Secured payment system.</p>
            <CustomButton className={style.button}>
              Let's help you deliver
            </CustomButton>
          </div>
          <div>
            <img className={style.ladyimage} src={heroLady} />
          </div>
        </div>
        <Features />
      </div>
    );
}