
ALRIGHT.

This is "sewer-oriented programming".

A program/object is defined by `( state, ( state, input ) -> ( state, output ) )`.

Here is the definition of a programs and objects written in an Elm-like syntax:
``` elm
type Swamp state in out
  = { init  : state
    , sewer : ( state, in ) -> ( state, List out )
    }
```

The input and output messages are defined by the context, i.e. web-page, web-server, I/O script, etc. We can even use this model to make objects!
``` elm
simpleWebServer : Swamp WebServerState HttpRequest HttpResponse

simpleWebPage : Swamp MyPageState BrowserEvent Html

simpleObject : Swamp MyObjectState Json Json
```
