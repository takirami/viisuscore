const contentful = require("contentful-management");
const client = contentful.createClient({
  accessToken: "CFPAT-ozi2uOE9kBZV0abdPFOLAdqiFmZiQaLHSRjRwvhj7sw"
});

const spaceId = '2qgpnp14mgvm'

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

export const Update = () => {
// Update entry
client.getSpace(spaceId)
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.getEntry('foo'))
.then((entry) => {
  entry.fields.jonas['en-US'] = 420
  return entry.update()
})
.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
.catch(console.error)

}
export const getAllEntries = () => {

client.getSpace(spaceId)
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.getEntries())
.then((response) => console.log(response.items))
.catch(console.error)  
}