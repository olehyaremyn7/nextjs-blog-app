import { PrismaClient } from '@prisma/client';
import { isProduction } from '@/utils/index';

let prisma;

if (isProduction()) {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
