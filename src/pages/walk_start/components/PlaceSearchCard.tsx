import React, { useState, type ChangeEvent, type KeyboardEvent } from "react";
import {
    PlaceInput,
    SearchResultContainer,
    SearchResultItem,
    ResultTextContainer,
    MainResultText,
    SubResultText,
    SelectButton,
} from "../styles/styles";

type PlaceSearchCardProps = {
    onSearch?: (placeName: string) => void;
};


// 가상 검색 결과 데이터
const dummySearchResults = [
    { main: "대구소프트웨어...", sub: "특목고등학교", selected: false },
    { main: "대구소프트웨어...", sub: "특목고등학교", selected: false },
];

const PlaceSearchCard = ({ onSearch }: PlaceSearchCardProps) => {
    const [place, setPlace] = useState("대구소프트웨어마이스터고");
    const [results, setResults] = useState(dummySearchResults);
    const [hasSelection, setHasSelection] = useState(false);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setResults(dummySearchResults);
        }
    };

    const handleSelection = (index: number) => {
        const updatedResults = results.map((item, i) => ({
            ...item,
            selected: i === index ? !item.selected : false
        }));

        const newSelectionState = updatedResults.some(item => item.selected);

        setResults(updatedResults);
        setHasSelection(newSelectionState);

        if (newSelectionState) {
            const selected = updatedResults[index];
            onSearch?.(selected.main + selected.sub);
        }
    };

    return (
        <div>
            <PlaceInput
                type="text"
                value={place}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPlace(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="장소를 검색해보세요"
            />

            <SearchResultContainer>

                {results.map((item, index) => (
                    <SearchResultItem key={index} onClick={() => handleSelection(index)}>
                        <ResultTextContainer>
                            <MainResultText>{item.main}</MainResultText>
                            <SubResultText>{item.sub}</SubResultText>
                        </ResultTextContainer>
                        <SelectButton
                            onClick={(e) => { e.stopPropagation(); handleSelection(index); }}
                            style={{
                                backgroundColor: item.selected ? '#5AAAEF' : '#E8E8E8',
                                color: item.selected ? 'white' : '#666'
                            }}
                        >
                            선택
                        </SelectButton>
                    </SearchResultItem>
                ))}
            </SearchResultContainer>
        </div>
    );
};

export default PlaceSearchCard;