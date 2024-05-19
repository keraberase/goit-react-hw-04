import axios, { AxiosResponse } from "axios";

interface ImageResult {
  id: string;
  urls: {
    regular: string,
    small: string,
  };
  alt_description: string;
  likes: number | null;
  author: string;
}

interface ImageSearchResult {
  results: ImageResult[];
  total_pages: number;
}

export const fetchImagesWithQuery = async (
  query: string,
  page: number
): Promise<ImageSearchResult> => {
  const response: AxiosResponse<ImageSearchResult> = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: query,
        page: page,
        per_page: 12,
      },
      headers: {
        Authorization: "Client-ID HIfkJCCOjdGgAJ4ztyY-tfg0RhoVIp9eZ5GLEDchnWw",
      },
    }
  );
  return response.data;
};
