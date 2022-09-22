import './CardForm.scss';

export const CardForm = () => {
    return (
        <div className="card-form">
            <div className="card-form__body">
                <div className="card-form__body-container">
                    <div className="card-form__body-container-input-group">
                        <h5>Email</h5>
                        <input type="text" />
                    </div>
                    <div className="card-form__body-container-input-group">
                        <h5>Contraseña</h5>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardForm;