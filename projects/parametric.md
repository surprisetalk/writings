
# Useful Functions and Where to Find Them

Curves and planes are fun.

Especially for software!

## The Magic of [0,1]

If you define your function from 0 to 1, it's really easy to scale it in your program.

For instance, consider `height = maxHeight * f( x / maxWidth )`. In this equation, if `f` is defined from `[0,1]->[0,1]`, then it's intuitive to use its inputs and outputs as percentages! 

## Setting Up Boundaries

Now that you're convinced of the magic of `[0,1]`, how do you want your bounds set up?

The next step is to figure out what you want your output to be when your inputs are every possible combination of `{0,1}`.

It's just like a puzzle!

## Coloring Between the Lines

Now that you've got the edges, it's time to choose a function to start with. This is definitely the hardest part.

When I've got more time, I'll list a collection of useful "starter-packs" here. The starter-packs should accept function argument(s) plus metaparameters for changing their shapes. The movement of the metaparameters is what's important, so use plenty of gifs!

Mirroring, rotating, and stretching is easy! So the important thing is to find something that "moves" the way that you want it to. 

### Customization and Building Functions from Scratch

If none of the starter-packs work for you, here's how you customize or edit your own starter-packs to suit your needs: function composition.

If you want to stretch how a certain argument moves on its way from 0 to 1, wrap it in a function inside of the main function!

In fact, all of the starter-packs are very chainable because they're defined from 0 to 1! But soon I'll list some extra helpful "bumps" that can show you how to properly shift things around. Most of the "bumps" start at 1 and end at 1, so that it doesn't mess with your start/stop points. Honestly, we usually just want to change the slope in an area.

### Working with Multiple Dimensions

I tend to think of dimensions as "situations".

I'll take one or more of the function arguments as the situation variables, and imagine a 2D graph of the most important variable in each "situation".

## Making Landmarks

After you've got the edges, are there any "landmarks" between the edges that should be a certain value?

Add constants and tune the metaparameters until your function meets all your constraints.

## Making it Easy for Computers

You can use numerical analysis tools to generate a final function that easier for computers to use, if you're worried about speed or performance.
