import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();

const relationalQueries = async () => {
  // Fluent Api
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  //   console.log(result);

  // relational filters

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
