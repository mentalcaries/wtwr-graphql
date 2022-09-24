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

export const Clothing = objectType({
  name: 'Clothing',
  definition(t) {
    t.nonNull.string('name');
    t.nonNull.string('owner');
    t.nonNull.string('weather');
    t.nonNull.string('imageUrl');
    t.nonNull.field('type', { type: ClothingType });
    // need to link owner
  },
});

// get clothing items

export const ClothingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allItems', {
      type: 'Clothing',
      resolve(parent, args, context) {
        return context.prisma.items.findMany()
      }
    });
  },
});

// new item
// edit/update item
// delete item

export const ClothingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('add', {
      type: 'Clothing',
      args: {
        name: nonNull(stringArg()),
        type: nonNull(ClothingType),
        weather: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { name, type, weather, imageUrl } = args;

        const newClothingItem = {
          name,
          type,
          weather,
          imageUrl,
        };
        clothes.push(newClothingItem);
        return newClothingItem;
      },
    });
    // t.nonNull.field('edit', {
    //   type: 'Clothing',
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
