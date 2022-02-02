/** @format */

import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEacg((image, index) =>
    data.append("image", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location) data.append("title", JSON.stringify(listing.title));
  data.append("price", JSON.stringify(listing.price));
  data.append("categoryId", JSON.stringify(listing.category.value));
  data.append("description", JSON.stringify(listing.description));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
