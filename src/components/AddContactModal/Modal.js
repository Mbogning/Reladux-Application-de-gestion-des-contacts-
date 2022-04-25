import React from "react"

function Modal({ title, children, save }) {
    // const [isSave, save] = useState(null)
    // const Footer = () => {}
    const Footer = () => {
        return (
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        )
    }
   
    return (
        <div
            className="modal fade"
            id="addContact"
            tabIndex="-1"
            aria-aria-labelledby="addContact"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg" >
                <div className="modal-content" >
                    <header title={title} ></header>
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