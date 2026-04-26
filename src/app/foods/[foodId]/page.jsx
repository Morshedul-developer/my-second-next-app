import Image from "next/image";

const page = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    const {id, dish_name, image_link, category, rating, price} = food;
    return (
        <div className="flex justify-center items-center">
            <div className="border border-gray-200 shadow-2xl rounded-2xl px-5 py-10 space-y-5 text-center max-w-100">
            <h1 className="text-4xl font-bold">The Food Id: {id}</h1>
            <h2 className="text-xl font-semibold">The food is: {dish_name}</h2>
            <hr />
            <p className="text-lg mb-5">Category: {category}</p>
            <Image className="mx-auto" src={image_link} alt={dish_name} width={200} height={100} />
            <div className="flex justify-between items-center font-semibold">
                <p>Rating: {rating}</p>
                <p>Price: {price}</p>
            </div>
        </div>
        </div>
    );
};

export default page;