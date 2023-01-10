interface Data {
  title: string;
  enum: ALGO;
}

enum ALGO {
  HEAP_SORT,
  QUICK_SORT,
  INSERT_SORT,
}

const data: Data[] = [
  { title: "Heap sort", enum: ALGO.HEAP_SORT },
  { title: "Quick sort", enum: ALGO.QUICK_SORT },
  { title: "Insert sort", enum: ALGO.INSERT_SORT },
];

export default data;
