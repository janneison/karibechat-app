import React, { Component } from "react";

export default class EditUser extends Component {
    render() {
        return (
            <div className='edit-user'>
                <form action=''>
                    <div className='form-item'>
                        <label>FirstName:</label>
                        <input type='text' />
                    </div>
                    <div className='form-item'>
                        <label>LastName:</label>
                        <input type='text' />
                    </div>
                    <div className='form-item'>
                        <label>Mail:</label>
                        <input type='email' />
                    </div>
                    <div className='form-item'>
                        <label>Foto:</label>
                        <input type='file' />
                    </div>
                    <div className='form-actions'>
                        <button onClick={e => e.preventDefault()} class='primary' type='submit'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
