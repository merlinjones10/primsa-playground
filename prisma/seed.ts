// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@test' },
    update: {},
    create: {
      name: 'user1',
      email: 'user1@test',
      password: 'user1',
      id: 1,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'user2@test' },
    update: {},
    create: {
      name: 'user2',
      email: 'user2@test',
      password: 'user2',
      id: 2,
    },
  });
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      id: 100,
      title: 'Prisma Adds Support for MongoDB',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      published: false,
      authorId: 1,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      id: 101,
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      authorId: 2,
    },
  });
  const post3 = await prisma.article.upsert({
    where: { title: "What's" },
    update: {},
    create: {
      id: 102,
      title: "What's",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      authorId: 2,
    },
  });

  /* ------------------------------------------------------ */
  const instrument1 = await prisma.instrument.upsert({
    where: { name: 'Guitar' },
    update: {},
    create: {
      name: 'Guitar',
      description: 'A shitty guitar',
      type: 'string',
      value: 125.5,
      ownerId: 1,
    },
  });
  const instrument2 = await prisma.instrument.upsert({
    where: { name: 'Drum' },
    update: {},
    create: {
      name: 'Drum',
      description: 'A shitty Drum',
      type: 'Percussion',
      value: 50.5,
      ownerId: 1,
    },
  });
  const instrument3 = await prisma.instrument.upsert({
    where: { name: 'Bassoon' },
    update: {},
    create: {
      name: 'Bassoon',
      description: 'A shitty bassoon',
      type: 'Woodwind',
      value: 670.99,
      ownerId: 1,
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

//   The upsert function will only create a new article if no article matches the where condition. You are using an upsert query instead of a create query because upsert removes errors related to accidentally trying to insert the same record twice.
// npx prisma db seed
