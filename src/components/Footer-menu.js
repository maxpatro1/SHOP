import React from "react";
import "./styles/Footer-menu.css"
class FooterMenu extends React.Component {
    render() {
        return (
            <div className="footer-menu">
                <h6>Меню 1</h6>
                <a>Каталог</a>
                <a>О компании </a>
                <a>Контакты</a>
                <a>Доставка</a>
                <a>Оплата</a>
                <a>Личный кабинет</a>
                <a>Блог</a>
            </div>
        )
    }
}
export default FooterMenu
