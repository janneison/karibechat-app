import React, { Component } from "react";
import EditUser from "./edit-user";

export default class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
        this.onClickOutside = this.onClickOutside.bind(this);
    }

    onClickOutside(event) {
        if (this.ref && !this.ref.contains(event.target)) {
            if (this.props.onClose) {
                this.props.onClose();
            }
        }
    }

    componentDidMount() {
        window.addEventListener("mousedown", this.onClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener("mousedown", this.onClickOutside);
    }

    onClickMyProfile = () => {
        this.setState({
            opened: !this.state.opened
        });
    };

    render() {
        const { store } = this.props;

        const user = store.getCurrentUser();

        const { opened } = this.state;
        return (
            <div className='user-menu' ref={ref => (this.ref = ref)}>
                {user ? (
                    <div>
                        {opened ? (
                            <EditUser />
                        ) : (
                            <div>
                                <h2>My menu</h2>
                                <ul className='menu'>
                                    <li>
                                        <button onClick={() => this.onClickMyProfile()}>
                                            My Profile
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                if (this.props.onClose) {
                                                    this.props.onClose();
                                                }

                                                store.signOut();
                                            }}
                                            type='button'
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}
