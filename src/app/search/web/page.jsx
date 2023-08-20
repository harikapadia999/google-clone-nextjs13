import WebSearchResults from "@/app/components/WebSearchResults";
import Link from "next/link";
import { resolve } from "styled-jsx/css";

export default async function WebSearchPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}`
  );
  if (!response.ok) {
    throw new Error("worng");
  }
  const data = await response.json();

  console.log(data);

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage.{" "}
        </p>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }

  return <>{results && <WebSearchResults results={data} />}</>;
}
