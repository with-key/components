import { useState } from "react";

export type Item = { id: number; title: string; author: string };

const useCheckGroup = () => {
  const [checkedSet, setCheckedSet] = useState(new Set());

  const addToSet = (id: Item["id"]) =>
    setCheckedSet((prev) => {
      const set = new Set(prev);
      set.add(id);
      return set;
    });

  const deleteToSet = (id: Item["id"]) =>
    setCheckedSet((prev) => {
      const set = new Set(prev);
      set.delete(id);
      return set;
    });

  const clearSet = () => {
    setCheckedSet(new Set());
  };

  const replaceSet = (id: Array<Item["id"]>) => {
    setCheckedSet(new Set(id));
  };

  return {
    checkedSet,
    addToSet,
    deleteToSet,
    clearSet,
    replaceSet,
  };
};

export default useCheckGroup;
