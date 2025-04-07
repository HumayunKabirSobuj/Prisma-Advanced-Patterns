import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const aggregates = async () => {
  // Find avarage age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  //   console.log(avgAge);

  //Find sum of age

  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  //   console.log(sumAge);

  //Find Count of age fields
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  //   console.log(countAge);

  //Find number of records

  const countData = await prisma.user.count();
  //   console.log(countData);

  //Find max age

  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  //   console.log(maxAge);

  //Find min age

  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};

aggregates();
