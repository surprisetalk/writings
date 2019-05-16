
# Structure-State-Value Architecture for OOP

Why aren't there any OOP guidelines for creating small/medium-sized classes? [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) is cool, but it's too high-level! MVC tells you _where_ components should go, but it doesn't inform engineers on _how_ the components should operate or communicate or fit together.
Of course [design-patterns](https://en.wikipedia.org/wiki/Software_design_pattern) are also cool, but there are so many! Each design pattern is focused for very specific problems and optimizations, and doesn't provide any "framework" for thinking about how fit everything together.

So to complement large frameworks like MVC and focused templates like design-patterns, I present to you the Structure-State-Value (SSV) Architecture! Here are some major principles of SSV:
- assert information-loss
- isolate moving-parts
- minimize moving-parts
- reuse structures
- compose structures

This framework is [No Silver Bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet)! However, if a new class doesn't fit into SSV, it's sometimes an indicator that your object is doing _too many things_ — just sayin' 💁

SSV unabashedly promotes clarity over performance. If you find that performance is lacking, it's usually a [structural](#Structure) problem. Learning to think with [pipes](https://en.wikipedia.org/wiki/Pipeline_(software)) is a good start for making fast, memory-efficient systems without touching the smaller pieces of the system.

In this guide, I present common methods that you'll find in each class. This does _not_ mean that you should try to implement them if they don't exist! The methods described in the SSV framework are for _identifying_ how a class might work, rather than _prescribing_ how a class should work.

Thanks to [Jon Anderson](https://jander.land) for sparking this idea!

Class                   | Singular?   | Stateless?  | Examples
----------------------: | :---------: | :---------: | ----------
[Structure](#Structure) | ❌          | ❌          | `Array` {: .lang-javascript}, `Tree` {: .lang-javascript}, `Graph` {: .lang-javascript}, `Tuple` {: .lang-javascript}, `Set` {: .lang-javascript}
[State](#State)         | ✅          | ❌          | `Customer` {: .lang-javascript}, `HttpRequest` {: .lang-javascript}, `Transaction` {: .lang-javascript}, `Socket` {: .lang-javascript}
[Value](#Value)         | ✅          | ✅          | `String` {: .lang-javascript}, `Email` {: .lang-javascript}, `UUID` {: .lang-javascript}, `URI` {: .lang-javascript}, `Color` {: .lang-javascript}, `Maybe` {: .lang-javascript}

<!-- TODO: make a mock customer object, showing which parts are values, classes, and structs -->

<!-- TODO: table of which Design Patterns correspond to what in SSV -->

---

## Value
{: #Value}

> Classes for _singular_ and _stateless_ chunks of information.

Examples: `String` {: .lang-javascript}, `Time` {: .lang-javascript}, `Dollar` {: .lang-javascript}, `DateRange` {: .lang-javascript}, `EmailAddress` {: .lang-javascript}, `LastName` {: .lang-javascript}, `UUID` {: .lang-javascript}, `JSON` {: .lang-javascript}, `PostalAddress` {: .lang-javascript}, `URI` {: .lang-javascript}, `FilePath` {: .lang-javascript}, `SHA5` {: .lang-javascript}, `Color` {: .lang-javascript}

```javascript
class Length
{
  // Represented as meters.
  private x = 0;

  constructor( x )
  {
    if( x === null || x === undefined )
      throw new Error(`Length() cannot be null or undefined.`);
      
    if( x < 0 )
      throw new Error(`Length() expects a non-negative number.`);
  
    this.x = x;
  }
  
  static fromFeet( x )
  {
    return new Length( x / 3.28084 );
  }

  static fromMeters( meters )
  {
    return new Length( x );
  }

  get toFeet()
  {
    return this.x * 3.28084;
  }

  get toMeters()
  {
    return this.x;
  }
}
```

Value objects are useful as immutable structures that can be combined and transformed. [States](#State) and [structures](#Structure) use value objects to store information.

Value classes should _never_ have side-effects. They don't make HTTP requests, they don't touch the file-system, and they don't talk to databases.

Value classes should be _immutable_. Nothing inside the object should ever be updated after construction. Value classes have no setter methods. Of course, sometimes it's necessary to mutate data in-place for memory/performance reasons, but that kind of stuff should be avoided when possible.

<!-- TOOD: maybes -->

<!-- TODO: enums? -->

<!-- TODO: the key to all the methods: is it producing an object of different type? does it accept an object of different type? is it losing informaiton? make a table! -->

### Constructor

Constructors for value classes only do two things:
- validate the arguments
- set the internal properties

That's it! Easy!

### Constant Methods

Examples: `Number.infinity()` {: .lang-javascript}, `Color.green()` {: .lang-javascript}, `DateTime.unixEpoch()` {: .lang-javascript}, `FilePath.root()` {: .lang-javascript}

Constant methods are static methods for generating unique/significant value objects.

[Null objects](https://en.wikipedia.org/wiki/Null_object_pattern) are a special case of constant methods.

### Decoder Methods

Examples: `JSON.parseString('{}')` {: .lang-javascript}, `String.fromCharList(['x'])` {: .lang-javascript}, `PostalCode.fromInteger(91234)` {: .lang-javascript}, `Country.fromString('US')` {: .lang-javascript}, `char.fromKeyCode(21)` {: .lang-javascript}

Decoder methods are essentially just wrappers around the class constructor.

The constructor handles validation and declares the instance's properties. So all the decoder has to do is transform the input into something that's palatable for the constructor!

### Encoder Methods

Examples: `datetime.toUnixTimestamp()` {: .lang-javascript}, `filePath.toString()` {: .lang-javascript}, `json.stringify()` {: .lang-javascript}, `hash.toString(privateKey)` {: .lang-javascript}, `color.toHexString()` {: .lang-javascript}

Encoder methods produce equivalent objects of different types.

When creating encoders, the key is to avoid loss of information! Anticipate where information might be lost. For example, consider some `DateTime` {: .lang-javascript} object with timezone information: `datetime.toUnixTimestamp()` {: .lang-javascript} is ambiguous. Is it going to return the timestamp in PST or UTC? A better design would be to require a timezone argument, e.g. `datetime.toUnixTimestamp('UTC')` {: .lang-javascript}.

If any information is lost during the encoding process, _make sure_ it's clear. And avoid default-values at all costs! Make no assumptions about which information to throw away.

### Extract Methods

Examples: `uri.host()` {: .lang-javascript}, `float.floor()` {: .lang-javascript}, `string.charAt(7)` {: .lang-javascript}, `color.saturation()` {: .lang-javascript}, `string.startsWith('🐸')` {: .lang-javascript}, `signature.isSignedBy(publicKey)` {: .lang-javascript}

Extraction methods are exactly the same as encoder methods, but with a lot more information loss. They're used to construct a view of a small subset of the value object.

Compound values like `URI` {: .lang-javascript} may have multiple properties like `protocol` {: .lang-javascript}, `host` {: .lang-javascript}, and `path` {: .lang-javascript}, and `query` {: .lang-javascript}. In this case, extractors act as getters.

When extracting an `Integer` {: .lang-javascript} from a `Float` {: .lang-javascript}, you're forced to throw away the fractional part of the number. `float.toInteger()` {: .lang-javascript} would be a bad idea, because you don't know _how_ the integer is being calculated. That's why we need `float.floor()` {: .lang-javascript}, `float.round()` {: .lang-javascript}, and `float.ceiling()` {: .lang-javascript}.

### Cut Methods

Examples: `int.absoluteValue()` {: .lang-javascript}, `string.slice(1,3)` {: .lang-javascript}, `datetime.midnight()` {: .lang-javascript}, `string.toLowerCase()` {: .lang-javascript}

Cut methods simply throw away some information. They produce objects of the same type, just with some stuff missing.

### Mix Methods

Examples: `string.reverse()` {: .lang-javascript}, `number.negate()` {: .lang-javascript}, `boolean.not()` {: .lang-javascript},  `string.exclaim()` {: .lang-javascript}

Mixers produce objects of the same type with no information loss!

### Merge Methods

Examples: `int.add(21)` {: .lang-javascript}, `string.concat('!')` {: .lang-javascript}, `path.join(Path.home())` {: .lang-javascript}, `uri1.equal(uri2)` {: .lang-javascript}

Merge methods add information to the object that may or may not destroy information. Merge methods always produce objects of the same type. For instance, `datetime.addMinutes(10)` {: .lang-javascript} will create a new `DateTime` {: .lang-javascript} object offset by an equivalent amount of minutes.

#### Operator Methods

Operator methods are special cases of Merge methods that accept arguments of the same type and produce a value of the same type. 

Operators are particularly handy because they allow you to reduce [structures](#Structure) of values with minimal work!

```javascript
const integers = Group(
  Integer(1),
  Integer(2),
  Integer(3)
);

const sum = integers.foldl((x,y) => x.add(y), Integer(0))
```

When you have homogenous objects, you can merge them together with methods like `.reduce` {: .lang-javascript} and `.foldl` {: .lang-javascript}!

Another common use case of operators is to use `value.compare()` {: .lang-javascript} with `structure.sort()` {: .lang-javascript}.


---

## State
{: #State}

> Classes are for _singular_ and _stateful_ chunks of information.

Examples: `Customer` {: .lang-javascript}, `HttpRequest` {: .lang-javascript}, `Transaction` {: .lang-javascript}, `Socket` {: .lang-javascript}

```javascript
// This is a contrived example to show off weird state stuff.
// Please do not copy this; it's not a very good way to handle requests.
class WebPage
{
  // "NOT-ASKED" | "WAITING" | "SUCCESS" | "FAILED"
  private status = "NOT-ASKED";
  
  // Web page as HTML string when status is "SUCCESS
  // Error message as string when status is "FAILED"
  private data = null;
  
  constructor( url )
  {
    const request = fetchHtml( url );
    
    this.status = "WAITING";
    
    request.on( "success", body => {
      this.status = "SUCCESS";
      this.data = body;
    });

    request.on( "error", message => {
      this.status = "FAILED";
      this.data = message;
    });
  }

  get getPage()
  {
    if( this.status === "SUCCESS" )
      return this.data;
    else
      return null;
  }

  get getErrorMessage()
  {
    if( this.status === "FAILED" )
      return this.data;
    else
      return null;
  }
}
```

The methods of state classes are verbs. Actions like `customer.purchase(item)` {: .lang-javascript} and `httpRequest.respond(200,body)` {: .lang-javascript} describe how things change internally or produce change in other systems.

<!-- TODO: is it a value or state? -->

<!-- TODO: enums may be values or states -->

<!-- TODO: does an email send a message, or does a user send a message using an email? -->

<!-- TODO: table of method types -->

### Constructor

Constructors for state classes have two essentials:
- validate the arguments
- set the internal properties

Beyond that, there's little restriction to what you can do in your constructors!

### Constant Methods

Examples: `ShoppingCart.empty()` {: .lang-javascript}

```javascript
const cart = ShoppingCart.empty();

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

await cart.purchase(paymentInfo);
```
With state classes, constant methods are useful as "starting points" for creating objects.

### Perspective Methods

Examples: `customer.sendNewsletterEmail(newsletter)` {: .lang-javascript}, `document.print(printer)` {: .lang-javascript}, `car.honk()` {: .lang-javascript}

Sending messages to the outside world!

Although these methods may affect internal state, the grand purpose is to _do_ something from the _perspective_ of the state object.

In other words, these methods are more concerned with producing change in the _outside world_ than the internal state.

The behavior of perspective methods vary based on what state the object is in. For instance, `car.honk()` {: .lang-javascript} won't change if the car is in `PARK` or `REVERSE`, but it may throw an error if `car.isBatteryDead() === true` {: .lang-javascript}.

### Manipulation Methods

```javascript
const cart = ShoppingCart.empty();

// Manipulate the cart.
cart.addItem(item1);
cart.removeAllItems();

// Attempt state-transition.
try 
{
  await cart.purchase(paymentInfo);

} catch( error )
{
  console.error( error );
  // "Couldn't complete purchase because cart is empty!"
}

// Manipulate the cart.
cart.addItem(item1);

// Attempt state-transition.
await cart.purchase(paymentInfo);

// Manipulate the cart.
try 
{
  cart.addItem(item2);

} catch( error )
{
  console.error( error );
  // "Cannot add items to a purchased cart!"
}
```

Examples: `shoppingCart.addItem(item)` {: .lang-javascript}, `customer.setAddress(address)` {: .lang-javascript}, `car.applyGas(force)` {: .lang-javascript}

Manipulation methods are for non-state-transition updates.

These are usually for updating properties unrelated to stages.

As demonstrated in the example code, manipulation methods often change behavior depending on the state of the system.

Manipulation methods like `customer.setAvatarImage(imageUrl)` {: .lang-javascript} may produce side-effects like saving a photo to AWS/S3, but the main intent is to update some variable data.

### State-Transition Methods

Examples: `shoppingCart.submit()` {: .lang-javascript}, `httpRequest.respond(200,body)` {: .lang-javascript}, `user.suspend(reason)` {: .lang-javascript}, `trafficLight.stop()` {: .lang-javascript}, `customer.verifyEmail(verificationCode)` {: .lang-javascript}, `car.park()` {: .lang-javascript}

```javascript
class TrafficLight
{
  // "RED" | "YELLOW" | "GREEN"
  private color = "RED";

  constructor( color )
  {
    if( !["RED","YELLOW","GREEN"].includes( color ) )
      throw new Error(`'${color}' is not a valid TrafficLight color.`);

    this.color = color;
  }
  
  stop()
  {
    switch( this.color )
    {
      case "RED":
        throw new Error('TrafficLight is already stopped.');
      case "YELLOW":
        this.color = "RED"; break;
      case "GREEN":
        throw new Error('TrafficLight must slow before stopping.');
    }
  }
  
  slow()
  {
    switch( this.color )
    {
      case "RED":
        throw new Error('TrafficLight cannot slow cars while they're already stopped.');
      case "YELLOW":
        throw new Error('TrafficLight is already slowing.');
      case "GREEN":
        this.color = "YELLOW"; break;
    }
  }
  
  go()
  {
      case "RED":
        this.color = "GREEN"; break;
      case "YELLOW":
        throw new Error('TrafficLight cannot make cars go while they're already slowing.');
      case "GREEN":
        throw new Error('TrafficLight is already going.');
  }
}
```

The intent of these methods is to move an object into a different "stage" of its lifecycle.

It's helpful to map out these transitions using a state-transition diagram! In particular, it's helpful to throw errors on illegal state-transitions, so that your program can't be put into an errant state.

<!-- A shopping cart may have stages like `SHOPPING`, `REVIEWING`, `PAYING`, `PAID`, `CANCELED`, and `REFUNDED`. Note that each stage affects how other  -->

A car object may have stages like `PARK`, `REVERSE`, `NEUTRAL`, and `DRIVE`. The object may also have orthogonal stages like `NEW` or `USED`. But note that an enumeration like `HONDA` or `FERRARI` may _not_ be a stage; many categories are not used to describe the quality of a changing process.

### Query Methods

Examples: `shoppingCart.items()` {: .lang-javascript}, `user.isEmailVerified()` {: .lang-javascript}, `trafficLight.color()` {: .lang-javascript}, `car.speed()` {: .lang-javascript}

Query methods are getters.

Outside code shouldn't be poking and prodding around objects' internal properties, so use these methods to expose controlled "views" of the data.

---

## Structure
{: #Structure}

> Classes for organizing multiple [values](#Value) or [states](#State) generalized over any type.

Examples: `Array` {: .lang-javascript}, `List` {: .lang-javascript}, `Graph` {: .lang-javascript}, `Tuple` {: .lang-javascript}, `Tree` {: .lang-javascript}, `Stack` {: .lang-javascript}

```javascript
class NonEmptyStack
{
  private data = [];

  constructor( xs )
  {
    if( xs.length <= 0 )
      throw new Error('NonEmptyStack cannot be empty!');
      
    this.data = xs;
  }
  
  map(f)
  {
    this.data = this.data.map( f );
  }
  
  toList()
  {
    return this.data;
  }

  push( x )
  {
    return new NonEmptyStack( 
      this.data.concat([ x ])
    );
  }

  pop()
  {
    if( this.data.length <= 1 )
      throw new Error('Cannot pop off NonEmptyStack when only one item remains!');

    return new NonEmptyStack( 
      this.data.slice(-1)
    );
  }
}
```

Lastly, we have structures! Structures are _generalized_ classes for holding other objects.

Structures should be immutable when performance permits it.

<!-- TODO: composability and pipelines -->

<!-- TODO: records? -->

<!-- TODO: Why is String a value and not a structure? because it's not generalized -->
<!-- TODO: Why is shopping-cart a state and not a structure? because it's not generalized -->

<!-- TODO: https://package.elm-lang.org/packages/elm-community/list-extra/latest/List-Extra -->

<!-- TODO: pipes -->

<!-- TODO: async -->

<!-- TODO: table of method types -->

### MAP METHODS

Examples: `list.map(f)` {: .lang-javascript}, `dict.mapKeys(f)` {: .lang-javascript}, `tree.forEach(f)` {: .lang-javascript} {: .lang-javascript}

Map methods are useful for updating items at once! If built correctly, computers can efficiently run these operations in parallel on each item.

### COLLAPSE METHODS

Examples: `list.reduce(f,x)` {: .lang-javascript}, `dict.foldl(f,x)` {: .lang-javascript}, `array.scanl(f,x)` {: .lang-javascript}, `tree.collapse(f,x)` {: .lang-javascript}, `graph.collect(f,start)` {: .lang-javascript}

The goal of these methods is to collapse all the values into a single accumulator value.

### MIX METHODS

Examples: `list.sortBy(f)` {: .lang-javascript}, `dict.shuffle()` {: .lang-javascript}, `tree.rebalance()` {: .lang-javascript}, `array.removeDuplicates()` {: .lang-javascript}, `tuple.reverse()` {: .lang-javascript}

For ordered structures, it's always nice to non-destructively sort the information.

### CUT METHODS

Examples: `list.filter(f)` {: .lang-javascript}, `dict.filterKeys(f)` {: .lang-javascript}, `tree.chopLeft()` {: .lang-javascript}, `array.removeDuplicates()` {: .lang-javascript}, `list.slice(1,2)` {: .lang-javascript}, `graph.removeNonNeighbors(i)` {: .lang-javascript}, `tuple.first()` {: .lang-javascript}

Remove chunks of the structure!

### MERGE METHODS

Examples: `list1.concat(list2)` {: .lang-javascript}, `dict1.deepMerge(dict2)` {: .lang-javascript}, `tree.appendBranch(branch)` {: .lang-javascript}, `array1.zip(array2)` {: .lang-javascript}, `set1.difference(set2)` {: .lang-javascript}

Take two structures and make a new structure!

### ITEM METHODS

Examples: `list.getItemAt(0)` {: .lang-javascript}, `dict.insert(k,v)` {: .lang-javascript}, `tree.removeNode(i)` {: .lang-javascript}, `array.update(i,x)` {: .lang-javascript}, `graph.addNode(edges)` {: .lang-javascript}, `tuple.setSecond(5)` {: .lang-javascript}

Perform [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on one or more items in your structure.

### QUERY METHODS

Examples: `list.length()` {: .lang-javascript}, `dict.keyExists(k)` {: .lang-javascript}, `tree.depth()` {: .lang-javascript}, `array.indexOf(42)` {: .lang-javascript}, `graph.shortestCycle()` {: .lang-javascript}

These are helper functions to find information about singular items or properties of the whole structure.

### IMPORT/EXPORT METHODS

Examples: `list.toSet()` {: .lang-javascript}, `set.toList(sortFunction)` {: .lang-javascript}, `dict.toPairs()` {: .lang-javascript}, `Graph.fromTree(tree)` {: .lang-javascript}, `tuple.toList()` {: .lang-javascript}

Sometimes it's helpful to transfer between different structures!
