// eslint-disable-next-line
const {PrismaClient} = require('@prisma/client');
// eslint-disable-next-line
const faker = require('faker');
const prisma = new PrismaClient();

const main = async () => {
  for (let index = 0; index <= 100; index++) {
    await prisma.user.create({
      data: {
        isAdmin: faker.random.boolean(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
      },
    });
  }
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
