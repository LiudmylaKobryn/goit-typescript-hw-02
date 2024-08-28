import axios from "axios";

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchImagesResponse {
  results: UnsplashImage[];
}

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 5
): Promise<UnsplashImage[]> => {
  const response = await axios.get<FetchImagesResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        hitsPerPage: perPage,
        page,
      },
      headers: {
        Authorization: "Client-ID _RVMbxFxle_btNsnmTnVfxCjqoCqelfbyHk3DugkKBM",
      },
    }
  );

  return response.data.results;
};
