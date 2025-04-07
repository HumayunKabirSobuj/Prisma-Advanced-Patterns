import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // Create Data
  //   const result = await prisma.post.create({
  //     data:{
  //         title :"This is title 2",
  //         content:"This is content 2",
  //         authorName:"Humayun Kabir"
  //     }
  //   });
  //   console.log(result);

  //   Get Data

  const result = await prisma.post.findMany()
  console.log(result);

};

main();
