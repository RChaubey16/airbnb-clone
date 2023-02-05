/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rejectUnauthorized: false,
  images: {
    domains: [`links.papareact.com`],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoicnV0dXJhamNoYXViZXkiLCJhIjoiY2xkcXdiaGQzMGQzYTNxcXM1azVnNXF2cCJ9.Bw6WQ59vAnul3-EQNdsScA",
  },
};
