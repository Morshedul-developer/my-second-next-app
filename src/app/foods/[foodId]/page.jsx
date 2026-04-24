import Image from "next/image";

const page = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    const {id, dish_name, image_link, category} = food;
    return (
        <div className="flex justify-center items-center">
            <div className="border border-gray-200 shadow-2xl rounded-2xl p-5 space-y-5 text-center max-w-100">
            <h1 className="text-4xl font-bold">Dish Id: {id}</h1>
            <h2 className="text-xl font-semibold">The food is: {dish_name}</h2>
            <p className="text-lg mb-5">Category: {category}</p>
            <Image className="mx-auto" src={image_link} alt={dish_name} width={200} height={100} />
        </div>
        </div>
    );
};

export default page;