import { useState } from "react";

const contentful = require("contentful-management");
export const client = contentful.createClient({
  accessToken: "CFPAT-ozi2uOE9kBZV0abdPFOLAdqiFmZiQaLHSRjRwvhj7sw"
});

export const spaceId = '2qgpnp14mgvm'

export const Create = () => {

client.getSpace(spaceId)
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.createEntryWithId('score', 'bar', {
  fields: {
      jonas: {
        'en-US': 69     
      }  
  }
}))
.then((entry) => console.log(entry))
.catch(console.error)
}

export const Update = ({id, number}) => {
// Update entry

client.getSpace(spaceId)
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.getEntry(id))
.then((entry) => {
  entry.fields.jonas['en-US'] = number
  return entry.update()
})
.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
.catch(console.error)

}
export const getAllEntries = async () => {
 const space = await client.getSpace(spaceId)
const environment = await space.getEnvironment('master')
const response = await environment.getEntries()

return response.items
}