import { sql } from "@vercel/postgres";
// import Image from "next/image";
import Link from "next/link";

export default async function Foods() {
  const foods = await sql`SELECT * FROM foods`;
  console.log(foods);

  return (
    <div className="home-container">
      <h1>Foods</h1>
      {foods.rows.map((food) => {
        return (
          <Link href={`/foods/${food.id}`} key={food.id}>
            <div key={food.id}>
              <h3>{food.name}</h3>
              {/* <p>{food.content}</p> */}
              {/* <Image
              src={`/${food.name}.png`}
              alt={food.name}
              width={300}
              height={300}
            /> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
