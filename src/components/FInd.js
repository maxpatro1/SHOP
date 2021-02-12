import React from "react"
import "./styles/Find.css"
import {TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {PersonOutline, ShoppingCartOutlined} from "@material-ui/icons";
class Find extends React.Component{
    render() {
        return(<div>

            <div className="Vsechast2">
                <img className="logotipp" src="https://static-sl.insales.ru/files/1/2836/14871316/original/Logo__3_.svg" alt="404"/>
                <form  noValidate autoComplete="off" className="poisk">
                    <TextField className="razmer" id="outlined-basic" label="Поиск" variant="outlined" />
                </form>
                <SearchIcon className="krasata"/>
                <PersonOutline className="userr"/>
                <ShoppingCartOutlined className="korzina"/>


            </div>


        </div>)

    }
}
export default Find
