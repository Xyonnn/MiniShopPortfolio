export default function Navbar(){
    return(
        <div className="navbar bg-base-200 shadow-sm w-full rounded-md mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><button>Item 1</button></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><button>Submenu 1</button></li>
                                    <li><button>Submenu 2</button></li>
                                </ul>
                            </details>
                        </li>
                        <li><button>Item 3</button></li>
                    </ul>
                </div>
                <button className="btn btn-ghost text-xl">CarShopProject</button>
            </div>

            <div className="navbar-center hidden lg:flex gap-4">
                <input type="text" placeholder="Search" className="input input-bordered w-64" />
                <ul className="menu menu-horizontal px-1">
                    <li><button>Item 1</button></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 w-40 z-10">
                                <li><button>Submenu 1</button></li>
                                <li><button>Submenu 2</button></li>
                            </ul>
                        </details>
                    </li>
                    <li><button>Item 3</button></li>
                </ul>
            </div>

            <div className="navbar-end">
                {/* user login i koszyk */}
            </div>
        </div>
    )
}