import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updates = async () => {
  // Single Update
  // const result = await prisma.post.update({
  //   where: {
  //     id: 4,
  //   },
  //   data: {
  //     title: "title 4",
  //     content: "content 4",
  //     authorName: "author 4",
  //   },
  // });

  // console.log(result);

  // Multiple Update

  // const updateMany = await prisma.post.updateMany({
  //   where:{
  //     title:'Title 2'
  //   },
  //   data:{
  //     published:true
  //   }
  // })

  // console.log(updateMany);

  // Upsert

  const upsertData = await prisma.post.upsert({
    where: { id: 6 },
    update: {
      title:"title updated"
    },
    create: {
      title: "update 1",
      content: "update content 1",
    },
  });
  console.log(upsertData);
};

updates();
