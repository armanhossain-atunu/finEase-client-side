import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import MyContainer from '../Components/MyContainer';
import { BiSolidReport } from 'react-icons/bi';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineAddCircle } from 'react-icons/md';

const DashboardLayout = () => {
    const { user,logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (


        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}

                <nav className="bg-base-300">
                    <MyContainer>
                        <div className="flex justify-between items-center py-3">
                            <div>
                                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    {/* Sidebar toggle icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                                </label>
                                <Link to="/" className="text-2xl font-bold">
                                    Fin<span className="text-[#875DF8]">Ease</span>
                                </Link>
                            </div>
                            {/* user image */}
                            <div className="dropdown dropdown-end ">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-capitalize"
                                    data-tip={user?.displayName || "User"}
                                >
                                    <div className="w-10 z-50 rounded-full ">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm font-normal border dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52"
                                >
                                    <li className="user-item capitalize">{user?.displayName}</li>
                                    <li>
                                        <Link to="update-profile">My Profile</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </MyContainer>
                </nav>

                {/* Page content here */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-5"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard Home">
                                    {/* Dashboard icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4h6v8H4z"></path><path d="M14 4h6v4h-6z"></path><path d="M14 12h6v8h-6z"></path><path d="M4 16h6v4H4z"></path></svg>
                                    <span className="is-drawer-close:hidden">Dashboard Home</span>
                                </button>
                            </Link>
                        </li>
                        {/* Add transaction */}
                        <li>
                            <Link to="AddTransaction" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Transaction">
                                {/* Transaction icon */}
                                <MdOutlineAddCircle size={20} />
                                <span className="is-drawer-close:hidden">Add Transaction</span>
                            </Link>
                        </li>
                        {/* List my transactions */}
                        <li>
                            <Link to="MyTransactions" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Transactions">
                                {/* Transaction icon */}
                                <AiFillDollarCircle size={20} />
                                <span className="is-drawer-close:hidden">Transactions</span>
                            </Link>
                        </li>


                        {/* List item */}
                        <li>
                            <Link to="reports" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Reports">
                                {/* Settings icon */}
                                <BiSolidReport size={20} />
                                <span className="is-drawer-close:hidden">Reports</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >

    );
};

export default DashboardLayout;