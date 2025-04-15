import { NestFactory } from '@nestjs/core';
import { TaskServiceModule } from './task-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskServiceModule);
  const port = process.env.TASK_PORT || 3004;
  await app.listen(port);

  console.log(`{🚀 Subscription service is running on: http://localhost:\${port}/graphql\}`);
}
bootstrap();
