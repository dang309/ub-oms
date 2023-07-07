import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const categories = [...Array(3)].map((_, index) => ({
  id: index + 1,
  name: sample(["Me va be", "May anh va phu kien", "Dien thoai", "Do dung van phong"]),
  desc: faker.lorem.lines(),
}));

export default categories;
