import InputArea from "./InputArea";

export default function InputAreas({ onChange, inputAreaData }) {
  return inputAreaData.map(
    ({ title, subtitle = "", fieldName = "", isSelect = false, optionValues = [], inputProps = {} }, i) => (
      <InputArea title={title} subtitle={subtitle} key={`input__${i}-fields`}>
        {isSelect ? (
          <select title={title} name={fieldName || title}>
            {optionValues.map((optionValue, i) => (
              <option key={`option_${i}-value_${optionValue}`}>{optionValue}</option>
            ))}
          </select>
        ) : (
          <input title={title} name={fieldName || title} onChange={onChange} {...inputProps} />
        )}
      </InputArea>
    )
  );
}
