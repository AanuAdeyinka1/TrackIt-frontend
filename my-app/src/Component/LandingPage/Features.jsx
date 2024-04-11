import style from "./features.modules.css";
import receivingPackage from "../Assets/images/receivingpackage.svg";
import bolt from "../Assets/images/bolt.svg";



export const Features =() =>{
    return (
      <div>
        <h1>Why choose us</h1>
        <div className={style.featureContainer}>
          <div>
            <img src={receivingPackage} />{" "}
          </div>
          <div className={style.groupOne}>
            <div >
              <img src={bolt} />
            </div>
          </div>
        </div>
      </div>

      //   <div>
      //     <h1>Why choose us?</h1>
      //     <div className={style.featureContainer}>
      //     <div>
      //       <img src={receivingPackage} />
      //     </div>
      //     <div>
      //       <div className={style.groupOne} >
      //         <div><img src={bolt} /></div>

      //         <div><h6>Swift Delivery</h6></div>
      //         <p>
      //           Packages are delivered quickly and efficiently, prioritizng speed
      //           and reliability.
      //         </p>
      //       </div>
      //     </div>
      //     </div>
      //   </div>
    );
}