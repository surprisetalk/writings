<!-- TODO: think of a more creative name! -->

<!-- TODO: make a mock customer object, showing which parts are values, classes, and structs -->

<!-- TODO: if it's unclear whether a class should be a value or state or structure, then your class is probably poorly-defined and doing too many things. -->

<!-- TODO: performance -->

## Value
{: #Value}

> Classes for _singular_ and _stateless_ chunks of information.

Examples: `String`, `Time`, `Dollar`, `DateRange`, `EmailAddress`, `LastName`, `UUID`, `JSON`, `PostalAddress`, `URI`, `FilePath`, `SHA5`, `Color`

Values objects are useful as immutable structures that can be combined and transformed. [States](#State) and [structures](#Structure) use value objects to store information.

Value classes should _never_ have side-effects. They don't make HTTP requests, they don't touch the file-system, and they don't talk to databases.

Value classes should be _immutable_. Nothing inside the object should ever be updated after construction. Value classes have no setter methods. Of course, sometimes it's necessary to mutate data in-place for memory/performance reasons, but that kind of stuff should be avoided when possible.

<!-- TOOD: maybes? -->

<!-- TODO: enums? -->

<!-- TODO: the key to all the methods: is it producing an object of different type? does it accept an object of different type? is it losing informaiton? make a table! -->

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

### Constructor

Constructors for value classes only do two things:
- validate the arguments
- set the internal properties

That's it! Easy!

### Constant Methods

Examples: `Number.infinity()`, `Color.green()`, `DateTime.unixEpoch()`, `FilePath.root()`

Constant methods are static methods for generating unique/significant value objects.

[Null objects](https://en.wikipedia.org/wiki/Null_object_pattern) are a special case of constant methods.

### Decoder Methods

Examples: `JSON.parseString('{}')`, `String.fromCharList(['x'])`, `PostalCode.fromInteger(91234)`, `Country.fromString('US')`, `char.fromKeyCode(21)`

Decoder methods are essentially just wrappers around the class constructor.

The constructor handles validation and declares the instance's properties. So all the decoder has to do is transform the input into something that's palatable for the constructor!

### Encoder Methods

Examples: `datetime.toUnixTimestamp()`, `filePath.toString()`, `json.stringify()`, `hash.toString(privateKey)`, `color.toHexString()`

Encoder methods produce equivalent objects of different types.

When creating encoders, the key is to avoid loss of information! Anticipate where information might be lost. For example, consider some `DateTime` object with timezone information: `datetime.toUnixTimestamp()` is ambiguous. Is it going to return the timestamp in PST or UTC? A better design would be to require a timezone argument, e.g. `datetime.toUnixTimestamp('UTC')`.

If any information is lost during the encoding process, _make sure_ it's clear. And avoid default-values at all costs! Make no assumptions about which information to throw away.

### Extract Methods

Examples: `uri.host()`, `float.floor()`, `string.charAt(7)`, `color.saturation()`, `string.startsWith('🐸')`, `signature.isSignedBy(publicKey)`

Extraction methods are exactly the same as encoder methods, but with a lot more information loss. They're used to construct a view of a small subset of the value object.

Compound values like `URI` may have multiple properties like `protocol`, `host`, and `path`, and `query`. In this case, extractors act as getters.

When extracting an `Integer` from a `Float`, you're forced to throw away the fractional part of the number. `float.toInteger()` would be a bad idea, because you don't know _how_ the integer is being calculated. That's why we need `float.floor()`, `float.round()`, and `float.ceiling()`.

### Cut Methods

Examples: `int.absoluteValue()`, `string.slice(1,3)`, `datetime.midnight()`, `string.toLowerCase()`

Cut methods simply throw away some information. They produce objects of the same type, just with some stuff missing.

### Mix Methods

Examples: `string.reverse()`, `number.negate()`, `boolean.not()`,  `string.exclaim()`

Mixers produce objects of the same type with no information loss!

### Merge Methods

Examples: `int.add(21)`, `string.concat('!')`, `path.join(Path.home())`, `uri1.equal(uri2)`

Merge methods add information to the object that may or may not destroy information. Merge methods always produce objects of the same type. For instance, `datetime.addMinutes(10)` will create a new `DateTime` object offset by an equivalent amount of minutes.

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

When you have homogenous objects, you can merge them together with methods like `.reduce` and `.foldl`!

Another common use case of operators is to use `value.compare()` with `structure.sort()`.


---

## State
{: #State}

> Classes are for _singular_ and _stateful_ chunks of information.

Examples: `Customer`, `HttpRequest`, `Transaction`, `Socket`

The methods of state classes are verbs. Actions like `customer.purchase(item)` and `httpRequest.respond(200,body)` describe how things change internally or produce change in other systems.

<!-- TODO: is it a value or state? -->

<!-- TODO: enums may be values or states -->

<!-- TODO: does an email send a message, or does a user send a message using an email? -->

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

### Constructor

Constructors for state classes have two essentials:
- validate the arguments
- set the internal properties

Beyond that, there's little restriction to what you can do in your constructors!

### Constant Methods

Examples: `ShoppingCart.empty()`

With state classes, constant methods are useful as "starting points" for creating objects.

```javascript
const cart = ShoppingCart.empty();

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

await cart.purchase(paymentInfo);
```

### Perspective Methods

Examples: `customer.sendNewsletterEmail(newsletter)`, `document.print(printer)`, `cark.honk()`

Sending messages to the outside world!

Although these methods may affect internal state, the grand purpose is to _do_ something from the _perspective_ of the state object.

In other words, these methods are more concerned with producing change in the _outside world_ than the internal state.

The behavior of perspective methods vary based on what state the object is in. For instance, `car.honk()` won't change if the car is in `PARK` or `REVERSE`, but it may throw an error if `car.isBatteryDead() === true`.

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

Examples: `shoppingCart.addItem(item)`, `customer.setAddress(address)`, `car.applyGas(force)`

Manipulation methods are for non-state-transition updates.

These are usually for updating properties unrelated to stages.

As demonstrated in the example code, manipulation methods often change behavior depending on the state of the system.

Manipulation methods like `customer.setAvatarImage(imageUrl)` may produce side-effects like saving a photo to AWS/S3, but the main intent is to update some variable data.

### State-Transition Methods

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

Examples: `shoppingCart.submit()`, `httpRequest.respond(200,body)`, `user.suspend(reason)`, `trafficLight.stop()`, `customer.verifyEmail(verificationCode)`, `car.park()`

The intent of these methods is to move an object into a different "stage" of its lifecycle.

It's helpful to map out these transitions using a state-transition diagram! In particular, it's helpful to throw errors on illegal state-transitions, so that your program can't be put into an errant state.

<!-- A shopping cart may have stages like `SHOPPING`, `REVIEWING`, `PAYING`, `PAID`, `CANCELED`, and `REFUNDED`. Note that each stage affects how other  -->

A car object may have stages like `PARK`, `REVERSE`, `NEUTRAL`, and `DRIVE`. The object may also have orthogonal stages like `NEW` or `USED`. But note that an enumeration like `HONDA` or `FERRARI` may _not_ be a stage; many categories are not used to describe the quality of a changing process.

### Query Methods

Examples: `shoppingCart.items()`, `user.isEmailVerified()`, `trafficLight.color()`, `car.speed()`

Query methods are getters.

Outside code shouldn't be poking and prodding around objects' internal properties, so use these methods to expose controlled "views" of the data.

---

## Structure
{: #Structure}

> Classes for organizing multiple [values](#Value) or [states](#State) generalized over any type.

Lastly, we have structures! Structures are _generalized_ classes for holding other objects.

Structures should be immutable when performance permits it.

<!-- TODO: composability and pipelines -->

<!-- TODO: records? -->

<!-- TODO: Why is String a value and not a structure? because it's not generalized -->
<!-- TODO: Why is shopping-cart a state and not a structure? because it's not generalized -->

<!-- TODO: https://package.elm-lang.org/packages/elm-community/list-extra/latest/List-Extra -->

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

### MAP METHODS

Examples: `list.map(f)`, `dict.mapKeys(f)`, `tree.forEach(f)`

Map methods are useful for updating items at once! If built correctly, computers can efficiently run these operations in parallel on each item.

### COLLAPSE METHODS

Examples: `list.reduce(f,x)`, `dict.foldl(f,x)`, `array.scanl(f,x)`, `tree.collapse(f,x)`, `graph.collect(f,start)`

The goal of these methods is to collapse all the values into a single accumulator value.

### MIX METHODS

Examples: `list.sortBy(f)`, `dict.shuffle()`, `tree.rebalance()`, `array.removeDuplicates()`, `tuple.reverse()`

For ordered structures, it's always nice to non-destructively sort the information.

### CUT METHODS

Examples: `list.filter(f)`, `dict.filterKeys(f)`, `tree.chopLeft()`, `array.removeDuplicates()`, `list.slice(1,2)`, `graph.removeNonNeighbors(i)`, `tuple.first()`

Remove chunks of the structure!

### MERGE METHODS

Examples: `list1.concat(list2)`, `dict1.deepMerge(dict2)`, `tree.appendBranch(branch)`, `array1.zip(array2)`, `set1.difference(set2)`

Take two structures and make a new structure!

### ITEM METHODS

Examples: `list.getItemAt(0)`, `dict.insert(k,v)`, `tree.removeNode(i)`, `array.update(i,x)`, `graph.addNode(edges)`, `tuple.setSecond(5)`

Perform [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on one or more items in your structure.

### QUERY METHODS

Examples: `list.length()`, `dict.keyExists(k)`, `tree.depth()`, `array.indexOf(42)`, `graph.shortestCycle()`

These are helper functions to find information about singular items or properties of the whole structure.

### IMPORT/EXPORT METHODS

Examples: `list.toSet()`, `set.toList(sortFunction)`, `dict.toPairs()`, `Graph.fromTree(tree)`, `tuple.toList()`

Sometimes it's helpful to transfer between different structures!
