import React, {useState} from 'react';
import photo from "../../assets/product.svg";
import photo1 from "../../assets/baby.svg";
import photo2 from "../../assets/beauty.svg";
import './LeftSideImage.scss'


const data = [photo, photo1, photo2]

const LeftSideImage = () => {
    const [photoSelected, setPhotoSelected] = useState(photo)
    return (
        <div className='left-side'>
            <div className='photo'>
                <img src={photoSelected} alt='product'/>
            </div>
            <div className='small-photos-wrapper'>
                {data.map(d =>
                    <div className={`photo ${photoSelected === d && 'selected'}`} onClick={() => setPhotoSelected(d)}>
                        <img src={d} alt='product'/>
                    </div>
                )}
                <div className='more'>
                    +9 more
                </div>
            </div>
        </div>
    );
};

export default LeftSideImage;