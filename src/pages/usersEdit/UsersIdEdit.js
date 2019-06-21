import React from 'react';
import "./UsersIdEdit.css";



class UsersIdEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>

                <p>Test UserEdit</p>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">e-mail</span>
                    </div>
                    <input type="text" class="form-control" placeholder="e-mail" aria-label="e-mail" aria-describedby="basic-addon1" />
                </div>

                <button type="button" className="btn btn-outline-secondary">Send</button>

                {/* <button type="button" className="btn btn-outline-secondary">Cancel</button> */}





            </>


        )

    }

}

export { UsersIdEdit }