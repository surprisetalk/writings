
# Software Sucks

In this text, I'm going to list a bunch of things that we do in software that were terrible, terrible design decisions that are invisibly causing everyone tremendous amounts of pain.

## BASH CLIs

Imagine if we used plain-old functions rather than bash scripts.

That way, applications would expect arguments in a regularized way, rather than this weird `-xvft` types of annotations that have inconsistent conventions and silent failure.

I get that everything is a file is a string, but positional arguments and data-structures are _way_ better than weird APIs that you have to figure out with `--help` or `-h` or `man`, and whose APIs cannot be "discovered" by other services without taking a lot of effort to craft the API in your language-of-choice.

It's disastrous.

## JSON

I have _a lot_ to say about JSON, and how our services communicate in general.

More on that eventually.
