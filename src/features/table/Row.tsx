import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Item } from "./useCheckGroup";

type CheckBoxProps = {
  onCheck: (checked: boolean, id: number) => void;
  _checked: boolean;
  id: number;
};

const CheckBox = ({ onCheck, id, _checked }: CheckBoxProps) => {
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    setIsCheck(_checked);
  }, [_checked]);

  return (
    <input
      type="checkbox"
      onChange={(e) => onCheck(e.target.checked, id)}
      checked={isCheck}
    />
  );
};

type RowProps = {
  item: Item;
  onCheck: (checked: boolean, id: number) => void;
  _checked: boolean;
};

export const Row = ({ item, onCheck, _checked }: RowProps) => {
  return (
    <StContainer>
      <StCell>
        <CheckBox onCheck={onCheck} id={item.id} _checked={_checked} />
      </StCell>
      <StCell>{item.id}</StCell>
      <StCell>{item.title}</StCell>
      <StCell>{item.author}</StCell>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 200px 300px; // 그리드 형태 정의
  height: 40px;
`;

const StCell = styled.div`
  border: 1px solid #ddd;
`;
