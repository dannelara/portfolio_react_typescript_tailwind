import React, { useEffect, useState } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

// import { heap_sort, insert_sort, quick_sort } from "@utils/algorithms";
import { hello } from "@utils/test";
import { Bar } from "./bar/Bar";

const PRIMARY_COLOR = "white";
const SECONDARY_COLOR = "blue";

interface Data {
  title: string;
  enum: ALGO;
}

enum ALGO {
  HEAP_SORT,
  QUICK_SORT,
  INSERT_SORT,
}

interface BarProps {
  height: number;
  bg_color: string;
}

interface AlgoViewProps {
  cnt: number;
  algoData: Data[];
}

export const AlgoView: React.FC<AlgoViewProps> = ({ cnt, algoData }) => {
  console.log(hello);
  const [active, setActive] = useState(false);

  const [values, setValues] = useState<BarProps[]>([]);
  const [algo, setAlgo] = useState(0);

  const setUp = () => {
    setValues((old) => (old = []));

    for (let i = 0; i < cnt; i++) {
      const val = Math.floor(Math.random() * 350) + 1;
      setValues((old) => [
        ...old,
        {
          height: val,
          bg_color: PRIMARY_COLOR,
        },
      ]);
    }
  };

  const reset = () => {
    if (!active) {
      setUp();
    }
  };

  const start = async () => {
    if (!active) {
      // FIX THIS!!!
      setActive((prev) => (prev = true));

      // Get bars from document.
      const arrayBars = Array.from(
        document.getElementsByClassName(
          "array-bar"
        ) as HTMLCollectionOf<HTMLElement>
      );

      // switch (algo) {
      //   case 0:
      //     await heap_sort(arrayBars, 30, PRIMARY_COLOR, SECONDARY_COLOR);
      //     break;
      //   case 1:
      //     await quick_sort(arrayBars, 30, PRIMARY_COLOR, SECONDARY_COLOR);
      //     break;
      //   case 2:
      //     await insert_sort(arrayBars, 30, PRIMARY_COLOR, SECONDARY_COLOR);
      //     break;
      //     break;
      //   default:
      //     break;
      // }

      setActive((prev) => (prev = false));
    }
  };

  const onAlgoChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (!active) {
      Array.from(
        document.getElementsByClassName(
          "p-controll"
        ) as HTMLCollectionOf<HTMLElement>
      ).forEach((span) => {
        span.style.backgroundColor = "transparent";
        span.style.color = "black";
      });
      e.currentTarget.style.color = "blue";
      setAlgo(parseInt(e.currentTarget.id));
    }
  };

  useEffect(() => {
    setUp();
  }, []);

  return (
    <div className="h-auto w-full flex items-center justify-center flex-wrap gap-4">
      <div className="w-full h-auto flex items-center justify-center gap-3 text-white">
        {algoData.map((algo, k) => (
          <button className="algo_button" key={k}>
            <p
              id={`${algo.enum}`}
              className="text-black p-controll h-full w-full flex items-center justify-center play_font"
              onClick={onAlgoChange}
            >
              {algo.title}
            </p>
          </button>
        ))}
      </div>

      <div className="h-full w-full flex justify-center items-center">
        <div className="h-auto w-full flex gap-1 justify-center items-end">
          {values.map((val, k) => {
            return <Bar height={val.height} bg_color={val.bg_color} key={k} />;
          })}
        </div>
      </div>

      <div className="w-full h-auto flex items-center justify-center gap-3 text-white">
        <div className="hover:cursor-pointer text-center">
          <button className="algo_button">
            <p
              className="text-black p-controll h-full w-full flex items-center justify-center play_font"
              onClick={start}
            >
              Start
            </p>
          </button>
        </div>
        {/* <div className="hover:cursor-pointer text-center">
          <button className="algo_button">
            <p className="text-black p-controll h-full w-full flex items-center justify-center play_font">
              Code
            </p>
          </button>
        </div> */}
        <div className="algo_button">
          <MdOutlineRestartAlt
            onClick={reset}
            style={{
              transition: "1s",
              color: "black",
              fontSize: "30px",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
