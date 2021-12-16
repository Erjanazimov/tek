import React from "react";


function Gallery(){
    return(
        <div id="photo" className="fonst_gal">
            <div className="containerM">
                <h2 className="text-center pt-5 trg">Фото наших учеников
                </h2>
                <h2 className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor"
                         className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                    </svg></h2>
                <div className="d-flex justify-content-between pading moi">

                    <div className="item">
                        <div className="person_item">
                            <a href="#">
                            <span className="images_galery">
                                <img src="https://worldtaekwondo.kg/wp-content/uploads/2021/12/Bishkek-025-600x400.jpg"
                                     alt="" />
                            </span>
                            </a>
                                <a href="#"><span className="personf">Открытый Чемпионат города Бишкек по Всемирному Таэквондо 2021</span>
                                </a>
                                    <span className="op">04 декабря 2021 года в спортивном зале Дворца спорта имени Каба уулу Кожомкула прошёл Открытый Чемпионат города Бишкека по</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="person_item">
                            <a href="#">
                            <span className="images_galery">
                                <img src="https://worldtaekwondo.kg/wp-content/uploads/2021/11/sous-019-600x400.jpg"
                                     alt="" />
                            </span>
                            </a>
                            <a href="#"><span className="personf">Открытый Чемпионат города Бишкек по Всемирному Таэквондо 2021</span>
                            </a>
                            <span className="op">04 декабря 2021 года в спортивном зале Дворца спорта имени Каба уулу Кожомкула прошёл Открытый Чемпионат города Бишкека по</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="person_item">
                            <a href="#">
                            <span className="images_galery">
                                <img src="https://worldtaekwondo.kg/wp-content/uploads/2021/11/MED_2089-600x400.jpg"
                                     alt="" />
                            </span>
                            </a>
                            <a href="#"><span className="personf">Открытый Чемпионат города Бишкек по Всемирному Таэквондо 2021</span>
                            </a>
                            <span className="op">04 декабря 2021 года в спортивном зале Дворца спорта имени Каба уулу Кожомкула прошёл Открытый Чемпионат города Бишкека по</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;