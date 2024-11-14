const home = () => {
  return {
    title: "Magic Exports",
    description:
      "Magic Exports is a leading manufacturer and exporter of home furnishing products and relief products. We are based in Panipat, Haryana, India.",
    keywords:
      "Magic Exports, Magic Exports Panipat, Magic Exports India, Magic Exports Haryana, Magic Exports home furnishing, Magic Exports relief products, Magic Exports blankets, Magic Exports mink, Magic Exports fleece, Magic Exports pouf, Magic Exports throw, Magic Exports pillow, Magic Exports comforter, Magic Exports bath mat, Magic Exports darrie, Magic Exports hand woven carpet, Magic Exports tufted carpet, Magic Exports low thermal, Magic Exports high thermal, Magic Exports multipurpose mat, Magic Exports sleeping mat, Magic Exports sports kit, Magic Exports dignity kit, Magic Exports hygiene kit, Magic Exports education kit, Magic Exports bags",
    canonical: "https://magicexports.in/",
    og_url: "https://magicexports.in/",
    og_title: "Magic Exports",
    og_description:
      "Magic Exports is a leading manufacturer and exporter of home furnishing products and relief products. We are based in Panipat, Haryana, India.",
    og_image: "https://magicexports.in/images/magicexport-logo.jpeg",
    og_image_alt: "Magic Exports",
    og_image_width: "360",
    og_image_height: "360",
    og_type: "website",
    og_locale: "en_US",
    og_site_name: "Magic Exports",
    robots: "index, follow",
  };
};

const productView = (data) => {
  return {
    ...data,
    title: `Magic Exports | ${data.productName}`,
    description: data.productDescription,
    keywords:
      "Magic Exports, Magic Exports Panipat, Magic Exports India, Magic Exports Haryana, Magic Exports home furnishing, Magic Exports relief products, Magic Exports blankets, Magic Exports mink, Magic Exports fleece, Magic Exports pouf, Magic Exports throw, Magic Exports pillow, Magic Exports comforter, Magic Exports bath mat, Magic Exports darrie, Magic Exports hand woven carpet, Magic Exports tufted carpet, Magic Exports low thermal, Magic Exports high thermal, Magic Exports multipurpose mat, Magic Exports sleeping mat, Magic Exports sports kit, Magic Exports dignity kit, Magic Exports hygiene kit, Magic Exports education kit, Magic Exports bags",
  };
};

module.exports = {
  home,
  productView,
};
