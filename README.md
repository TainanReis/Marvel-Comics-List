# Marvel-Comics-List
A small project using `Ionic (Angular + Typescript) + Javascript`.
This app gets a list of Marvel comics using their API and show them to the user. The user can see more information about the items and add them to a collection. This collection will be stored in the Cloud. In order to open the app, a login is required. For simplicity sake, at this moment, it's using the MockAPI to get the user data.

## How to test it?
- After downloading this project and it's dependencies, run `ionic serve`
- You can also test it on mobile devices using *Ionic DevApp*
- To Login, use this data:
  - `email@email.com`
  - `password1`

The object parsed by the API is:
```
{
"id": "1",
"name": "John Doe",
"email": "email@email.com",
"password": "password1"
}
```
# Objectives
- [x] Login/Logout
- [X] Get data from marvel API and show it
- [X] Implement pagination
- [ ] Implement item search
- [ ] Add/remove items to/from a personal collection
- [ ] Show the personal collection
- [ ] Implement user registation
- [ ] Store the user collection in the Cloud
- [ ] Learn more about Ionic and make a design that pops!

# Observation
It's the first time I'm using this framework. It's also the first time I'm developing using the Angular Framework and Typescript.
There's a lot to know about both. In order to have some work to show, I added `"allowJs": true,` to *tsconfig.json* so I could use javascript code.

So far, **I learned a lot about Angular Framework and how the routing and dependencies work**. I also learned how useful is the Ionic Framework. Both, together, make the developing life much easier!
