function NavMenu() {
    return (
        <div>
            <nav className="bg-black bg-opacity-80 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span className="text-center self-center text-2xl font-extrabold whitespace-nowrap text-[#569EBD] dark:text">NOMAX <br />
                        <p className="text-xs">NONTONMAX</p>
                    </span>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="flex gap-8">
                            <a href="">
                                <div className="flex gap-2">
                                    <img src="images/Movies.png" alt="" />
                                    <h1 className="text-xl font-semibold text-[#979797]">Movies</h1>
                                </div>
                            </a>
                            <a href="">
                            <div className="flex gap-2">
                                    <img src="images/TV_Series.png" alt="" />
                                    <h1 className="text-xl font-semibold text-[#979797]">TV Series</h1>
                                </div>
                            </a>
                            <a href="">
                            <div className="flex gap-2">
                                    <img src="images/Favorite.png" alt="" />
                                    <h1 className="text-xl font-semibold text-[#979797]">Favorite</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavMenu