import { NestFactory } from '@nestjs/core';
import { AnalyticsServiceModule } from './analytics-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AnalyticsServiceModule);
  const port = process.env.ANALYTICS_PORT || 3002;
  await app.listen(port);
  console.log(`{🚀 Analytics service is running on: http://localhost:\${port}/graphql\}`);
}
bootstrap();
