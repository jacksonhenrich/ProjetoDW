import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = {
    users: [
        {
            email: 'novousuario@gmail.com',
            senha: '123456',
            enderecoFisico: 'Algum endereço',
            tipoResidencia: 'Casa',
            cidade: 'Alguma cidade',
            estado: 'Algum estado',
            cep: '12345-678',
        },
        {
            email: 'tiopatinhas@gmail.com',
            senha: 'DoNaldeHPobre',
            enderecoFisico: 'Disney',
            tipoResidencia: 'Mansão',
            cidade: 'Patópolis',
            estado: 'WD',
            cep: '99999-999',
        },
    ],
};

async function main() {
    for (const user of seed.users) {
        await prisma.user.create({ data: user });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });