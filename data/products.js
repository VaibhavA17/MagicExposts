const { MagicExportConstants } = require("../constants/constants");

const minkBlanketsImages = [];
for (let i = 1; i < 6; i++) {
  minkBlanketsImages.push({
    id: i,
    alt: "mink-blankets",
    url: `../img${MagicExportConstants.webRoutes.minkBlankets}/${i}.png`,
  });
}
const fleeceBlanketsImages = [];
for (let i = 1; i < 6; i++) {
  fleeceBlanketsImages.push({
    id: i,
    alt: "fleece-blankets",
    url: `../img${MagicExportConstants.webRoutes.fleeceBlankets}/${i}.jpg`,
  });
}
const poufsNOttomansImages = [];
for (let i = 1; i < 6; i++) {
  poufsNOttomansImages.push({
    id: i,
    alt: "poufs-n-ottomans",
    url: `../img${MagicExportConstants.webRoutes.poufsNOttomans}/${i}.png`,
  });
}
const comfortersNQuiltsImages = [];
for (let i = 1; i < 6; i++) {
  comfortersNQuiltsImages.push({
    id: i,
    alt: "comforters-n-quilts",
    url: `../img${MagicExportConstants.webRoutes.comfortersNQuilts}/${i}.jpg`,
  });
}
const cushionsNPillowsImages = [];
for (let i = 1; i < 6; i++) {
  cushionsNPillowsImages.push({
    id: i,
    alt: "cushions-n-pillows",
    url: `../img${MagicExportConstants.webRoutes.cushionsNPillows}/${i}.png`,
  });
}
const cottonThermalBlanketsImages = [];
for (let i = 1; i < 6; i++) {
  comfortersNQuiltsImages.push({
    id: i,
    alt: "cotton-thermal-blankets",
    url: `../img${MagicExportConstants.webRoutes.cottonThermalBlankets}/${i}.png`,
  });
}
const bathMatsImages = [];
for (let i = 1; i < 6; i++) {
  bathMatsImages.push({
    id: i,
    alt: "bath-mats",
    url: `../img${MagicExportConstants.webRoutes.bathMats}/${i}.png`,
  });
}

const homeproducts = [
  {
    productLink: MagicExportConstants.webRoutes.minkBlankets,
    productName: "Mink Blankets",
    productCategory: "Home Furnishing",
    productDescription:
      "The bed blanket has a tight weaving structure of 3 layers: soft flannel surface, warm polyester filling, and Sherpa reverse. The Magic blanket is thick and warm for autumn and winter. The fluffy blanket can quickly heat up and hold more air to keep warm, time goes by, the warmth continues, you will have a good sleep.",
    productImages: minkBlanketsImages,
  },
  {
    productLink: MagicExportConstants.webRoutes.fleeceBlankets,
    productName: "Fleece Blankets",
    productCategory: "Home Furnishing",
    productDescription:
      "These super-soft fleece blankets are made from polyester fibers to ensure superior quality and long-lasting durability. It won’t shed, fade or lose softness wash after wash, year after year.Our ribbed design blankets are both warming and breathable. They will warm you up in winter and chilly summer nights. Hence, they are perfect for year-round comfort.",
    productImages: fleeceBlanketsImages,
  },
  {
    productLink: MagicExportConstants.webRoutes.poufsNOttomans,
    productName: "Poufs / Ottomans",
    productCategory: "Home Furnishing",
    productDescription:
      "If you are looking for innovative seating options, our large range of poufs is some of the best options. The braided poufs have the best texture to them. The combination of multiple yarns or fabrics leads to a unique texture to the poufs. The Knitted poufs are among the most subtle and classy poufs. They are made using interwoven yarn which acts as a design in itself. For people looking for some intricate woolen work, our woven poufs are the best choice. They are made from wool and have embroidery done on it. Our poufs are available in various designs. The jacquard poufs have some of the most intricate designs and patterns are done on them as the jacquard looms are used to make these. This allows for a lot of control over the design during the manufacturing process which leads to complicated designs.",
    productImages: poufsNOttomansImages,
  },
  {
    productLink: MagicExportConstants.webRoutes.comfortersNQuilts,
    productName: "Comforters / Quilts",
    productCategory: "Home Furnishing",
    productDescription:
      "If you are looking for innovative seating options, our large range of poufs is some of the best options. The braided poufs have the best texture to them. The combination of multiple yarns or fabrics leads to a unique texture to the poufs. The Knitted poufs are among the most subtle and classy poufs. They are made using interwoven yarn which acts as a design in itself. For people looking for some intricate woolen work, our woven poufs are the best choice. They are made from wool and have embroidery done on it. Our poufs are available in various designs. The jacquard poufs have some of the most intricate designs and patterns are done on them as the jacquard looms are used to make these. This allows for a lot of control over the design during the manufacturing process which leads to complicated designs.",
    productImages: comfortersNQuiltsImages,
  },
  {
    productLink: MagicExportConstants.webRoutes.cushionsNPillows,
    productName: "Cushions / Pillows",
    productCategory: "Home Furnishing",
    productDescription:
      "Magic Exports make some of the best cushions that are available in the Indian market. We emphasize the cushions deliver on the style quotient without compromising on the comfort…because no matter how stylish a cushion may seem, it is useless if it cannot perform its main function i.e. delivering comfort for the body to rest on. Our range of woven cushions are some of the softest and finest ones. They are generally woolen but can be made in other types of fabrics as well. One of the most unique ranges of cushions is our macramé cushions. The main attraction of macramé cushions is that they are not woven together but are knotted together. This process of knotting and not weaving gives the cushions a unique design and makes them stand out from all the others. If you are a fan of textured cushions, the braided cushions are the ones you will like. The braiding process which involves intertwining two or more fabric gives it a textured look and feel. To add a dash of color to your interior you should try our printed cushions.",
    productImages: cushionsNPillowsImages,
  },
  {
    productLink: MagicExportConstants.webRoutes.cottonThermalBlankets,
    productName: "Cotton Thermal Blankets / SnagFree Blankets",
    productCategory: "Home Furnishing",
    productDescription:
      "The bed blanket has a tight weaving structure of 3 layers: soft flannel surface, warm polyester filling, and Sherpa reverse. The Magic blanket is thick and warm for autumn and winter. The fluffy blanket can quickly heat up and hold more air to keep warm, time goes by, the warmth continues, you will have a good sleep.",
    productImages: cottonThermalBlanketsImages,
  },
  {
    productLink: MagicExportConstants.webRoutes.bathMats,
    productName: "Bath Mats",
    productCategory: "Home Furnishing",
    productDescription:
      "The bed blanket has a tight weaving structure of 3 layers: soft flannel surface, warm polyester filling, and Sherpa reverse. The Magic blanket is thick and warm for autumn and winter. The fluffy blanket can quickly heat up and hold more air to keep warm, time goes by, the warmth continues, you will have a good sleep.",
    productImages: bathMatsImages,
  },
];

module.exports = {
  homeproducts,
};
