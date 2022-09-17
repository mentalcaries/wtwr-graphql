import { enumType, extendType, objectType } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';

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
    t.nonNull.string('_id');
    t.nonNull.string('name');
    t.nonNull.string('weather');
    t.nonNull.string('imageUrl');
    t.nonNull.boolean('isLiked');
    t.nonNull.dateTime('createdAt');
    t.nonNull.field('type', { type: ClothingType });
    t.nonNull.string('owner');
    // need to link owner
  },
});

let clothes: NexusGenObjects['Clothing'][] = [
  {
    _id: '6325ba3b9502a6d981bad30f',
    name: 'Tshirt',
    type: 't_shirt',
    weather: 'warm',
    imageUrl:
      'https://lavogueco.com/wp-content/uploads/2022/05/17135635_hi.jpg',
    owner: '62ec4e85bb4f0997c98dfb3d',
    isLiked: false,
    createdAt: '2022-08-05T09:59:22.358Z',
    __v: 0,
  },
  {
    _id: '6325ba619502a6d981bad311',
    name: 'ST Pants',
    type: 'sport_pants',
    weather: 'warm',
    imageUrl:
      'https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/i/nicq3656-419.jpg',
    owner: '62ec4e85bb4f0997c98dfb3d',
    isLiked: false,
    createdAt: '2022-08-05T09:59:22.358Z',
    __v: 0,
  },
];

export const ClothingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('data', {
      type: 'Clothing',
      resolve(parent, args, context, info) {
        return clothes;
      },
    });
  },
});
