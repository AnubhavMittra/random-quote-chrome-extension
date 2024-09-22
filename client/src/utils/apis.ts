import { createApi } from "unsplash-js";

// export Quote API URL
export const QUOTE_API =
  "https://api.api-ninjas.com/v1/quotes?category=inspirational";

export const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});
