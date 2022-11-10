import { enumType, extendType, objectType } from "nexus";

export const TemperatureUnit = enumType({
  name: 'TemperatureUnit',
  members: ['F', 'C']
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.nonNull.string('email')
    t.string('name')
    t.string('avatar')
    t.nonNull.field('temperatureSelection', {type: TemperatureUnit})
    t.list.field('preferences',{
      type: "ClothingType"
    })
    t.nonNull.list.field('items', {
      type: 'ClothingItem',
      resolve(parent, args, context){
        return context.prisma.user.findUnique({ where: { id: parent.id as string}}).items()
      }
    })

  },
})

// export const UserMutation = extendType({
//   type:'Mutation',
//   definition(t) {
//     t.nonNull.field('')
//   },
// })