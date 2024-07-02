import React from "react";
import "../images/.."
import "../CSS/book.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "react-redux";
import { AddCart } from "./redux/cartSystem";
import { useNavigate } from "react-router-dom";


const Book = ({ item }) => {

    const dispatch = useDispatch();

    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="container" data-aos="zoom-in-up" ><div key={Val.id}></div>
                        <div className="box-image"  >
                            <img src={'http://localhost:8080/api/v1/user/all-books/' + Val._id} width={150} height={190} alt="..." />
                            <button className="scart" onClick={() => dispatch(AddCart(Val))}><ShoppingCartIcon className="cart" /></button>
                        </div>
                        <div className="box-text">
                            <h1 className="name" >{Val.metadata.bName}</h1>
                            <div className="catg">{Val.metadata.bGenre}</div>
                            <a href={Val.metadata.pLink}><button className="btn">Purchase</button></a>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Book;