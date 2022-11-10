const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

function findData() {
    prisma.$connect();
    return prisma.Notes.findMany()

}

async function createNote(data) {
    await prisma.$connect();
    await prisma.Notes.create({ data });
    return await prisma.Notes.findMany();
}

async function deleteNote(data) {
    await prisma.$connect();
    await prisma.Notes.deleteMany({
        where: {
            id: data.id
        }
    })
}

console.log(findData());