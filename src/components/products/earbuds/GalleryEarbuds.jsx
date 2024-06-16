import EarbudsPhoto from "./EarbudsPhoto";
import earbudsBay_01_incase from "../../../assets/images/earbuds/earbuds_bay_01.png";
import earbudsBay_02_one_earbuds_from_outside from "../../../assets/images/earbuds/earbuds_bay_02.png";
import earbudsBay_03_one_earbuds_from_inside from "../../../assets/images/earbuds/earbuds_bay_03.png";
import earbudsBay_04_two_earbuds_outside_case from "../../../assets/images/earbuds/earbuds_bay_04.png";

const GalleryEarbuds = () => {
    const photos = [
        {src:earbudsBay_01_incase, alt:"Earbuds in case"
        },
        {src:earbudsBay_02_one_earbuds_from_outside, alt:"One earbuds from outside"
        },
        {src:earbudsBay_03_one_earbuds_from_inside, alt:"One earbuds from inside"
        },
        {src:earbudsBay_04_two_earbuds_outside_case, alt:"One earbuds from inside"
        },
    ];

    return (
      <section className="product">
          <div className="gallery">
              {photos.map((photo, index) => (
                  <EarbudsPhoto key={index} src={photo.src} alt={photo.alt} />
                ))}
              </div>
              <div className="gallery-container"></div>
            </section>
          );
        };
export default GalleryEarbuds;
