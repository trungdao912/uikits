import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="-15 -15 550 550" {...props}>
      <path d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM179.536 43.326c-7.98 10.183-15.41 22.055-22.159 35.553-11.985 23.971-21.252 51.841-27.501 82.121H50.967c25.319-54.426 71.678-97.157 128.569-117.674zM30 256c0-22.587 3.346-44.405 9.542-65h85.246c-2.824 20.964-4.288 42.771-4.288 65s1.464 44.036 4.288 65H39.542C33.346 300.405 30 278.587 30 256zm20.967 95h78.909c6.249 30.28 15.516 58.15 27.501 82.121 6.749 13.499 14.18 25.37 22.159 35.553C122.645 448.157 76.286 405.426 50.967 351zM241 479.476c-20.728-6.917-40.83-27.851-56.79-59.771-10.058-20.115-18.02-43.373-23.677-68.705H241v128.476zM241 321h-85.942c-2.999-20.824-4.558-42.653-4.558-65s1.559-44.176 4.558-65H241v130zm0-160h-80.468c5.658-25.332 13.62-48.589 23.677-68.705C200.17 60.375 220.272 39.441 241 32.524V161zm220.033 0h-78.909c-6.249-30.28-15.516-58.15-27.501-82.121-6.749-13.499-14.18-25.37-22.159-35.553C389.355 63.843 435.714 106.574 461.033 161zM271 32.524c20.728 6.917 40.83 27.851 56.79 59.771 10.058 20.115 18.02 43.373 23.677 68.705H271V32.524zM271 191h85.942c2.999 20.824 4.558 42.653 4.558 65s-1.559 44.176-4.558 65H271V191zm0 288.476V351h80.468c-5.658 25.332-13.62 48.589-23.677 68.705-15.961 31.92-36.063 52.854-56.791 59.771zm61.464-10.802c7.98-10.183 15.41-22.055 22.159-35.553 11.985-23.971 21.252-51.841 27.501-82.121h78.909c-25.319 54.426-71.678 97.157-128.569 117.674zM387.212 321c2.824-20.964 4.288-42.771 4.288-65s-1.464-44.036-4.288-65h85.246c6.196 20.595 9.542 42.413 9.542 65 0 22.587-3.346 44.405-9.542 65h-85.246z"></path>
    </Svg>
  );
};

export default Icon;
