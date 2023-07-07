import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const brands = [...Array(4)].map((_, index) => ({
  id: index + 1,
  name: sample(["Adidas", "Nike", "Apple", "Samsung"]),
  desc: faker.lorem.lines(),
}));

export default brands;
