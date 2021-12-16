import React from "react";

function ModalSubmit(){
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Заявка на регистрацию</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">Введите имя </label>
                                <input type="name" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Алекс"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">Введите фамилию </label>
                                <input type="name" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Михаилов"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">Введите Отчество </label>
                                <input type="name" className="form-control" id="exampleFormControlInput1"
                                       placeholder=""/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">ФИО Родителей </label>
                                <input type="date" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Михаилов"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fs-6">Номер телефона </label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Михаилов"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalSubmit;