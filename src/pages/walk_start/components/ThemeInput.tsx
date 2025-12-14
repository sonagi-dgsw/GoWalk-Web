import * as S from "../styles/styles.ts";

interface IThemeInputProps {
    value: string;
    onChange: (v: string) => void;
}

const ThemeInput = ({value, onChange}: IThemeInputProps) => {
    return (
        <S.InputBox value={value} onChange={(e) => onChange(e.target.value)} placeholder={"(ex. 카페, 공원, 한적한)"} />
    )
}

export default ThemeInput;