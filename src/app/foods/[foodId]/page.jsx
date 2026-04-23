import Image from "next/image";

const page = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    const {id, dish_name, image_link} = food;
    return (
        <div>
            <h1>Dish Id: {id}</h1>
            <h2>The food is: {dish_name}</h2>
            <Image src={image_link} alt={dish_name} width={200} height={100} />
        </div>
    );
};

export default page;