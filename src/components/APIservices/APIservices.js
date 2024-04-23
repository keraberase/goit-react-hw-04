import axios from "axios";

export const fetchImagesWithQuery = async (query, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: query,
      page: page,
      per_page: 12
    },
    headers: {
      Authorization: 'Client-ID HIfkJCCOjdGgAJ4ztyY-tfg0RhoVIp9eZ5GLEDchnWw'
    }
  });
  return response.data;
};
