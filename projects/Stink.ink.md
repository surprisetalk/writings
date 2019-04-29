
## Stink.ink

### 2018/09/15 1112h

I want to make a generalized cryptographic-based comments service!

I think "comments" is a bit too specific. I'd like to make a service that lets you reference a hash at another hash, identifying yourself by a wallet address.

The entire database will be a list of triples like 
```elm
type alias Ink 

  = ( Hash      -- This is the hash of the content or address you're commenting on.
                -- It may just be a hash of another comment or ink-blob!

    , Hash      -- This is the hash of your comment.
                -- Optionally, you should be able to store it in the Stink.ink DB, 
                -- or host it locally.

    , Signature -- A signature of the two hashes.
                -- Optionally, you can store user profile information associated 
                -- with the address by signing a blob and putting it on the Stink.ink servers.
                    
    )
```

Additionally, the server will keep track of timestamps and other convenient stuff to make everybody's lives easier.

Eventually, it would be really cool to make this service trustless, but that's a bit of a stretch goal.


