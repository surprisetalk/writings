<!-----------------------------------------------------------------------------

TODO: Create analogies -- this is all too dry...

* Programmers have a tendency to prematurely optimize.
  * One such optimization is structural -- creating boundaries between things.
    * Structural mistakes are unfortunately sticky. People are afraid (or too lazy) to restructure files. And so stuff piles up.
      * This causes teams to get stuck with bad representations.
      * Because things are spread out, it causes problems to get missed.
      * TODO: More.
   * Rules-of-thumb:
     * Don't abstract into a function/class until it's been copied/pasted _at least_ 3-5 times.
     * Your dependency treee should be _at most_ 3 layers deep: main, primary, secondary.

* Evan Czaplicki on large Elm files 

Example (use pictures!):
* One file has two classes that share a common function. Both classes are instantiated and used by a router.
  * Break out each module into its own file.
    * Now we have to worry about imports.
    * Now we have _three_ or _four_ files.
      * If three files, then we have either duplicated code or an extra parameter.
      * If four files, then we have an extra "helpers" file.
        * But what happens when Helpers grows too large?
          * /lib happens, which is prone to the _exact_ same problems as before.
  * Uh, oh! Something went wrong. Where do I look for the bug? It's hard to find.
  * Uh, oh! I need to change a helper function?
    * Now I have to search through a gazillion files to make sure I didn't mess some other part of the system up.
    * If the parameters change, you have a lot of work to do.
    * If the different files have different needs, now you have to change the code in a bunch of different places.

------------------------------------------------------------------------------>

Coming soon!
