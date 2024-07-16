import styled from "@emotion/styled/macro";

const Input = ({
  value,
  ref,
  onChange,
  name,
  placeholder,
  type,
  isCount = true,
  max = 20,
}) => {
  let valueCnt = value.length;

  return (
    <InputWrapper>
      <InputBox
        name={name}
        onChange={onChange}
        value={value}
        ref={ref}
        placeholder={placeholder}
        type={type}
      />
      {isCount && (
        <p>
          {valueCnt}/{max}
        </p>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
`;

const InputBox = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 36px;
  background: ${(props) => props.theme.colors.grayscale.gray_200};
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  border-radius: 12px;
  ::placeholder {
    color: ${(props) => props.theme.colors.grayscale.gray_500};
  }
`;

export default Input;
