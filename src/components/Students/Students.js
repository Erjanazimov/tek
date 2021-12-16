import React from "react";

function Students(){
    return(
        <div className="fons_Trainer">
            <div className="containerM mt-2 pb-5">
                <form className="mb-3 pt-5">
                    <h3 className="fs-3 text-center">Поиск учеников</h3>
                    <div className="d-flex justify-content-center flex-wrap">
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Фамилия</label>
                        <input type="family" className="form-control" id="exampleInputEmail1"
                               aria-describedby="Фамилия"/>
                    </div>
                    <div className="mb-3 mx-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Имя</label>
                        <input type="name" className="form-control" id="exampleInputPassword1"/>
                    </div>
                        <div className="mt-4">
                    <button type="button" className="btn btn-outline-primary">Искать</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Students;