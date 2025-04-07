import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const filtering = async () => {
  // AND filtering
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(andFiltering);

  // OR filtering
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(orFiltering);

  // OR filtering
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });
  //   console.log(notFiltering);

  // starts with

  const startsWith = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "that",
      },
    },
  });
  //   console.log(startsWith);

  // ends with

  const endsWith = await prisma.post.findMany({
    where: {
      title: {
        endsWith: "post",
      },
    },
  });
  //   console.log(endsWith);

  // equals

  const equals = await prisma.post.findMany({
    where: {
      title: {
        equals: "that is sub post",
      },
    },
  });
  //   console.log(equals);

  const userNameArray = ["user1", "user2", "user3"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  //   console.log(userNamesByArray);

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};

filtering();
