import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();

const create = async () => {
  //   console.log('Create...');
  // Create User
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email: "user2@gamil.com",
  //       role: UserRole.user,
  //     },
  //   });
  //   console.log(createUser);
  // Create Profile Info
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       userId: 1,
  //       bio: "this is bio...",
  //     },
  //   });
  //   console.log(createProfile);
  //   Create Category
  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "programming",
  //     },
  //   });
  //   console.log(createCategory);

  //create post

  const createPost = await prisma.post.create({
    data: {
      title: "this is title 5",
      content: "this is content of the post 5",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

create();
