import Link from "next/link";

export default async function Home() {
  return (
    <div className="home-container">
      <main>
        <marques>Foods from around the world</marques>
        <Link href="/food"></Link>
      </main>
    </div>
  );
}
