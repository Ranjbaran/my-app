import Articel from "../components/Articel";
export interface IArticel {
  id: string;
  title: string;
  author: string;
  publishedAt: Date;
  summary: string;
  tags: string[];
}
async function Blogs() {
  const result = await fetch("http://localhost:3001/articel");
  const data = (await result.json()) as IArticel[];
  return (
    <>
      <h1 className="text-blue-500 font-medium text-2xl mb-4 mt-4">
        لیست مقالات
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Articel key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Blogs;
