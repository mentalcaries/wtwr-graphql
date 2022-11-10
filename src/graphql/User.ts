import { enumType, objectType } from "nexus";

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
  },
})