import { v4 as uuidv4 } from "uuid";

import { Palette } from "../const/color";
import { Icon } from "../const/icon";

export const FOOTER_ITEM = [
  {
    id: uuidv4(),
    icon: <Icon.home width={24} height={24} color={Palette.dark[50]} />,
  },
  {
    id: uuidv4(),
    icon: <Icon.heart width={24} height={24} color={Palette.dark[50]} />,
  },
  {
    id: uuidv4(),
    icon: <Icon.bag width={24} height={24} color={Palette.dark[50]} />,
  },
  {
    id: uuidv4(),
    icon: <Icon.bell width={24} height={24} color={Palette.dark[50]} />,
  },
];
