export interface Quote {
  quotation: string;
  author: string;
  imageSize: ImageSize;
  image: string;
  liked: boolean;
}

export interface ImageSize {
  width: number;
  height: number;
}
