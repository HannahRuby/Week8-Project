import { sql } from "@vercel/postgres";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SingleFood({ params }) {
  //   const idArray = [1, 2, 3, 4, 5];
  const result = await sql`SELECT * FROM foods`;
  const food = result.rows[0]; // SELECT returns an object with a rows proberty, which is an array of our results

  return (
    <div>
      <h2>{food.name}</h2>
      <p>{food.content}</p>
      {/* <Image
        src={`/${food.name}.png`}
        alt={food.name}
        width={300}
        height={300}
      /> */}
      <Link href={`/foods/${params.id}edit`}>Edit</Link>
    </div>
  );
}
