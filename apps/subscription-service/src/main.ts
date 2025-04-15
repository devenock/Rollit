import { NestFactory } from '@nestjs/core';
import { SubscriptionServiceModule } from './subscription-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionServiceModule);
  const port = process.env.SUBSCRIPTION_PORT || 3003;
  await app.listen(port);
  console.log(`{🚀 Subscription service is running on: http://localhost:\${port}/graphql\}`);
}
bootstrap();
