Coming soon!

<!--

Software engineers are usually good at estimating essential complexity. A particular algorithm can only be so hard, right?

Estimation problems are usually errors of accidental complexity. Unknown unknows plague projects.

But how do we reduce accidental complexity?

We need to create environments that _shield_ accidental complexity from engineers at given levels:
- users shouldn't be able to mess up their applications
- application developers shouldn't be allowed to mess up the operating system (or each others' applications)
- operating system developers shouldn't be able to mess up the hardware

The problem with "shielding" is that sometimes it has negative performance implications. But I'm not so sure. When I write programs in Elm, it's blazing fast because Evan handled all the accidental complexity for me. All my errors are _my_ errors. Except that's not entirely true: accidental complexity seeps in from connecting to external APIs, but once again, I think the way we currently connect things together on the web is _way_ too low-level.

-->
