import React from "react";

import { 
    CourseCard, 
    LabelRow, 
    LabelLeft, 
    LabelRight, 
    CategoryText, 
    ImageThumb 
} from "../styles/styles";

interface HotPlaceProps {
    imgUrl: string; 
    name: string;
    category: string;
    distance: string;
}


const HotPlace = ({ imgUrl, name, category, distance }: HotPlaceProps) => {
    return (
        <CourseCard> 
            {/* MapThumb 대신 ImageThumb 사용 */}
            <ImageThumb $imgUrl={imgUrl} />
            
            <LabelRow>
                <LabelLeft>{name}</LabelLeft> 
                <LabelRight>{distance}</LabelRight> 
            </LabelRow>

            <CategoryText>{category}</CategoryText>

        </CourseCard>
    );
};

export default HotPlace;
