import { useContext, useState } from "react"
import { Link } from "react-router-dom";

interface Props {

}

export function Home(props: Props) {
    return <div className="home">
        <div className="container">
            <div className="home-grid-wrapper">
                <div className="home-grid-column col-25">
                    <div className="profile-card">
                        ...
                    </div>
                </div>
                <div className="home-grid-column col-50">
                    <div className="profile-card-list">
                        <div className="profile-card">
                            ...
                        </div>
                        <div className="profile-card">
                            <div className="profile-cart-header">
                                <h3>Depoimentos (39)</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-grid-column col-25">
                    <div className="profile-card-list">
                        <div className="profile-card" id="friends-card">
                            <div className="profile-cart-header">
                                <h3>Amigos (748)</h3>
                                <a href="#">Ver todos</a>
                            </div>
                            <div className="profile-cart-grid-list">
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card" id="communities-card">
                            <div className="profile-cart-header">
                                <h3>Comunidades (56)</h3>
                                <a href="#">Ver todas</a>
                            </div>
                            <div className="profile-cart-grid-list">
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                                <div className="profile-cart-grid-item">
                                    <a href="#">
                                        <div className="profile-grid-item-image">
                                            <img src="./images/profile2.jpg" alt="friend" />
                                        </div>
                                        <label>Fulaninho</label>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}