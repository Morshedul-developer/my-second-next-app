import Image from "next/image";
import Link from "next/link";

const Food = ({ food }) => {
  const { id, dish_name, image_link } = food;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image src={image_link} alt={dish_name} width={200} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>

          <Link href={`/foods/${id}`}>
            <button className="btn btn-secondary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
