import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const paginationSorting = async () => {
  // Offset Pagination

  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 10,
  });
  //   console.log('Offset data ,', offsetData);

  // Cursor Based Pagination

  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 10,
    cursor: {
      id: 15,
    },
  });
  //   console.log("Cursor Based pagination data ,", cursorData);

  //sorting

  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
  console.log(sortedData);
};

paginationSorting();
