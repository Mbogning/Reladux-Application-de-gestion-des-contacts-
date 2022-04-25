

function Modal({ title, children, save }) {
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