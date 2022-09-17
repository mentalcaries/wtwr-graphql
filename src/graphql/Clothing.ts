import { enumType, extendType, objectType } from 'nexus';

export const ClothingType = enumType({
  name: 'ClothingType',
  members: ['t_shirt', 'shirt', 'jeans', 'skirt', 'dress', 'sneakers', 'boots', 'jacket', 'coat', 'sunglasses', 'shorts', 'sport_pants', 'down_jacket', 'headwear']
})

export const Clothing = objectType({
  name: 'Clothing',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.nonNull.string('weather');
    t.nonNull.string('imageUrl');
    t.nonNull.boolean('isLiked');
    t.nonNull.dateTime('createdAt');
    t.nonNull.field('type', { type: ClothingType });
    t.nonNull.string('owner')
    // need to link owner
  },
});

export const ClothingQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("data", {
      type: "Clothing",
      resolve(parent, args, context, info) {
        return 'all clothes'
      }
    })
  },
})