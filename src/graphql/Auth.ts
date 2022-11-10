import { extendType, list, nonNull, nullable, objectType, stringArg } from 'nexus';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const { APP_SECRET } = process.env;

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', {
      type: 'User',
    });
  },
});

// email, password, name, avatar, preferences

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('signup', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        name: nonNull(stringArg()),
        avatar: nonNull(stringArg()),
        preferences: nonNull(list((stringArg()))),
      },
      async resolve(parents, args, context) {
        const { email, name, avatar, preferences } = args;

        const password = await bcrypt.hash(args.password, 10);

        const user = await context.prisma.user.create({
          data: { email, name, password, avatar, preferences },
        });

        const token = jwt.sign({ userId: user.id }, APP_SECRET as string);

        return { user, token };
      },
    });
  },
});
