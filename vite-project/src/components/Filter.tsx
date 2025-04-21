import { JSX } from "react";

interface Props {
    current : string;
    setFilter:(filter:string)=>void
}

const Filter = ({current,setFilter}:Props):JSX.Element=>{
    const filters = ["All","Active","Completed"];

    return (
        <div className="flex justify-center gap-4 mt-4">
            {
                filters.map((f)=>(
                    <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 rounded ${current === f ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                        {f}
                    </button>
                ))
            }
        </div>
    )
}

export default Filter