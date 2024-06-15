import earbudsBay_01 from "./assets/images/earbuds/earbuds_bay_01.png";
import earbudsBay_02 from "./assets/images/earbuds/earbuds_bay_02.png";
import earbudsBay_03 from "./assets/images/earbuds/earbuds_bay_03.png";
import earbudsBay_04 from "./assets/images/earbuds/earbuds_bay_04.png";

import earbudsPorcelain_01 from "./assets/images/earbuds/earbuds_porcelain_01.png";
import earbudsPorcelain_02 from "./assets/images/earbuds/earbuds_porcelain_02.png";
import earbudsPorcelain_03 from "./assets/images/earbuds/earbuds_porcelain_03.png";
import earbudsPorcelain_04 from "./assets/images/earbuds/earbuds_porcelain_04.png";

import earbudsCoral_01 from "./assets/images/earbuds/earbuds_coral_01.png";
import earbudsCoral_02 from "./assets/images/earbuds/earbuds_coral_02.png";
import earbudsCoral_03 from "./assets/images/earbuds/earbuds_coral_03.png";
import earbudsCoral_04 from "./assets/images/earbuds/earbuds_coral_04.png";

import earbudsCharcoal_01 from "./assets/images/earbuds/earbuds_charcoal_01.png";
import earbudsCharcoal_02 from "./assets/images/earbuds/earbuds_charcoal_02.png";
import earbudsCharcoal_03 from "./assets/images/earbuds/earbuds_charcoal_03.png";
import earbudsCharcoal_04 from "./assets/images/earbuds/earbuds_charcoal_04.png";

import earbudsFog_01 from "./assets/images/earbuds/earbuds_fog_01.png";
import earbudsFog_02 from "./assets/images/earbuds/earbuds_fog_02.png";
import earbudsFog_03 from "./assets/images/earbuds/earbuds_fog_03.png";
import earbudsFog_04 from "./assets/images/earbuds/earbuds_fog_04.png";

import earbudsLemongrass_01 from "./assets/images/earbuds/earbuds_lemongrass_01.png";
import earbudsLemongrass_02 from "./assets/images/earbuds/earbuds_lemongrass_02.png";
import earbudsLemongrass_03 from "./assets/images/earbuds/earbuds_lemongrass_03.png";
import earbudsLemongrass_04 from "./assets/images/earbuds/earbuds_lemongrass_04.png";

import midnightZen from "./assets/images/watches/smartwatch_black.png";
import lilacBless from "./assets/images/watches/smartwatch_pink.png";
import morningGlow from "./assets/images/watches/smartwatch_yellow.png";


const Products = [
  {
    id: 0,
    name: "Google Pixel Buds Pro",
    category: "Music & Sound",
    price: 229,
    variants: [
      {
        id: 0,
        color: "Bay",
        images: [earbudsBay_01, earbudsBay_02, earbudsBay_03, earbudsBay_04]
      },
      {
        id: 1,
        color: "Porcelain",
        images: [earbudsPorcelain_01, earbudsPorcelain_02, earbudsPorcelain_03, earbudsPorcelain_04]
      },
      {
        id: 2,
        color: "Coral",
        images: [earbudsCoral_01, earbudsCoral_02, earbudsCoral_03, earbudsCoral_04]
      },
      {
        id: 3,
        color: "Charcoal",
        images: [earbudsCharcoal_01, earbudsCharcoal_02, earbudsCharcoal_03, earbudsCharcoal_04]
      },
      {
        id: 4,
        color: "Fog",
        images: [earbudsFog_01, earbudsFog_02, earbudsFog_03, earbudsFog_04]
      },
      {
        id: 5,
        color: "Lemongrass",
        images: [earbudsLemongrass_01, earbudsLemongrass_02, earbudsLemongrass_03, earbudsLemongrass_04]
      },
    ]

  },
  {
    id: 1,
    name: "Fitbit Inspire 3",
    category: "Health & Fitness Tracker",
    price: 99.95,
    variants: [
      {
        id: 0,
        color: "Midnight Zen",
        images: [midnightZen]
      },
      {
        id: 1,
        color: "Lilac Bliss",
        images: [lilacBless]
      },
      {
        id: 2,
        color: "Morning Glow",
        images: [morningGlow]
      },
    ]

  }
]

export default Products 