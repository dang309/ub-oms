import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const suppliers = [...Array(24)].map((_, index) => ({
  id: index + 1,
  name: faker.company.name(),
  phone: faker.phone.number("0### ### ###"),
  email: faker.internet.email(),
  status: sample(["active", "inactive"]),
  liability: faker.commerce.price({ min: 1000000, max: 20000000 }),
  total: faker.commerce.price({ min: 1000000, max: 20000000 }),
}));

export default suppliers;
