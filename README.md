# Giphy-Gopher

Enjoy!
## To Run

1. Clone repository
2. from project root, run: `make prepare` - install dependencies
3. from project root, run: `make dev` - to run the dev server
4. in the running vite dev server, type `o` to open the app in your browser or navigate to http://127.0.0.1:5173/

---

## Some Notes on Tradeoffs
Just to address some questions someone coming into this repo might have

---

### Why Giphy API vs Giphy SDK?

So there is a Giphy web SDK that basically has all the components ready to go, and I have a branch in this repo where I spent a minute with it just to play. 

**Pros**: literally up and running in 5 minutes with a basic search/grid display.

**Cons**: it's pretty black-box, so if you want to do anything that's outside of the workflow they envision, especially as pertains to the use of the `SearchContext` plumbing, it's gonna be work. Similar with styling, yeah, you could override it, but I decided to treat this more like I was just integrating Giphy into an existing project that might have its own Design System etc.

Also at some point the grid just straight up stopped working with no error output and no obvious way to debug so that's gonna be a dealbreaker 9/10 times.

Plus it would have felt bad to just put three of their components on a page and call it a day.

### Okay, then why react-masonry-css?

I cannot imagine a world where I spend my time recreating the wheel on a well-established UI pattern. There's a masonry grid with easy to use responsive controls and easy extendable styling? Sign me up.

### Why vite?

Mostly I wanted to try it out. Usually if I'm spinning up a new SPA-style React app I'll use `create-react-app` but vite is __fast__ and way less bulky.

**Downsides** - I'd prefer to build in a Storybook usually in a real application, and newest vite stuff (and npm) and Storybook don't seem to play well right now, which I'm sure I could have overcome in a real application but for this - time not well spent.

Other downsides? Nothing that I can see in this limited use so vite is going in my toolbox.

Could I have just gone straight to esbuild or rollup or something? Sure, but I'm real big on developer experience and vite is just so nice. When there's no real upside to using something else, use the thing that's nice.

### Why not something like Next.js?

I could have but there's truly no need to have a server component for this. I thought about it for doing some user-storage stuff, and maybe if I'd had another day I'd gold-plate some features that would justify having a server, but I didn't.

### Do you know that your Giphy API key isn't secure?

Yes.

The tradeoff here for time was to abstract it away into an environment variable utilizing `.env`, but I checked the .env into the repo because I didn't want to make you go get your own key or do anything that would make this hard to run out of the box.

>>**TIL** if you have something in your global `.gitignore`, such as `.env`, you can unignore in a local `.gitignore` by adding `!` in front of the file name. Which seems like basic info but in over a decade of using git I guess I've never had to do that because it's kinda weird if you think about it.

And yes, even if the `.env` file wasn't in the repo, the key is still available to anyone who knows how to use the network tab in their browser's dev tools.

I could have (see above) set up a server to handle a request and hide the key in there, or split the difference and do it in a serverless function, but that seemed like a lot of overhead to ask of you and me for this demo. 

AND even then, I would at least *consider* still exposing the key client-side rather than incurring a double-http-request to get the gifs. Because it's just getting gifs.
