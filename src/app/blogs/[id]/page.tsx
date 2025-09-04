
import { IArticel } from "../page";
interface DetailsArticleProps {
  params: Promise<{ id: string }>;
}
async function DetailsArticel(props:DetailsArticleProps) {
    const {id}=await props.params;
const result=await fetch(`http://localhost:3001/articel/${id}`)
const articel=await result.json() as IArticel;
    return (  
        <>
       <h1 className="text-blue-500 font-sans text-xl mb-4">جزئیات مقاله <span className="text-black mr-1">{articel.title}</span></h1>

       <div><span className="text-gray-800">نویسنده:</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{articel.author}</span></div>
       <div><span className="text-gray-800">تاریخ انتشار:</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{articel.publishedAt.toLocaleString("fa-IR")}</span></div>
      
       <div className="mt-4"><p className="text-gray-800">خلاصه مقاله:</p><p className="bg-blue-100 text-blue-800 text-md font-medium me-2 p-8 rounded-sm">{articel.summary}</p></div>
      
        </>
    );
}

export default DetailsArticel;