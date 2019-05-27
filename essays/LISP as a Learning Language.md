
## TL;DR

LISP is easier to learn than other programming languages.

---

# Learn LISP First

It's slower to learn JavaScript alone than LISP _with_ JavaScript.

For a long time, MIT's intro-to-programming course ([SICP]()) used Scheme (a LISP dialect). SICP is still considered to be one of the best classes on programming — I highly recommend watching [the entire series on YouTube]().  
In most programming courses, most of the work is struggling with syntax. For-loops, arrays, function-declarations, and variables have their own unique notations that need to be covered.  
Compare that with LISP, whose syntax only takes a few hours to grasp.

So why not learn about lists and functions and stuff in a dirt-simple language?


## Learning Programming is Hard

> Why doesn't it work?

Syntax is not something that advanced programmers think about regularly. Real programming problems are usually about abstraction and systems and performance.  
Once you've learned the basics of Ruby, it's easy to jump to Python or JavaScript. Notation is not a huge deal when you're comfortable with the underlying concepts.

Professional programmers spend their time on logical and systemic errors. Beginners spend their time on logical _and_ conceptual _and_ syntactical errors.  
LISP minimizes conceptual and syntactical errors, because there's only a few concepts and syntax-rules to learn. This lets students focus on what matters.

It's hard to get unstuck when you're learning to program. You don't know what you don't know, and you don't even know where to start. With LISP, it's as simple as "Keep simplifying the program until you can't simplify it anymore":
```scheme
; Start
(/ (+ 8 1) 
   (length 
    (list "a" "b" "c")))

; Step 1
(/ 9
   (length 
    (list "a" "b" "c")))

; Step 2
(/ 9
   3)

; Step 3
3
```
{: .lang-scheme}

And with LISP, it's easy to experiment! Every part of the program is a valid program that you can run in an interpreter. You can copy-and-paste almost anything to see what it does.

### Syntax is Hard

> What do for-loops return?

When you're a beginner, every character is a trap.

Think about how difficult it would be to make a compiler for C, Javascript, or Python.

We forget that when you're programming, you _are_ the compiler. So why not choose a language with simple compilation rules?

#### C

```clike
#include<stdio.h>
int main()
{
  const char *names[3];
  names[0] = "Sally";
  names[1] = "Joe";
  names[2] = "Tommy";

  for(int i=0; i<3; ++i) {
    printf("%s\n", names[i]);
  }
}
```
{: .lang-clike}

Consider all the notational concepts to cover in that C snippet.

`main() {...}` {: .lang-clike}, `for(...) {...}` {: .lang-clike}, and `printf(...)` {: .lang-clike} all have vaguely the same shape, but they all do _completely_ different things. `main() {...}` {: .lang-clike} is a function declaration, `for(...) {...}` {: .lang-clike} is an iteration structure, and `printf(...)` {: .lang-clike} is a function call. How do we expect beginners to learn this‽

Here are all the syntactical structures in the C program above:

`#...<...>`          {: .lang-clike} | (header declaration)
`... main() {...}`   {: .lang-clike} | function declaration
`int ...`            {: .lang-clike} | types
`int main() {...}`   {: .lang-clike} | the main function
`...;`               {: .lang-clike} | statements
`const ...;`         {: .lang-clike} | constant variables
`*...`               {: .lang-clike} | pointers
`... = ...`          {: .lang-clike} | assignment
`*...[...]`          {: .lang-clike} | array declaration
`"..."`              {: .lang-clike} | strings
`for(...) {...}`     {: .lang-clike} | for-loops
`... < ...`          {: .lang-clike} | inequalities
`++...`              {: .lang-clike} | incrementation
`printf(...)`        {: .lang-clike} | `printf` (and `%s`)
`printf(...)`        {: .lang-clike} | printing
`\n`                 {: .lang-clike} | newlines
`...(...)`           {: .lang-clike} | function calling
`...[...]`           {: .lang-clike} | array access
{: .table .is-narrow}

Holy h*ck that's a lot of stuff to learn!

#### JavaScript

```javascript
var names = ["Sally", "Joe", "Tommy"];
for(var i in names)
  console.log(names[i]);
```
{: .lang-javascript}

Javascript is definitely easier than C, but you'll notice that there's still a bunch of ground to cover in terms of notation:

