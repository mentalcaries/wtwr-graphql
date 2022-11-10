import {
  extendType,
  list,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from 'nexus';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', {
      type: 'User',
    });
  },
});

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
        preferences: nonNull(list(nonNull(stringArg()))),
      },
      async resolve(parents, args, context) {
        const key = process.env.APP_SECRET as string;
        const { email, name, avatar, preferences } = args;

        const password = await bcrypt.hash(args.password, 10);

        const user = await context.prisma.user.create({
          data: { email, name, password, avatar, preferences },
        });

        const token = jwt.sign({ userId: user.id }, key);

        return { user, token };
      },
    }),
      t.nonNull.field('login', {
        type: 'AuthPayload',
        args: {
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        async resolve(parent, args, context) {
          const key = process.env.APP_SECRET as string;
          const user = await context.prisma.user.findUnique({
            where: { email: args.email },
          });
          if (!user) {
            throw new Error('Invalid username or password');
          }
          const valid = await bcrypt.compare(args.password, user.password);
          const token = jwt.sign({ userId: user.id }, key);
          return { token, user };
        },
      });
  },
});
