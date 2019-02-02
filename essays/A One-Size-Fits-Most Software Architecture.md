
# A One-Size-Fits-Most Software Architecture

Here's a few ways to say the same thing.

```
    ·---→ action ---·
    |               |
    |               ↓
interface         state
    ↑               |
    |               |
    ·---- query ←---·
```

```
    ·--→ controller ---·
    |                  |
    |                  ↓
  view               model
    ↑                  |
    |                  |
    ·----- view ←------·
```

```
    ·-→ insert/update ---·
    |                    |
    |                    ↓
 client               database
    ↑                    |
    |                    |
    ·------ read ←-------·
```


## Step 1: Feel it Out

_Always_ start with the interface! Not just mockups, but actually build the entire front-end first. Whether it's a CLI or web-app, you can construct it such that it gets "fake" information from the server, or fakes the request completely in the client. Either way, this is the place to start. Every button and command should be a dud, but it should be there before you even _consider_ touching the fun stuff!
90% of changes to the back-end are "Oh, the user can't do this? The entire system needs to be redesigned." User-flow errors are seriously the most costly errors to make, so make sure that every button is fakeable before you touch the server.

## Step 2: Persistent State is Sacred

Your schema/model/database must make [impossible states impossible](https://www.youtube.com/watch?v=IcgmSRJHu_8).

Don't worry about efficiency! Worry about the sanctity of your data. Worry about efficiency and caching when you're dealing with queries. Your data is sacred.

Constrain everything. Throw errors if values across your system don't match up. Whatever you do, make sure that your database/model/whatever can be trusted!

There should be no conflicting values in your model. For instance, choose firstname/lastname or fullname. There should be no means for a user to define firstname/lastname _and_ fullname. Everything in your system will be "calculated" elsewhere. Only define the minimal state necessary.

## Step 3: Like & Subscribe

Now we need to get data from the storage to the interface. Subscription-based models are really nice, but `GET` requests work just as well.

The point is, we need data from the database. As a rule-of-thumb, organize the queries by _page_ rather than by _object_. The interface doesn't need a _user_, it wants _profile_ or _settings_. Let SQL and the server do all the joins and merging and data-structure stuff. The interface should expect its data completely formatted (with few exceptions). Most applications will only need 5-15 of these queries. And each of these queries should need around 1-5 parameters. If you say "that's impossible!", then you likely built your system incredibly wrong.

PostgreSQL `VIEW`s are really nice for this kind of thing! You can store a query, and PostgreSQL will cache the results and let you compose it in other commands throughout your database. Each `VIEW` should roughly correspond to one `GET` query.

## Step 4: Do Something

When you have data flowing from your storage through your queries to your interface, it's time to link up the actions!

Each action (e.g. `POST`) should roughly correspond to a form/button in your interface.

Each action should be represented as a clear state-transition in your model. When possible, make your model immutable, so that information is only added, and that you can reconstruct the entire state at a given point in time.
