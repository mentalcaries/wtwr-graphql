import { enumType, extendType, nonNull, objectType, stringArg } from 'nexus';

export const ClothingType = enumType({
  name: 'ClothingType',
  members: [
    't_shirt',
    'shirt',
    'jeans',
    'skirt',
    'dress',
    'sneakers',
    'boots',
    'jacket',
    'coat',
    'sunglasses',
    'shorts',
    'sport_pants',
    'down_jacket',
    'headwear',
  ],
});

export const ClothingItem = objectType({
  name: 'ClothingItem',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.string('weather');
    t.nonNull.string('imageUrl');
    t.nonNull.field('type', { type: ClothingType });
    t.boolean('isLiked');
    t.nonNull.string('ownerId');
    t.field('owner', {
      type: "User",
      resolve(parent, args, context) {
        return context.prisma.user.findUnique({
          where: { id: parent.ownerId },
        });
      },
    });
  },
});

// get clothing items

export const ClothingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allItems', {
      type: 'ClothingItem',
      resolve(parent, args, context) {
        return context.prisma.clothingItem.findMany({});
      },
    });
  },
});


export const ClothingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createItem', {
      type: 'ClothingItem',
      args: {
        name: nonNull(stringArg()),
        type: nonNull(ClothingType),
        weather: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
        ownerId: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { name, type, weather, imageUrl, ownerId } = args;

        const newClothingItem = context.prisma.clothingItem.create({
          data: { name, type, weather, imageUrl, ownerId },
        });
        return newClothingItem;
      },
    });
    // t.nonNull.field('edit', {
    //   type: 'Clothing'Item,
    //   args: {
    //     name: nonNull(stringArg()),
    //     type: nonNull(ClothingType),
    //     weather: nonNull(stringArg()),
    //     imageUrl: nonNull(stringArg()),
    //   },
    //   resolve(parent, args, context) {},
    // });
  },
});
