import React from 'react'

function Navbar() {
    return (
        <div className='p-5 big-shoulders text-xl'>
            <nav class="">
                <div class="flex justify-between items-center">
                    <a class="" href="#">YZ</a>
                    

                        <ul class="flex justify-between items-center gap-5">
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <a class="nav-link" href="#">Work</a>
                            </li>
                            <li class="nav-item hover:text-[#ECD06F] hover:drop-shadow-md ">
                                <a class="nav-link" href="#">Contact</a>
                            </li>

                        </ul>


                    
                        <form class="flex items-center gap-5" role="search">
                            <div className='flex gap-3'>
                                <button className='btn nav-item hover:text-[#ECD06F] underline  hover:drop-shadow-md'>EN</button>
                                <button className='btn nav-item hover:text-[#ECD06F]  hover:drop-shadow-md'>FR</button>
                            </div>
                            <button className="border border-2 px-4 py-2 text-black rounded bg-[#ECD06F] hover:bg-white hover:drop-shadow-md " type="">Resume</button>
                        </form>

                </div>
            </nav>
        </div>
    )
}

export default Navbar