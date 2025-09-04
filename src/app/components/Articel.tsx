"use client"

import { useRouter } from "next/navigation";
import { IArticel } from "../blogs/page";

function Articel(props: IArticel) {
  const router = useRouter();
  function showDetails(id: string) {
    router.push(`/blogs/${id}`);
  }
  return (
    <>
      <div className="bg-[#EBF5FF] p-3 rounded-md">
        <h2 className="font-bold">{props.title}</h2>
        <p>{props.summary}</p>
        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={() => showDetails(props.id)}
            className="text-white  bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            جزئیات
          </button>
        </div>
      </div>
    </>
  );
}

export default Articel;
