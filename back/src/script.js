import { PrismaClient } from '@prisma/client'

async function main() {
    const prisma = new PrismaClient();
  
    try {
      // Criar um novo usuário
      const newUser = await prisma.user.create({
        data: {
          email: 'novousuario@gmail.com',
          senha: '123456',
          enderecoFisico: 'Algum endereço',
          tipoResidencia: 'Casa',
          cidade: 'Alguma cidade',
          estado: 'Algum estado',
          cep: '12345-678',
        },
      });
  
      console.log('Novo usuário criado:', newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  main().catch((error) => console.error(error));