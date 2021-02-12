import React from "react"
import "./styles/Header.css"
class Header extends React.Component{
    render() {
        return(
            <div>

                <div className="VVVSSSEEE">
                    <div className="srtochkaone">
                        <a className="blocknachl">Каталог</a>
                        <a className="block1">О компании</a>
                        <a className="block1">Контакты</a>
                        <a className="block1">Доставка</a>
                        <a className="block1">Оплата</a>
                        <a className="block1">Личный кабинет</a>
                        <a className="block1">Блог</a>
                    </div>

                        <div className="chact2">
                            <a className="dostavka">Доставка с 8:00 до 23:00</a>
                            <a className="nomer">+7(800)800-80-80</a>
                            <a className="EN">EN</a>
                            <a className="RU">RU</a>
                        </div>






                </div>

            </div>)

    }
}
export default Header
