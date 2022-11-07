import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../../features/table/data.model";
import { Row } from "../../features/table/Row";
import useCheckGroup from "../../features/table/useCheckGroup";

const Table = () => {
  const [allCheck, setAllCheck] = useState(false);
  const { checkedSet, addToSet, deleteToSet, clearSet, replaceSet } =
    useCheckGroup();

  useEffect(() => {
    if (data.length === checkedSet.size) setAllCheck(true);
    else setAllCheck(false);
  }, [checkedSet.size]);

  // Row에서 체크박스 체크 시
  const onclickCheckBox = (checked: boolean, id: number) => {
    if (checked) {
      addToSet(id);
    } else {
      deleteToSet(id);
    }
  };

  // 헤더의 체크 박스 체크 핸들러
  const onClickHeaderCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAllCheck(checked);
    if (checked) {
      const ids = data.map((item) => item.id);
      replaceSet(ids);
    } else {
      clearSet();
    }
  };

  return (
    <>
      <StTableHeader>
        <StCell>
          <input
            type="checkbox"
            checked={allCheck}
            onChange={onClickHeaderCheckBox}
          />
        </StCell>
        <StCell>아이디</StCell>
        <StCell>제목</StCell>
        <StCell>작성자</StCell>
      </StTableHeader>
      <div>
        {data.map((item) => {
          return (
            <Row
              item={item}
              onCheck={onclickCheckBox}
              key={item.id}
              _checked={checkedSet.has(item.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Table;

const StTableHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 200px 300px; // 그리드 형태 정의
  height: 40px;
`;

const StCell = styled.div`
  border: 1px solid #ddd;
`;

/**
 * repeat() : 횟수, 반복할 치수
 * minmax() -> 최솟값과 최댓값을 설정 가능
 * auto-fill과 auto-fit은 column의 개수를 미리 정하지 않고
 * 설정된 너비가 허용하는 한 최대한 셀을 채웁니다.
 * auto-fit -> 갯수를 알지 못할때
 * auto-fill
 */
