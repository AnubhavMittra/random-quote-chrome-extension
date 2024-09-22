// import Quotable API URL
import { QUOTE_API, unsplash } from "./apis";
import { QuoteResponse } from "../types/QuoteResponse";

const apiKey = import.meta.env.VITE_API_NINJA_API_KEY;

// fetch quote
export const fetchRandomQuote = async (): Promise<QuoteResponse> => {
  try {
    const res = await fetch(`${QUOTE_API}`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    const { quote, author, category } = await result[0];
    const keywords: string[] = await quote
      .trim()
      .replace(/[,.]/g, "")
      .split(" ");
    const longestKeyword = keywords.reduce((pre, cur) =>
      pre.length > cur.length ? pre : cur
    );
    const unsplashResponse = await unsplash.search.getPhotos({
      query: longestKeyword,
      perPage: 1,
    });
    console.log(unsplashResponse);
    const image = unsplashResponse.response!.results[0].urls.regular;
    return { quote, author, category, image, error: undefined };
  } catch (error) {
    return {
      error:
        "Something Went Wrong! Please check your internet connection or refresh!",
      quote: "",
      category: "",
      image: "",
      author: "",
    };
  }
};
