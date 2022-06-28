import React from "react"
import sale from "../../img/sale.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,  faCommentDots,faMagnifyingGlass,faMapLocation,faBell,faUser } from '@fortawesome/free-solid-svg-icons'
import logo from "../../img/logo/logo.png"
import   "./scss/styles.scss"

const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="top-panel">
                <div className="container">
                    <div className="top-group">
                       <div className="item-hotline">
                        HOTLINE <a href="tel:0332785441"><span className="number">0332785441</span> </a>
                       </div>
                       <div className="item">
                        <img className="img-sale" src={sale}/>  <a href="tel:0332785441"><span className="number">khuyến mãi</span> </a>
                       </div>
                       <div className="item">
                       <FontAwesomeIcon icon={faShoppingBag} />  <a href="tel:0332785441"><span className="number">Mua sỉ</span> </a>
                       </div>
                       <div className="item">
                        <FontAwesomeIcon icon={faCommentDots} /> <a href="tel:0332785441"><span className="chat">Chat với chúng tôi</span> </a>
                       </div>
                    </div>
                </div>
            </div>
            <div className="header-top">
                <div className="header-contain">
                    <img src={logo} />
                    <form className="form-search">
                        <input type="text"></input>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </form>
    
                    <div className="item-follow">
                          <a href="tel:0332785441"><span className="follow"><FontAwesomeIcon icon={faMapLocation}/> Theo dõi đơn hàng</span> </a>
                       </div>
                       <div className="item-notification">
                        <a href="tel:0332785441"><span className="notification"><FontAwesomeIcon icon={faBell} /> Thông báo của tôi</span> </a>
                       </div>
                       <div className="item-notification">
                        <a href="tel:0332785441"><span className="user-login"> <FontAwesomeIcon icon={faUser} /> đăng nhập</span> </a>
                       </div>
                       </div>
            </div>
            </div>
        </>
    )
}
export default Header