import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SingleFood({ params }) {
  const result = await sql`SELECT * FROM foods WHERE id = ${params.id}`;
  const food = result.rows[0]; // SELECT returns an object with a rows proberty, which is an array of our results

  async function editFood(formData) {
    "use server";
    const name = formData.get("name");
    const content = formData.get("content");

    await sql`UPDATE foods SET name=${name}, content=${content} WHERE id = ${params.id}`;

    revalidatePath("/foods");
    revalidatePath(`/foods/${params.id}`);

    redirect(`/foods/${params.id}`);
  }

  return (
    <div>
      <form action={editFood}>
        <label>Name</label>
        <input name="name" placeholder="Food Name" defaultValue={food.name} />

        <label>Description</label>
        <textarea
          name="content"
          placeholder="content"
          defaultValue={food.content}
          rows={0}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}
