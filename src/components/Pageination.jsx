import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pageination = () => {
    const {page , handlePageChange , totalPages ,darkMode} = useContext(AppContext);
  return (
    <div className={`w-full flex items-center justify-center h-[7vh] custom-shadow-top fixed bottom-0 ${darkMode? ("bg-[#1e1e1e] text-[#FAF9F6] transition-all duration-200 white-upper-shadow") : ("bg-[#FAF9F6] text-[#1e1e1e] transition-all duration-200")}`}>
        <div className='w-[90%] max-w-[700px] flex justify-between items-center'>
            <div className='space-x-2'>
                { page > 1 &&
                    (<button className={`text-md font-bold rounded-md px-5 py-2 shadow-md border-solid border-slate-300 border-2 hover:bg-[#1e1e1e] hover:transition-all hover:text-white hover:duration-200 transition-all duration-200 ${(darkMode)? ("hover:bg-white hover:text-black") : ("hover:bg-black hover:text-white")}`} onClick={()=> handlePageChange(page-1)}>
                        Previous
                    </button>)
                }
                {page< totalPages &&
                    (<button className={`text-md font-bold rounded-md px-5 py-2 shadow-md border-solid border-slate-300 border-2 hover:bg-[#1e1e1e] hover:transition-all hover:text-white hover:duration-200 transition-all duration-200 ${(darkMode)? ("hover:bg-white hover:text-black") : ("hover:bg-black hover:text-white")}`} onClick={()=> handlePageChange(page+1)}>
                        Next
                    </button>)
                }
            </div>
            <p className='font-bold text-md'>
                Page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pageination