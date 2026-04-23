import Food from "@/components/food";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  return (
    <div>
      <h2 className="text-4xl font-bold">Food Items: {foods.length}</h2>
      <div className="divider"></div>
      <div className="grid grid-cols-3 gap-4">
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
