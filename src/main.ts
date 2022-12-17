import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'
import { User } from './user/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  passport.serializeUser((user: User, done) => {
    done(null, user)
  })
  passport.deserializeUser((obj: User, done) => {
    done(null, obj)
  })

  app.use(passport.initialize());
  app.use(passport.session());
  
  await app.listen(3000);
  console.log('abc-shop is running on port 3000');
}
bootstrap();
