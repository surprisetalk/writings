
# Math as a [Practical] Programming Language

Alternatively, "Practical Math for Programmers".

All programming is math. Literally, programs are types are proofs -- it's math.

And yet, math isn't programming. Most day-to-day programming plays with the transformation of strings, dates, and structures.

## Where Math is Limited

TODO

### Sequential Processes

TODO

### Strings

TODO

### Large, Interconnected Systems

TODO

### Accessibility & Documentation

Code docs are written for other programmers.
Math docs are written for, well, nobody really.

### Practical Classes

TODO

<!-- <e.g. customers> -->

### Floating-Point Errors

TODO

### Error-Handling

TODO

## Where Math Shines

Math hacks!
This presentation is filled with shortcuts you can make with math.

Examples of how to use math in practical programming.

Show how in all these examples, it's better to design these systems with mathematics on-paper.
If you see _this_, you should think of _that_.

Express elegant representations to make life easier and avoid mistakes.

1. First, find a _good representation_ on paper! Math is useful here.
2. Implement the representation in your code!

### Paper & Terse Notation

TODO

<!-- <apl> -->

### Types & Guarantees

TODO

<!-- <type theory> -->

### Rigorous Communication

TODO

<!-- <{R}->{N}> -->

### Identity

I personally prefer to have all of my if-statements accompanied by else-statements -- it forces me to address every possible path of the conditional.
Whenever you're selectively applying functions in cases, `identity` makes a great default case.

    if a < b:
      x = f( x )
    elif a > b:
      x = g( x )
    return x
    
    if a < b:
      x = f( x )
    elif a > b:
      x = g( x )
    else:
      x = identity( x )
      
    if a < b:
      h = f
    elif a > b:
      h = g
    else:
      h = identity
    return h( x )

### Transforming Numerical Ranges

    rescale:(A->B)->(X->Y)

    function rescale() {
      return ( ( new_max - new_min )
             / ( old_max - old_min ) 
             )
           * ( v - old_max )
           + new_max;
    };
    
    function rescale() {
      const new_range = new_max - new_min;
      const old_range = old_max - old_min;
      return ( new_range / old_range ) 
           * (         v - old_max   )
           + (             new_max   )
    };
    
    <!-- <todo: using pos/neg infinity as a max/min> -->

    <!-- <todo: piping/composing functions into rescale> -->

### Mathematical Data Structures

TODO

#### Sets

Have you ever checked for duplicates in an array/list?
What unnecessary work! In most languages, we have primitive sets to help with these cases.

Whenever you have groups of things where duplication is undesired and order doesn't matter, consider using a set! 

Here's a real-life example:

    result = []
    for x in xs:
      if x in white_list:
        result.push( x )
    return result
    
    return xs.filter( x => x in white_list )
    
    return intersect( xs, white_list )
    
And here's another:
      
    cats    =    cats_query(...)
    mammals = mammals_query(...)
    
    for( cat in cats ):
      if cat not in mammals:
        mammals.push( cat )
    return mammals
    
    return union( cats, mammals )
    
In short, whenever you're comparing lists for membership, that should scream "set operations"!

#### Maps

Whenever you have a list of pairs, or an object where you need duplicate keys, you should think "map"!

#### Trees

TODO

<!-- <trees as functors> -->

#### Categories

Large systems often have a bunch of encapsulated objects. Category theory sometimes helps translate to/from different instances of classes.

<!-- <classes & objects> -->
<!-- <functors & mapping> -->
<!-- <monads & io> -->

<!-- <lists & maybes as functors> -->

#### Rings & Modular Things

<!-- <todo: hours, minutes, and seconds> -->

If you find yourself needing to access lists of things in strange ways, you'll often need the modulo operator!

    while(true):
      println( xs[ ++i % xs.length ] )


#### Queues

<!-- <todo: queuing theory> -->

TODO

### Hashing

TODO

### Cryptography & Security

TODO

### Union Types, GADTs, & Symbols

Most dynamic languages don't give us union types! 

<!-- <todo: constants as Symbol('debug')> -->

<!-- <todo: enums as Map:Symbol->x with myEnum[ sym ] > -->

What else are symbols good for?

### Lambdas

    f(x) = x + x
    
    f = λx.x+x

    f' = λx.λy.x+y
    
<!-- <todo: sometimes easier to write and reason about!> -->

### Composition & Combinators

Whenever you hear the word "pipeline" you should think of composition!

    y = f(x)
    z = g(y)
    
    z = f(g(x))
    
    z = compose(f,g)(x)

In JS, it's often better to make your functions curryable!

    const = x => y => x + y;
    
<!-- <todo: benefits of currying! mappable, and function builders> -->


### Domains, Co-Domains, & Ranges

TODO

### Animation & Parameterized Functions

TODO

### Linear Algebra

TODO

### Parallelization & GPUs

TODO

### Reversibility

TODO

### Common Types

TODO

#### Infinity

TODO

<!-- <when to use infinity in your code> -->

#### NaN

TODO

<!-- <when to use NaN in your code> -->

#### Null

TODO

<!-- <when to use null in your code> -->

### Fractals & Infinite Curves

TODO

### Reduction & Efficiency

TODO

### Dates & Time

TODO

### Conditionals

    if is_something( x ):
      x = 0
    return 0

    return is_something( x )
      ? x
      : 0

### Un-Unrolling Loops, Accumulation & Map/Filter/Reduce

TODO

#### Reductions & Folds

TODO

### Monads & IO

TODO

### Sampling & Approximation

TODO

### Statistics

TODO

### Ands & Ors with Bitmaps

TODO

### Sequences, Series, Streams, and Infinite Lists

TODO

### Encoding/Decoding/Serialization/Mapping

TODO

### Processes (Pi Calculus)

TODO

### Code Analysis (Graph Theory x Systems)

TODO

### Graphics

TODO

### Signals & Sampling

TODO

### State Machines

TODO

<!-- (ui in particular) -->

### Colors

TODO

### Equivalency Proofs

TODO

### Tests, Guards, Estimations, and Error Bounds

TODO

<!-- <testing reasonableness> -->

### Magic Functions & Constants

TODO

#### sin, cos, & tan

TODO

#### π

TODO

#### e

TODO

#### ln & log

TODO

### Min & Max

    if x < 0:
      return 0
    else:
      return x

    return min( 0, x )


    return max( min( 0, x ), 100 )


    if x < y:
      return x
    else:
      return y

    return min( x, y )


    max_of_xs = 0
    for xs:
      if x > max_of_xs:
        max_of_xs = x
    return max_of_xs

    return max.apply( xs )


### Testing

TODO

#### Ranges

TODO

#### Distributions

TODO

### Negativity

TODO

<!-- <abs> -->

<!-- <-1^n> -->

### Floors & Ceilings

TODO

### Seeds & Randomness

TODO

### Optimization Problems

TODO

### Simulations

TODO

### Currency, Tax, & Interest

TODO

### Complex Numbers

TODO

### Geolocation & Trig

TODO

### Rationals

TODO

### Rederivation

TODO

<!-- <storing state losslessly, and re-computing on the fly> -->

### Graph Theory & Associative Arrays

TODO

### Logic & DeMorgan's Law

TODO

<!-- <making if-statements easier-to-read> -->
