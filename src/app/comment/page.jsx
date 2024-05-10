import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment() {
  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const content = formData.get("content");

    await sql`INSERT INTO foods (username, content) values (${username}, ${description})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div className="add-comment-container">
      <h2>Add Comment!</h2>
      <form action={handleAddComment}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" placeholder="Name" />
        <label htmlFor="comment">comment</label>
        <input name="comment" id="comment" placeholder="Comment" />

        <button type="submit">Add a Comment!</button>
      </form>
    </div>
  );
}

redirect("/");
