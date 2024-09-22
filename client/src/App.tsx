import { useState } from "react";
import "./App.css";
import { Quote } from "./types/Quote";
import { fetchRandomQuote } from "./utils/quotes";

function App() {
  const [quote, setQuote] = useState<Quote>({
    quotation: "",
    author: "",
    imageSize: { height: 3648, width: 5472 },
    image: "",
    liked: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchRandomQuote = async () => {
    try {
      setError("");
      setLoading(true);
      const {
        quote: quotation,
        author,
        error,
        image,
      } = await fetchRandomQuote();

      if (error) {
        throw new Error(error);
      }

      setQuote((prevQuote: Quote) => ({
        ...prevQuote,
        quotation,
        author,
        image,
      }));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
      console.log(quote);
    }
  };

  return (
    <>
      <div
        className="p-5 m-5 h-80 w-96 text-black rounded-md relative border border-red-900"
        style={{
          backgroundImage: `url(${quote.image})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-sm my-5">{quote.quotation}</p>
        <p className="text-sm text-right">{quote.author}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className=" px-3 py-2 w-24 rounded-tl-3xl rounded-br-3xl shadow border bg-white hover:text-gray-400    text-black  flex justify-center">
          Today
        </button>
        <button
          className=" px-3 py-2 w-24 rounded-tl-3xl rounded-br-3xl  shadow ml-5 border bg-white hover:text-gray-400   text-black flex justify-center"
          onClick={handleFetchRandomQuote}
        >
          Random
        </button>
      </div>
    </>
  );
}

export default App;
