import React, { useEffect, useState, memo, Fragment } from "react";
import styled from "styled-components";

export type SelectOptions = {
  label: string;
  value: string | number;
};

// multiple 의 값에 따라 value의 타입이 정해진다.
type SingleSelect = {
  multiple: false;
  value: SelectOptions | undefined;
  onChange: (value: SelectOptions | undefined) => void;
};

type MultiSelect = {
  multiple: true;
  value: SelectOptions[];
  onChange: (value: SelectOptions[]) => void;
};

// multiple 의 값에 따라 value의 타입이 정해진다.
type Props = {
  options: SelectOptions[];
} & (SingleSelect | MultiSelect);

const Select = ({ options, value, onChange, multiple }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // multiple 의 값에 따라 value의 타입이 정해진다.
  function selectOption(option: SelectOptions) {
    if (multiple) {
      if (value.includes(option)) {
        // 같은 것을 선택하면 제거 한다.
        onChange(value.filter((o) => o.label !== option.label));
      } else {
        onChange([...value, option]);
      }
    }

    if (!multiple) {
      console.log(option);
      onChange(option);
    }
  }

  // 항목 클리어
  function clearOption() {
    multiple ? onChange([]) : onChange(undefined);
  }

  // 선택되어있는 것을 판별
  function isOptionSelected(option: SelectOptions) {
    return multiple ? value.includes(option) : option === value;
  }

  return (
    <Container
      onBlur={(e) => {
        setIsOpen(false);
      }}
      tabIndex={0} // 탭으로 요소를 탐색할 때 순서를 지정
      onClick={(e) => setIsOpen((pre) => !pre)}
    >
      <StValue>
        {multiple
          ? value.map((o) => <StItem key={o.value}>{o.label}</StItem>)
          : value?.label}
      </StValue>
      <StDivider />
      <StDelbutton
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation();
          clearOption();
        }}
      >
        &times;
      </StDelbutton>
      <StOptions isOpen={isOpen}>
        {options.map((option, index) => (
          <StOption
            isSelected={isOptionSelected(option)}
            key={option.value}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </StOption>
        ))}
      </StOptions>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
  width: 300px;
  min-height: 40px;
  border: 0.05em solid #ddd;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;
  margin: 10px;

  &:focus {
    border: 0.05em solid #777;
  }
`;

const StValue = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

const StOptions = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;
`;

const StOption = styled.li<{ isSelected: boolean }>`
  padding: 0.25em 0.5em;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected && `#eee`};

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const StDelbutton = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  &:hover {
    color: #333;
  }
`;

const StDivider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;

const StItem = styled.div``;
