import { faker, fakerTR } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const customers = [...Array(100)].map((_, index) => ({
  id: index + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number('0### ### ###'),
  spent: faker.commerce.price({ min: 100000, max: 10000000 }),
}));

export default customers;
