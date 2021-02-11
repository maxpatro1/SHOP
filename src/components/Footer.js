import React from "react";
import FooterMenu from "./Footer-menu";
import "./styles/Footer.css"
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="menu">
                        <FooterMenu/>
                        <FooterMenu/>
                        <FooterMenu/>
                    </div>
                    <div className="social-networks">
                        <h6>Мы в соц. сетях</h6>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1310/14550302/original/dz.svg" alt="404"/>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1306/14550298/original/fb.svg" alt="404"/>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1309/14550301/original/twitter.svg" alt="404"/>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1307/14550299/original/vk.svg" alt="404"/>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1303/14550295/original/yt.svg" alt="404"/>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1308/14550300/original/insta.svg" alt="404"/>
                        <img className="vk" src="https://static-sl.insales.ru/files/1/1304/14550296/original/telegram.svg" alt="404"/>
                        <h3 className="number">+7(800) 800-80-80</h3>
                        <span className="help-service">справочная служба</span>
                        <h3 className="number">+7(800) 800-80-80</h3>
                        <span className="help-service">справочная служба</span>
                    </div>
                </div>
                <div className="logo-payment">
                    <img src="https://static-sl.insales.ru/files/1/2850/14871330/original/Logo__4_.svg" alt="404"/>
                    <div className="payment">
                        <img className="visa" src="https://static-sl.insales.ru/files/1/1311/14550303/original/Group.svg" alt="404"/>
                        <img className="visa" src="https://static-sl.insales.ru/files/1/1305/14550297/original/Visa.svg" alt="404"/>
                        <img className="visa" src="https://static-sl.insales.ru/files/1/1312/14550304/original/mir-logo_1.svg" alt="404"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Welcome;
