import React from "react"
import { useFormValidation } from "../../hooks/useFormValidation";

function Footer({ save }) {
    const { isValid } = useFormValidation();
    return (
        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
            >Close</button>
            <button
                type="button"
                onClick={save}
                className="btn btn-primary"
                disabled={!isValid}
            >Save</button>
        </div>
    )
};

function Modal({ title, children, save }) {

    return (
        <div
            className="modal fade"
            id="addContact"
            tabIndex="-1"
            aria-labelledby="addContact"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg" >
                <div className="modal-content" >
                    <div className="modal-header">
                        <header className="modal-title">{title}</header>
                    </div>
                    <div className="modal-body" >
                        <div className="row">{children}</div>
                    </div>
                    <Footer save={save} />
                </div>
            </div>

        </div>
    )
}
export default Modal