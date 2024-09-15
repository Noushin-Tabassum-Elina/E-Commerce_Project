/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
    return (
        <>

            <div className="navbar bg-black text-white ">
                <div className="flex-1 ">
                    <a className="btn btn-ghost text-lg">Welcome To Worlds largest Online Shopping Hub</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 ">
                        <li>
                            <details>
                                <summary>My Account</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 text-black">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Currency</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 text-black">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Language</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 text-black">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default Header;