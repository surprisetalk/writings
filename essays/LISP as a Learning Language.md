
## TL;DR

TODO

---

# Learn LISP First

<!-- MIT switched from lisp to python -->

# Learning Programming is Hard

<!-- The biggest problem with learning programming is getting unstuck. -->

<!-- TODO: why don't for-loops return anything? -->

## Syntax is Hard

Think about how difficult it would be to make a compiler for C, Javascript, or Python.

When you're a beginner, every character is a trap.


```c
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

```javascript
var names = ["Sally", "Joe", "Tommy"];
for(var i in names)
  console.log(names[i]);
```

```python
for name in ["Sally", "Joe", "Tommy"]:
    print(name)
```


## Processes are Hard

<!-- and then and then and then... -->

## Objects are Hard

## Syntactic Sugar is Hard

## Variety is Hard

<!-- TODO: there's too many ways to do things in most languages. this makes it hard to remember things and harder to search things -->

<!-- TODO: in lisp, every single thing in the language behaves in the same way. -->

## Data Types are Hard

## Data Structures are Hard

## Mutability is Hard








---

Learning to program is _difficult_.

Imagine how many concepts need to be covered in order to write a for-loop in C:
```c
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

Where do you even begin here‽ 

---

<!-- TODO: make an INTERACTIVE lisp tutorial -->

It's slower to learn JavaScript alone than LISP _with_ JavaScript.

Yeah, seriously.

When you first start programming, _you_ are the compiler. A terrible, terrible compiler. You have to hold variables in _your_ memory. You have to remember every little syntactic nit-pick, because well, that's just how the language was written.
And when you're bad at compiling, you have to decode _error messages_. Stack traces are _not_ written for beginners.

```javascript
var names = ["Sally", "Joe", "Tommy"];
for(var i in names)
  console.log(names[i]);
```

```python
for name in ["Sally", "Joe", "Tommy"]:
  print(name)
```

And we wonder why students get discouraged by C++, Python, and JS.

Even in Python, there are so many symbols that _don't matter_ when you're just trying to _learn_.

<!--
Even for this _minimum_ Python example, a newcomer may ask the following questions:
- What does `for` {: .lang-python} do?
- How is `name` {: .lang-python} connected to `["Sally", "Joe", "Tommy"]` {: .lang-python}?
- What does `in` {: .lang-python} do?
- Why is each name wrapped in a double-quote, like `"Sally"` {: .lang-python}?
- What is `["Sally", "Joe", "Tommy"]` {: .lang-python}?
- Why are there commas?
- What does `print` {: .lang-python} do? What if I don't have a printer?
- What do the parentheses do in `print` {: .lang-python}?
-->

<!-- TODO: processes vs. things -->

<!-- TODO: it's not about quantity of characters! it's about quantity of concepts. how many rules do you need to know? how many things do you need to teach before the student can start simulating the system on their own? how guessable is the system? can you _guess_ how to do things? -->

<!-- TODO: look at SICP (link). holy crap they cover _way_ more ground than other programming courses. -->

<!-- 
the first thing in the parens is the recipe. the other things in the parens are the ingredients. to do something, just keep simplifying the parens until you're done simplifying
(give em a cheatsheet)

that's pretty much it. there is no fumbling with syntax. you ALWAYS know what to do.
-->

<!-- 
1. what are lists?
2. the first thing in the parens is the recipe. the other things in the parens are the ingredients. to do something, just keep simplifying the parens until you're stuck
   - give them a cheat-sheet of core functions WITH EXAMPLES
3. strings, ints, bools
   - give them a cheat-sheet for each datatype WITH EXAMPLES
4. if/else
5. lambda/define
6. pairs & lists
7. recursion
-->

```scheme
(for-each display
 (list "Sally" "Joe" "Tommy"))
```

<!-- TODO: this is _not_ a contrived example. LISP is really this simple! -->

<!-- https://people.eecs.berkeley.edu/~bh/ssch27/appendix-funlist.html -->

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

---