`var ...`             {: .lang-javascript} | variable declaration
`... = ...`           {: .lang-javascript} | assignment
`...;`                {: .lang-javascript} | statements
`[...,...]`           {: .lang-javascript} | arrays
`"..."`               {: .lang-javascript} | strings
`for(... in ...) ...` {: .lang-javascript} | for-loops
`(...).(...)`         {: .lang-javascript} | membership
`console.log`         {: .lang-javascript} | printing
`...(...)`            {: .lang-javascript} | function application
`...[...]`            {: .lang-javascript} | array access
{: .table .is-narrow}

There's two places where beginners will likely get tripped-up with notation here in this JavaScript snippet. Why is `console.log(...)` {: .lang-javascript} is a function, but `for(...)` {: .lang-javascript} isn't? They both have parenthesis afterward, but why do they behave so differently? And why does `[...]` {: .lang-javascript} create an array but `names[i]` {: .lang-javascript} _uncreate_ an array? And what happens if you do `names(i)` {: .lang-javascript} or `console.log[...]` {: .lang-javascript}?

Alternatively, you could use a functional approach:
```javascript
["Sally", "Joe", "Tommy"].forEach( console.log );
```
{: .lang-javascript}

Note how much _easier_ this code is for beginners:

`...;`                {: .lang-javascript} | statements
`[...,...]`           {: .lang-javascript} | arrays
`"..."`               {: .lang-javascript} | strings
`(...).(...)`         {: .lang-javascript} | membership
`console.log`         {: .lang-javascript} | printing
`...(...)`            {: .lang-javascript} | function application
{: .table .is-narrow}

#### Python

```clike
for name in ["Sally", "Joe", "Tommy"]:
    print(name)
```
{: .lang-clike}

The Python code _seems_ easy, but there are still so many concepts to cover in a simple snippet. It's not obvious what `name` {: .lang-clike} is doing, nor what the relationships are between `for` {: .lang-clike}, `name` {: .lang-clike}, `in` {: .lang-clike}, and `print` {: .lang-clike}. They all look like normal words, but each of their functions are _very_ different.

`for ... in ...:` {: .lang-clike} | for-loops
`[...,...]`       {: .lang-clike} | arrays
`"..."`           {: .lang-clike} | strings
`print`           {: .lang-clike} | printing
`...(...)`        {: .lang-clike} | function application
{: .table .is-narrow}

#### LISP

```scheme
(for-each display
 (list "Sally" "Joe" "Tommy"))
```
{: .lang-scheme}

LISP is easy. 

Note the lack of variables and assignment — there's no moving-parts to hold in your head! Just functions.

`(... ...)`  {: .lang-scheme} | function application
`(list ...)` {: .lang-scheme} | lists
`"..."`      {: .lang-scheme} | strings
`display`    {: .lang-scheme} | printing
{: .table .is-narrow}

Note the lack of weird for-loop syntax — all you have is a plain `for-each` {: .lang-scheme} function! And function application is easy to teach: the first hting in the parentheses is _always_ the recipe, and everything else is an ingredient, i.e. `(recipe ingredient1 ingredient2)` {: .lang-scheme}. 

There are no weird exceptions or special control structures. You can always follow a simple set of rules to reduce your program into a state you can understand.

And if you don't recognize a function, you can easily look it up online. It's _not_ easy to look up Python's for-loops online, because there are so many things that can go wrong: comprehensions, indentation, 2.7 vs. 3.0 syntax, keys, `range(...)` {: .lang-python}, iterators, dictionaries, variable-name conflicts, etc. Seriously, take a look at how many nuances there are to for-loops in Python and it'll make your head spin.

### Processes are Hard

<!-- and then and then and then... -->

### Objects are Hard

### Syntactic Sugar is Hard

### Variety is Hard

<!-- TODO: there's too many ways to do things in most languages. this makes it hard to remember things and harder to search things -->

<!-- TODO: in lisp, every single thing in the language behaves in the same way. -->

### Data Types are Hard

### Data Structures are Hard

### Mutability is Hard

---

```
list	Return a list containing the arguments.
first	Return first letter of a word, or first word of a sentence.
rest	Return all but the first element of a list. 
cons	Prepend an element to a list.
nil/'() 
define	(Special form) Create a global name (for a procedure or other value).
equal?	Are the two arguments the same thing?
if	(Special form) Choose between two alternatives (see here).
lambda	(Special form) Create a new procedure (see Chapter \lambchop).
```
