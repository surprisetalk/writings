
## scrapscript

Another little dirty programming language.

<!--

- the os/editor should be made for multiple inputs/outputs

- https://news.ycombinator.com/item?id=21936509

- BSON
  - https://www.google.com/search?q=jsonb&hl=en&ei=l2MnXvapO9X5tAaBk7ygDw&start=10&sa=N&ved=2ahUKEwi20ba7yJXnAhXVPM0KHYEJD_QQ8NMDegQIDBBA&biw=4740&bih=1903
  - https://www.postgresql.org/docs/12/hstore.html
  - https://www.google.com/search?hl=en&q=jsonb%20internal%20represantation
  - https://pgeoghegan.blogspot.com/2014/03/what-i-think-of-jsonb.html
  - https://github.com/prestodb/presto/issues/8167
  - https://www.google.com/search?hl=en&q=bson%20format
  - https://en.wikipedia.org/wiki/BSON
  - https://en.wikipedia.org/wiki/MessagePack
  - https://www.google.com/search?hl=en&q=smile%20encoder%20decoder
  - http://bsonspec.org/

-->

<!--

A single Scrapscript graph DB can implement every social network, FS, tagging system, etc

Scrapbook stores names. Scrapyard stores scraps (slivers). Scrapgraph stores graph edges between hashes. Junkyard can be a simple kv store for storing anything else that needs to be updated more frequently.

All of these can be implemented in the same underlying junkyard kv store.

Wanna add a tag? Add it via scrapgraph. Wanna add a comment? Add it via scrapgraph. Wanna edit that comment? Append the edit via scrapgraph. Add tests? Append via scrapgraph.

Scrapgraph should allow you to see EVERYTHING associated with a particular scrap (videos, images, text, code, whatever). To link to “surprisetalk/foo” rather than the underlying hash, you can hash a type of the variable name as a string.


-->

<!--

“Scrapscript: Sharing is daring”
Most software bugs are human problems, not computer problems. Cosmic waves aren’t common.
The biggest human problem is sharing.
Scrapscript solves during memory with slivers.
Scrapscript solves sharing messages with slivers.
Scrapscript solves sharing names with scrapbooks.
Etc

-->

<!--

domains for joint projects:
- scrap.chat
- scrap.camp : tutorials
- scrap.academy
- scrap.help
- scrap.how
- scrap.info
- scrap.school
- scrap.tips
- scrap.space
- scrap.cash
- scrap.blog
- scrap.cloud
- scrap.domains
- scrap.io
- scrap.site
- scrap.stream
- scrap.news
- scrap.garden
- scrap.city : annual scrapscript conference
- scrap.town : 
- scrap.country
- scrap.world

build your own text editor:
https://news.ycombinator.com/item?id=25712949

nonbacktracking regex:
https://v8.dev/blog/non-backtracking-regexp

A Complete Guide to LLVM for Programming Language Creators
https://mukulrathi.co.uk/create-your-own-programming-language/llvm-ir-cpp-api-tutorial/

json serialization sucks:
https://news.ycombinator.com/item?id=25870793

A Taste of GPU Compute (how functional programming with GPUs works):
https://www.youtube.com/watch?v=eqkAaplKBc4
GLSL/WGSL/SPIR-V works like LLVM-IR for GPUs

-->

<!--

ORC reference counting memory management

https://news.ycombinator.com/item?id=25345770

Perceus reference counting:

https://www.microsoft.com/en-us/research/uploads/prod/2020/11/perceus-tr-v1.pdf

neut:

https://news.ycombinator.com/item?id=23283880

spiral language:

https://news.ycombinator.com/item?id=17519886
https://news.ycombinator.com/item?id=17519138

-->

<!--

Great talk on turning recursive funtions into iterative ones:
https://www.youtube.com/watch?v=vNwukfhsOME

https://www.joachim-breitner.de/blog/778-Don’t_think,_just_defunctionalize
https://youtu.be/xcm_H36v_18
https://www.youtube.com/watch?v=5-P0Jjku3cY&list=PLBqWQH1MiwBSK9wuaATNS701c43VYVTuc&index=9

-->

<!--

Useful WAT/WASM stuff.

https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html

-->

<!--

LLVM Toy Language

http://llvm.org/docs/tutorial/index.html

"A Complete Guide to LLVM for Programming Language Creators":
https://news.ycombinator.com/item?id=25539797

-->

<!--

https://github.com/Geal/nom
https://github.com/pest-parser/pest
https://github.com/pest-parser/pest/blob/a0264c0633226708a086d298b50e59f9cbf8efef/pest/src/macros.rs
https://github.com/pest-parser/pest/blob/35a5b8892c6869e0ed86ca7b67e666e0fce7a797/meta/src/optimizer/mod.rs
https://github.com/pest-parser/pest/blob/0f72cb032c018bed34369f3ff5f589587edb3b96/bootstrap/src/main.rs
https://pest.rs/book/examples/json.html
https://pest.rs/book/examples/csv.html
https://pest.rs/book/examples/awk.html
https://pest.rs/book/grammars/built-ins.html
https://docs.rs/pest/2.1.2/src/pest/span.rs.html#21
https://docs.rs/pest/2.1.2/pest/iterators/struct.Pair.html
https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html#method.by_ref
https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html#method.size_hint
https://docs.rs/pest/2.1.2/pest/error/enum.LineColLocation.html
https://docs.rs/pest/2.1.2/pest/error/enum.InputLocation.html
https://github.com/pest-parser/pest/blob/e6e54d60b0bac702a4759ca1d1d36a26c6d682be/pest/src/error.rs
https://github.com/pest-parser/pest/search?p=2&q=rule&type=&utf8=%E2%9C%93
https://github.com/pest-parser/pest/blob/e6e54d60b0bac702a4759ca1d1d36a26c6d682be/pest/src/span.rs
https://github.com/pest-parser/pest/search?q=mod&unscoped_q=mod
https://doc.rust-lang.org/stable/book/second-edition/
https://www.google.com/search?hl=en&q=rust%20command%20line%20arguments
https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html
https://doc.rust-lang.org/rust-by-example/std/vec.html
https://doc.rust-lang.org/std/boxed/struct.Box.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNTbpd2UZjzwu5cAax3hc_tRCIaIfA%3A1568320723913&ei=06x6XYKsN5KWsQXI4peYDQ&q=rust+cstring&oq=rust+cstring&gs_l=psy-ab.3..0j0i22i30j0i22i10i30j0i22i30l5j0i22i10i30j0i22i30.1921.2080..2283...0.1..0.137.365.0j3......0....1..gws-wiz.......0i71.7HnTUPqOS3g&ved=0ahUKEwjC4ZH9kczkAhUSS6wKHUjxBdMQ4dUDCAs&uact=5
https://doc.rust-lang.org/std/ffi/struct.CString.html
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.iter
https://doc.rust-lang.org/rust-by-example/primitives/array.html
https://www.google.com/search?hl=en&q=rust%20tuple
https://doc.rust-lang.org/rust-by-example/primitives/tuples.html
https://learnxinyminutes.com/docs/rust/
https://www.google.com/search?hl=en&q=rust%20question%20mark
https://m4rw3r.github.io/rust-questionmark-operator
https://doc.rust-lang.org/book/ch04-03-slices.html
https://users.rust-lang.org/t/how-to-get-a-substring-of-a-string/1351
https://www.google.com/search?hl=en&q=rust%20type%20must%20be%20known%20at%20this%20point
https://stackoverflow.com/questions/48653052/type-must-be-known-in-this-context-when-using-iteratorsum
https://users.rust-lang.org/t/why-is-the-type-not-inferred/21786
https://users.rust-lang.org/t/the-ambiguity-of-the-type-of-this-value-must-be-known-in-this-context-error/7912
https://www.google.com/search?hl=en&q=env%20args
https://doc.rust-lang.org/rust-by-example/hello/print/print_debug.html
https://www.google.com/search?hl=en&q=rust%20map
https://hermanradtke.com/2016/09/12/rust-using-and_then-and-map-combinators-on-result-type.html
https://www.reddit.com/r/rust/comments/8gw3b9/how_could_we_combine_a_vector_of_results/
https://play.rust-lang.org/?gist=e82361d8b34dccd20bf6179d3b509f0d&version=stable&mode=debug
https://play.rust-lang.org/?gist=376f01b1cdf2d62bd10d9beb076fd2b2&version=stable&mode=debug
http://xion.io/post/code/rust-iter-patterns.html
https://doc.rust-lang.org/std/primitive.slice.html#method.chunks
https://doc.rust-lang.org/book/ch13-02-iterators.html
https://stackoverflow.com/questions/26757355/how-do-i-collect-into-an-array
https://danielkeep.github.io/itercheat_baked.html
https://doc.rust-lang.org/std/result/enum.Result.html#method.and
https://doc.rust-lang.org/std/primitive.char.html
https://www.reddit.com/r/rust/comments/30c6yb/why_is_accessing_a_char_from_a_str_so_annoying/
https://doc.rust-lang.org/rust-by-example/error/option_unwrap.html
https://doc.rust-lang.org/std/ffi/struct.CString.html
about:blank
https://hermanradtke.com/2015/05/03/string-vs-str-in-rust-functions.html
https://stackoverflow.com/questions/36380094/mismatched-types-expected-str-found-string-when-assigning-string
https://docs.rs/either/1.5.3/either/enum.Either.html
https://internals.rust-lang.org/t/lib-can-we-add-an-enum-either-in-std/4969/6
https://github.com/bluss/either
https://docs.rs/byte_string/1.0.0/byte_string/
https://docs.rs/byte_string/1.0.0/i686-pc-windows-msvc/byte_string/struct.ByteString.html
https://internals.rust-lang.org/t/byte-string-formatting/1148
https://doc.rust-lang.org/book/ch03-02-data-types.html
https://www.cs.brandeis.edu/~cs146a/rust/doc-02-21-2015/book/arrays-vectors-and-slices.html
https://stackoverflow.com/questions/52379284/can-i-get-a-rust-arrays-length-with-only-a-type-not-a-concrete-variable
https://www.google.com/search?hl=en&q=rust%20hex%20string
https://docs.rs/hex-string/0.1.0/hex_string/
https://docs.rs/crate/hex/0.3.2/source/src/lib.rs
https://docs.rs/hex/0.3.1/hex/fn.encode.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNTCz21KC8oXfZAzaNNpYpa7W-AwfQ%3A1568480440544&ei=uBx9XbbTIISd-gTUo6HQBw&q=rust+binary+decode+package+101001&oq=rust+binary+decode+package+101001&gs_l=psy-ab.3..0i71l7.31822325.31823095..31823425...0.1..0.0.0.......1....1..gws-wiz.dAD2qS6OrFM&ved=0ahUKEwi2j_v75NDkAhWEjp4KHdRRCHoQ4dUDCAo&uact=5
https://docs.rs/rspirv/0.5.4/rspirv/binary/struct.Decoder.html
https://stackoverflow.com/questions/27606616/is-there-anything-in-rust-to-convert-a-binary-string-to-an-integer
https://codereview.stackexchange.com/questions/210967/decimal-to-binary-in-rust
https://www.reddit.com/r/rust/comments/36ixl0/converting_a_vector_of_bits_to_an_integer/
https://docs.rs/fixed/0.4.5/fixed/
https://www.leonrische.me/blog/2017/09/06/lisp-parsing-2/
https://www.google.com/search?hl=en&q=rust%20boolean
https://www.google.com/search?hl=en&q=rust%20date
https://rust-lang-nursery.github.io/rust-cookbook/datetime.html
https://rust-lang-nursery.github.io/rust-cookbook/datetime/duration.html#convert-a-local-time-to-another-timezone
https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#examine-the-date-and-time
https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#convert-date-to-unix-timestamp-and-vice-versa
https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#display-formatted-date-and-time
https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#parse-string-into-datetime-struct
https://doc.rust-lang.org/std/fmt/trait.Debug.html
https://stackoverflow.com/questions/22243527/how-to-implement-a-custom-fmtdebug-trait
https://www.google.com/search?hl=en&q=rust%20infinity
https://doc.rust-lang.org/rust-by-example/custom_types/enum.html
https://docs.rs/num-rational/0.2.2/src/num_rational/lib.rs.html#1081-1083
https://pzol.github.io/getting_rusty/posts/20140417_destructuring_in_rust/
https://www.reddit.com/r/rust/comments/2a6omz/question_about_string_splitting/
https://pzol.github.io/getting_rusty/posts/20140417_destructuring_in_rust/
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNTJu7J9DuYqaYs_BdDxjPHO9B7ERA%3A1568594639260&ei=z9p-XaiuD7T09AOczqrYBw&q=rust+sha&oq=rust+sha&gs_l=psy-ab.3..0i20i263j0i67j0i20i263j0l7.4406.5705..5858...0.3..0.96.688.8....2..0....1..gws-wiz.......0i71j35i39.0PLRgeGxLCc&ved=0ahUKEwjo0ZOyjtTkAhU0On0KHRynCnsQ4dUDCAo&uact=5
https://abunchofutils.com/u/computing/sha512-hash-calculator/
https://stackoverflow.com/questions/26836488/how-to-sort-a-vector-in-rust
https://medium.com/@marcinbaraniecki/on-integer-types-in-rust-b3dc1b0a23d3
http://huonw.github.io/blog/2016/04/myths-and-legends-about-integer-overflow-in-rust/
https://github.com/rust-lang/rust/issues/47739
https://stackoverflow.com/questions/52646755/checking-for-integer-overflow-in-rust
https://doc.rust-lang.org/std/primitive.u32.html
https://doc.rust-lang.org/stable/rust-by-example/mod/split.html
https://www.google.com/search?hl=en&q=print%20and%20return%20rust
https://stackoverflow.com/questions/33485203/what-does-missing-lifetime-specifier-mean-when-storing-a-str-in-a-structure
https://www.google.com/search?hl=en&q=rust%20testing
https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html
https://doc.rust-lang.org/book/ch11-01-writing-tests.html
https://en.wikipedia.org/wiki/9,223,372,036,854,775,807
https://medium.com/@jreem/advanced-rust-using-traits-for-argument-overloading-c6a6c8ba2e17
https://www.google.com/search?hl=en&q=rust%20cannot%20return%20value%20referencing%20temporary%20value%20(
https://users.rust-lang.org/t/cannot-return-value-referencing-temporary-value/29009/5
https://doc.rust-lang.org/std/clone/index.html
https://www.google.com/search?hl=en&q=rust%20lambda%20argument
https://doc.rust-lang.org/rust-by-example/fn/closures/input_parameters.html
https://doc.rust-lang.org/1.1.0/book/closures.html
https://stackoverflow.com/questions/36390665/in-rust-how-do-you-pass-a-function-as-a-parameter
https://stevedonovan.github.io/rustifications/2018/08/18/rust-closures-are-hard.html
https://www.reddit.com/r/rust/comments/46w4g4/what_is_rusts_lambda_syntax_and_design_rationale/
https://www.google.com/search?hl=en&q=rust%20impl
https://doc.rust-lang.org/1.8.0/book/traits.html
https://users.rust-lang.org/t/confusion-struct-impl-self-trait/3941/5
https://doc.rust-lang.org/std/boxed/struct.Box.html
https://doc.rust-lang.org/1.20.0/book/first-edition/type-aliases.html
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.chunks
https://stackoverflow.com/questions/42264041/how-do-i-get-an-owned-value-out-of-a-box
https://www.google.com/search?hl=en&q=rust%20collect%20references
https://doc.rust-lang.org/std/slice/struct.Windows.html
https://stackoverflow.com/questions/40613725/iterating-over-a-slices-values-instead-of-references-in-rust/40613870
https://medium.com/@jordan_98525/reference-iterators-in-rust-5603a51b5192
https://docs.rs/itertools/0.7.6/itertools/trait.Itertools.html#method.tuples
https://docs.rs/itertools/0.8.0/itertools/structs/struct.Tuples.html#method.into_buffer
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.unzip
https://doc.rust-lang.org/rust-by-example/trait/clone.html
https://users.rust-lang.org/t/whats-the-difference-between-trait-copy-and-clone/2609/2
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.push
https://doc.rust-lang.org/rust-by-example/generics/where.html
https://www.google.com/search?hl=en&q=no%20method%20map%20found%20rust
https://www.google.com/search?hl=en&q=items%20from%20traits%20can%20only%20be%20used%20if%20the%20trait%20is%20implemented%20and%20in%20scope%20iterator%20%26mut
https://stackoverflow.com/questions/52515361/why-does-the-usage-of-by-ref-take-differ-between-the-iterator-and-read-trait
https://users.rust-lang.org/t/rustc-whining-about-trait-scope-when-its-in-scope/12249
https://users.rust-lang.org/t/the-iterator-trait-isnt-getting-implemented/30521
https://doc.rust-lang.org/rust-by-example/fn/methods.html
https://users.rust-lang.org/t/value-borrowed-after-partial-move/30198/4
https://doc.rust-lang.org/beta/rust-by-example/scope/move.html
https://users.rust-lang.org/t/rust-mutability-moving-and-borrowing-the-straight-dope/22166
https://rufflewind.com/2017-02-15/rust-move-copy-borrow
https://www.reddit.com/r/rust/comments/46rii1/when_to_borrow_move_or_copy/
https://www.google.com/search?hl=en&q=rust%20chunks
https://stackoverflow.com/questions/42134874/are-there-equivalents-to-slicechunks-windows-for-iterators-to-loop-over-pairs
https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.new
https://www.google.com/search?hl=en&q=rust%20hashmap
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://doc.rust-lang.org/std/option/enum.Option.html#method.map_or
https://stackoverflow.com/questions/27244465/merge-two-hashmaps-in-rust
https://stackoverflow.com/questions/48241809/how-can-i-create-a-hashmap-of-different-types-and-test-them-for-equality
https://stackoverflow.com/questions/34555837/sort-hashmap-data-by-value
https://twitter.com/ag_dubs/status/731960372157124609?lang=en
https://www.reddit.com/r/rust/comments/453bzk/how_to_implement_fromiterator/
https://doc.rust-lang.org/std/collections/struct.HashSet.html
https://pzol.github.io/getting_rusty/posts/20140417_destructuring_in_rust/
https://docs.rs/rust-crypto/0.2.36/crypto/sha3/struct.Sha3.html
https://www.reddit.com/r/rust/comments/6f0v8r/how_to_calculate_sha512digest_in_rust/
https://doc.rust-lang.org/std/hash/trait.Hash.html
https://doc.rust-lang.org/rust-by-example/fn/methods.html
https://doc.rust-lang.org/edition-guide/rust-2018/module-system/path-clarity.html
https://doc.rust-lang.org/cargo/guide/dependencies.html#adding-a-dependency
https://doc.rust-lang.org/1.1.0/book/crates-and-modules.html
https://www.google.com/search?hl=en&q=rust%20hash
https://users.rust-lang.org/t/what-is-right-ways-to-concat-strings/3780/5
https://doc.rust-lang.org/std/fmt/trait.Display.html
https://doc.rust-lang.org/std/primitive.f64.html#method.is_infinite
https://docs.rs/num-rational/0.2.2/num_rational/struct.Ratio.html
https://internals.rust-lang.org/t/iterating-over-range-char/8965
https://stackoverflow.com/questions/16267578/how-to-convert-char-to-string
https://doc.rust-lang.org/rust-by-example/trait.html
https://doc.rust-lang.org/edition-guide/rust-2018/error-handling-and-panics/the-question-mark-operator-for-easier-error-handling.html
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.new
https://users.rust-lang.org/t/suppress-warnings-from-the-cargo-command/10536
https://doc.rust-lang.org/reference/items/static-items.html
https://doc.rust-lang.org/1.26.1/reference/items/constant-items.html

https://docs.rs/rust-crypto/0.2.36/crypto/sha3/struct.Sha3.html#method.sha3_512
https://docs.rs/digest/0.8.0/digest/trait.DynDigest.html#tymethod.input
https://github.com/RustCrypto/hashes
https://docs.rs/digest/0.8.1/digest/
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNSu22whsRkC3GnSf68P9eobg4NsQg%3A1569793992364&ei=yCeRXcviFcTY-gTh8bnIDA&q=rust+hex+literal&oq=rust+hex+literal&gs_l=psy-ab.3..0.2999.5149..5322...0.1..0.209.904.7j1j1......0....1..gws-wiz.......0i71j35i39j0i67j0i20i263j0i22i30.ygMicLR-fxk&ved=0ahUKEwjL5qOqgvfkAhVErJ4KHeF4DskQ4dUDCAo&uact=5
https://docs.rs/hex-literal/0.2.1/hex_literal/
https://www.maketecheasier.com/verify-md5-sha-1-sha-256-checksum-windows10/
https://www.google.com/search?hl=en&q=rust%20macros
https://doc.rust-lang.org/1.7.0/book/macros.html
https://doc.rust-lang.org/beta/book/first-edition/macros.html
https://www.google.com/search?hl=en&q=rust%20tests
https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html
https://doc.rust-lang.org/book/ch11-01-writing-tests.html
https://doc.rust-lang.org/book/second-edition/ch11-03-test-organization.html
https://ricardomartins.cc/2016/06/08/interior-mutability
https://github.com/rust-lang-nursery/api-guidelines/issues/6
https://doc.rust-lang.org/1.30.0/book/first-edition/closures.html
https://www.reddit.com/r/rust/comments/63lvkt/best_way_to_store_closures_or_function_pointers/
https://learning-rust.github.io/docs/e4.unwrap_and_expect.html
https://github.com/pest-parser/pest/blob/11940ab9f1a691a5e49d7eb2d822a3f478cf13c3/pest/src/span.rs
https://github.com/rust-lang/rfcs/blob/master/text/0001-private-fields.md
https://doc.rust-lang.org/1.4.0/std/macro.panic!.html
https://doc.rust-lang.org/beta/std/iter/trait.Iterator.html#method.nth
https://www.google.com/search?hl=en&q=rust%20iterate%20extra%20item
https://doc.rust-lang.org/nightly/rust-by-example/traits/supertraits.html
https://doc.rust-lang.org/1.9.0/book/lifetimes.html
https://github.com/Geal/nom
https://github.com/tagua-vm/parser
https://github.com/xshade-lang/xshade/blob/master/src/parser.rs
https://github.com/xshade-lang/xshade/blob/master/src/ast.rs
https://github.com/fflorent/nom_locate
https://docs.rs/nom_locate/1.0.0/nom_locate/
https://docs.rs/nom_locate/1.0.0/src/nom_locate/lib.rs.html#121
https://github.com/fflorent/nom_locate/blob/master/FAQ.md
https://docs.rs/nom_locate/1.0.0/nom_locate/struct.LocatedSpanEx.html
https://en.wikipedia.org/wiki/Tagged_union
https://doc.rust-lang.org/rust-by-example/std_misc/channels.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNRk5LQQbKIvxKqx5cDV2hvJEtv9GQ%3A1570077949156&ei=_XyVXcKTCZHa-gTH3L6wDw&q=supertraits+rust&oq=supertraits+rust&gs_l=psy-ab.3..0i22i30l2.3865.4213..4476...0.2..0.128.502.3j2......0....1..gws-wiz.......0i71j0j0i30.lWIcEqzO1Iw&ved=0ahUKEwiChreTpP_kAhURrZ4KHUeuD_YQ4dUDCAo&uact=5
https://users.rust-lang.org/t/supertraits-vs-generic-implementations/21266
https://doc.rust-lang.org/reference/items/traits.html
https://doc.rust-lang.org/book/second-edition/ch19-03-advanced-traits.html
https://docs.rs/sha2/0.5.3/src/sha2/sha512.rs.html#78-80
https://stackoverflow.com/questions/30218886/how-to-implement-iterator-and-intoiterator-for-a-simple-struct
https://doc.rust-lang.org/stable/std/iter/
https://medium.com/@bugaevc/understanding-rust-ownership-borrowing-lifetimes-ff9ee9f79a9c
https://dev.to/saiumesh/rust-ownership-and-borrowing-3o5d
https://doc.rust-lang.org/book/second-edition/ch04-00-understanding-ownership.html
https://doc.rust-lang.org/1.8.0/book/references-and-borrowing.html
https://riptutorial.com/rust/example/15353/ownership-and-borrowing
http://squidarth.com/rc/rust/2018/05/31/rust-borrowing-and-ownership.html
https://rufflewind.com/2017-02-15/rust-move-copy-borrow
https://news.ycombinator.com/item?id=11093389
https://www.reddit.com/r/rust/comments/5u6e6f/graphical_depiction_of_ownership_and_borrowing_in/
https://stackoverflow.com/questions/14154753/how-do-i-make-an-http-request-from-rust/14189088#14189088
https://rust-lang-nursery.github.io/api-guidelines/naming.html
https://doc.rust-lang.org/rust-by-example/conversion/from_into.html
https://www.thesaurus.com/browse/morsel?s=t
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNSX8BGLAHbS2RLgH17nSqNwAxLfZw%3A1570301318911&ei=huWYXcidN8jY-gTmm4g4&q=rust+mut+borrow&oq=rust+mut+borrow&gs_l=psy-ab.3..0i22i30l10.6062.8232..8446...2.6..0.140.955.0j8......0....1..gws-wiz.......0i71j33i160.4d0bR6Oi_YY&ved=0ahUKEwjI-Lai5IXlAhVIrJ4KHeYNAgcQ4dUDCAo&uact=5
https://doc.rust-lang.org/1.8.0/book/mutability.html
https://doc.rust-lang.org/rust-by-example/scope/borrow/mut.html
https://doc.rust-lang.org/stable/rust-by-example/std_misc/channels.html
https://doc.rust-lang.org/std/result/enum.Result.html
https://stackoverflow.com/questions/29530011/creating-a-vector-of-zeros-for-a-specific-size
https://docs.rs/hex/0.3.1/hex/trait.FromHex.html
https://www.google.com/search?hl=en&q=rust%20cli
https://docs.rs/failure/0.1.6/failure/
https://boats.gitlab.io/failure/guidance.html
https://docs.rs/failure/0.1.6/failure/index.html
https://docs.rs/failure/0.1.6/failure/trait.Fail.html
https://github.com/clap-rs/clap/blob/master/examples/01a_quick_example.rs
https://docs.rs/clap/2.33.0/clap/index.html
https://doc.rust-lang.org/rust-by-example/error/multiple_error_types.html
https://deterministic.space/hook-into-rustc-errors.html
https://kbknapp.github.io/clap-rs/clap/struct.App.html
https://doc.rust-lang.org/beta/std/env/index.html
https://doc.rust-lang.org/book/ch12-05-working-with-environment-variables.html
https://www.google.com/search?hl=en&q=rust%20use%20bin
https://www.google.com/search?hl=en&q=rust%20nice%20error%20messages
https://learning-rust.github.io/docs/e7.custom_error_types.html
https://docs.rs/url/2.1.0/url/
https://doc.rust-lang.org/std/convert/trait.Into.html
https://doc.rust-lang.org/std/convert/trait.TryInto.html#associatedtype.Error
https://ricardomartins.cc/2016/08/03/convenient_and_idiomatic_conversions_in_rust
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.try_fold
https://www.reddit.com/r/rust/comments/87ivxq/tryfromtryinto_traits_have_been_stabilized/
https://doc.rust-lang.org/std/convert/trait.TryFrom.html#associatedtype.Error
https://doc.rust-lang.org/std/option/enum.Option.html
https://stackoverflow.com/questions/40516692/why-dont-we-implement-all-the-functions-from-iterator-to-implement-an-iterator
https://www.google.com/search?hl=en&q=rust%20parse%20trait
https://doc.rust-lang.org/std/str/trait.FromStr.html
https://doc.rust-lang.org/1.2.0/book/macros.html
https://doc.rust-lang.org/beta/book/first-edition/macros.html
https://medium.com/@phoomparin/a-beginners-guide-to-rust-macros-5c75594498f1
https://danielkeep.github.io/quick-intro-to-macros.html
https://danielkeep.github.io/tlborm/book/index.html
https://github.com/rust-lang/blog.rust-lang.org/issues/285    

https://www.google.com/search?hl=en&q=rust%20proc%20macro%202
https://blog.rust-lang.org/2018/12/21/Procedural-Macros-in-Rust-2018.html
https://github.com/alexcrichton/proc-macro2
https://github.com/Geal/nom
https://github.com/cout970/Elm-interpreter/tree/master/src/parsers
https://github.com/cout970/Elm-interpreter/blob/master/src/parsers/statement.rs
https://www.google.com/search?hl=en&q=rust%20anonymous%20struct
https://internals.rust-lang.org/t/pre-rfc-unnamed-struct-types/3872/34
https://doc.rust-lang.org/rust-by-example/custom_types/structs.html
https://stackoverflow.com/questions/39008880/is-it-possible-to-declare-local-anonymous-structs-in-rust
https://stackoverflow.com/questions/27582739/how-do-i-create-a-hashmap-literal
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://www.google.com/search?hl=en&q=rust%20reference%20to%20function
https://smallcultfollowing.com/babysteps/blog/2013/04/30/the-case-of-the-recurring-closure/
https://stevedonovan.github.io/rust-gentle-intro/nom-intro.html
https://stackoverflow.com/questions/51257031/parsing-an-integer-with-nom-always-results-in-incomplete
https://www.leonrische.me/blog/2017/09/06/lisp-parsing-2/
https://docs.rs/crate/nom/4.2.3
https://github.com/Geal/nom/blob/master/examples/json.rs
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://github.com/Geal/nom/search?q=multispace&unscoped_q=multispace
https://github.com/dtolnay/quote
https://www.google.com/search?hl=en&q=rust%20static%20vectory
https://stackoverflow.com/questions/42764016/creating-a-static-const-vecstring
https://www.reddit.com/r/rust/comments/5rxbjk/initializing_static_vec_at_runtime/
https://crates.io/crates/lazy_static
https://stackoverflow.com/questions/55009665/how-do-i-make-a-nom-whitespace-parser-that-also-skips-line-oriented-comments
https://www.google.com/search?hl=en&q=nom%20int%20float
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://docs.rs/num-rational/0.2.2/num_rational/struct.Ratio.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNQJZMGqQQaoJ434QQeLhwJ_vd_7lQ%3A1571713353547&ei=SXGuXdCGIdi4-gTGw6KoDw&q=republish+rust&oq=republish+rust&gs_l=psy-ab.3..0i13i30j0i13i5i30j0i8i13i30l3j0i8i13i10i30j0i8i13i30.7886.9624..9870...0.2..0.115.1228.13j1....2..0....1..gws-wiz.......0i71j35i39j0i67j0j0i10j0i22i30j0i22i10i30j0i13j33i299j33i160.pPPBS_zHqF4&ved=0ahUKEwiQz4HB8K7lAhVYnJ4KHcahCPUQ4dUDCAo&uact=5
https://stackoverflow.com/questions/55009665/how-do-i-make-a-nom-whitespace-parser-that-also-skips-line-oriented-comments
https://stackoverflow.com/questions/27582739/how-do-i-create-a-hashmap-literal
https://github.com/dtolnay/quote
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.unzip
https://docs.serde.rs/syn/struct.Ident.html
https://docs.rs/syn/0.12.15/syn/struct.Ident.html
https://doc.rust-lang.org/beta/proc_macro/struct.Ident.html
https://www.reddit.com/r/rust/comments/2ghy90/for_loops_any_nice_way_to_get_number_of_iterations/
https://doc.rust-lang.org/std/iter/trait.Iterator.html
https://tinkering.xyz/introduction-to-proc-macros/
https://doc.rust-lang.org/1.7.0/reference.html#byte-and-byte-string-literals
https://doc.rust-lang.org/rust-by-example/primitives/array.html
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.partition
https://cbreeden.github.io/Macros11/
https://doc.rust-lang.org/std/collections/struct.HashSet.html
https://doc.rust-lang.org/book/ch11-01-writing-tests.html
https://github.com/rust-lang/rust/blob/master/src/libcore/ops/range.rs
https://doc.rust-lang.org/std/collections/struct.HashSet.html#method.union
https://doc.rust-lang.org/rust-by-example/std/hash/hashset.html
https://doc.rust-lang.org/reference/types/function-pointer.html
https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.values_mut
https://github.com/rtfeldman/roc/tree/master/builtins
https://doc.rust-lang.org/std/collections/index.html
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.last
https://doc.rust-lang.org/std/collections/struct.VecDeque.html
https://www.google.com/search?hl=en&q=write%20language%20stack
https://www.google.com/search?hl=en&q=calculator%20stack
https://www.google.com/search?hl=en&q=call%20stack
https://en.wikipedia.org/wiki/Forth_(programming_language)
https://www.google.com/search?hl=en&q=rust%20hashmap%20map%20values
https://doc.rust-lang.org/rust-by-example/fn/closures/input_functions.html
https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_pointers.html
https://kevinlynagh.com/notes/match-vs-lookup/
https://doc.rust-lang.org/rust-by-example/flow_control/while_let.html
https://play.rust-lang.org/?gist=b851f7f6039984989dcf53ddbcf54364&version=nightly&mode=debug&edition=2018
https://stackoverflow.com/questions/27597854/type-aliases-for-closures
https://doc.rust-lang.org/std/collections/struct.HashSet.html#method.difference
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.split_off
https://github.com/Geal/nom/issues/682
https://github.com/Geal/nom/tree/4.2.3
https://github.com/balajisivaraman/basic_calculator_rs/blob/master/src/parser.rs
https://github.com/rozbb/nom-lua53/blob/master/src/num.rs
https://github.com/ms705/nom-sql/blob/405d1c032ab56a8a46431311f715d28a0499ab25/src/parser.rs
https://github.com/cout970/Elm-interpreter/blob/dd916664e2f11d6ad87541fb3cd54f155f53303d/elm.ebnf
https://github.com/sozu-proxy/sozu/blob/master/lib/src/protocol/http/parser.rs
https://github.com/xshade-lang/xshade/blob/master/src/parser.rs
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://www.reddit.com/r/rust/comments/8vhojh/hey_rustaceans_got_an_easy_question_ask_here/e1sejia/
https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html
https://www.reddit.com/r/rust/comments/8rpzjd/parsing_string_literals_in_nom/
https://github.com/Geal/nom/issues/787
https://docs.rs/nom/3.2.0/nom/macro.escaped.html
https://github.com/Geal/nom/issues/395
https://stackoverflow.com/questions/30933567/create-a-vector-from-iterating-hashmap
https://www.google.com/search?hl=en&q=nom%20hex%20slice
https://en.wikipedia.org/wiki/Hexadecimal
https://en.wikipedia.org/wiki/SHA-2
https://github.com/Geal/nom/issues/795
https://docs.rs/nom/4.0.0-beta2/nom/types/struct.CompleteStr.html
https://doc.rust-lang.org/beta/std/primitive.u64.html
https://stackoverflow.com/questions/29445026/converting-number-primitives-i32-f64-etc-to-byte-representations
https://en.wikipedia.org/wiki/SHA-2
https://stackoverflow.com/questions/23430735/how-to-convert-vecchar-to-a-string
https://stackoverflow.com/questions/46290655/get-the-string-length-in-characters-in-rust

https://www.google.com/search?hl=en&q=ml%20type%20system
https://en.wikipedia.org/wiki/ML_(programming_language)
https://en.wikipedia.org/wiki/Standard_ML
http://gallium.inria.fr/~fpottier/publis/emlti-final.pdf
https://www.cs.cmu.edu/~fp/papers/pldi91.pdf
https://cseweb.ucsd.edu/~dstefan/cse130-winter17/book/ch06.pdf

https://www.google.com/search?hl=en&q=make%20a%20type%20checker
https://www.google.com/search?hl=en&q=make%20a%20type%20system
https://en.wikipedia.org/wiki/Type_system
https://thosakwe.com/compiler-writing-a-basic-static-type-system/
https://blog.mgechev.com/2017/08/05/typed-lambda-calculus-create-type-checker-transpiler-compiler-javascript/
https://www.google.com/search?hl=en&q=hindley%20milner
https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system
https://stackoverflow.com/questions/399312/what-is-hindley-milner
https://bitbucket.org/puffnfresh/js-type-inference/src/default/types.js
https://bitbucket.org/puffnfresh/js-type-inference/src/default/typeinference.js
https://en.wikipedia.org/wiki/System_F
http://dev.stephendiehl.com/fun/006_hindley_milner.html
https://legacy-blog.akgupta.ca/blog/2013/06/07/so-you-still-dont-understand-hindley-milner-part-3/
https://www.lesswrong.com/posts/vTS8K4NBSi9iyCrPo/a-reckless-introduction-to-hindley-milner-type-inference
https://boxbase.org/entries/2018/mar/5/hindley-milner/
https://en.wikipedia.org/wiki/Strongly_connected_component
https://news.ycombinator.com/item?id=15054752
https://news.ycombinator.com/item?id=5606039

https://github.com/pest-parser/pest
https://github.com/pest-parser/pest/blob/master/derive/src/lib.rs
https://github.com/pest-parser/pest/blob/6e6a099d5db465b128cda68fc3d748b562a007b8/generator/src/macros.rs
https://github.com/pest-parser/pest/blob/6e6a099d5db465b128cda68fc3d748b562a007b8/generator/src/lib.rs
https://github.com/pest-parser/pest/search?q=grammar&unscoped_q=grammar
https://github.com/pest-parser/pest/blob/f781c62e1aa15784c2c25a7a33dae44d7caf0f6b/derive/src/lib.rs
https://doc.rust-lang.org/reference/procedural-macros.html
https://danielkeep.github.io/quick-intro-to-macros.html
https://dev.to/jeikabu/rust-derive-macros-o38
https://docs.rs/syn/1.0.5/syn/
https://github.com/dtolnay/syn/blob/master/examples/lazy-static/lazy-static/src/lib.rs
https://github.com/dtolnay/syn/blob/master/examples/heapsize/heapsize/src/lib.rs
https://crates.io/crates/quote
https://docs.rs/nom/5.0.1/nom/
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://github.com/Geal/nom/tree/master/doc
https://github.com/Geal/nom/search?q=named_args&unscoped_q=named_args
https://github.com/Geal/nom/blob/master/doc/making_a_new_parser_from_scratch.md
https://github.com/Geal/nom/blob/master/doc/error_management.md
https://github.com/dtolnay/syn
https://www.google.com/search?hl=en&q=tokenstream%20rust
https://crates.io/crates/quote
https://docs.rs/quote/1.0.2/quote/trait.ToTokens.html

https://package.elm-lang.org/packages/elm/core/latest/Task
https://package.elm-lang.org/packages/elm/parser/1.1.0/Parser#sequence
https://github.com/elm/parser/blob/1.1.0/src/Parser/Advanced.elm
https://github.com/elm/parser/blob/master/semantics.md
https://github.com/elm/parser/blob/master/examples/Math.elm
https://github.com/elm/parser/blob/master/examples/DoubleQuoteString.elm
https://package.elm-lang.org/packages/elm/parser/latest/Parser-Advanced
https://github.com/elm/parser/blob/master/src/Parser.elm
https://github.com/elm/parser/blob/master/src/Parser/Advanced.elm
https://github.com/elm/parser/blob/master/src/Elm/Kernel/Parser.js
https://package.elm-lang.org/packages/elm/core/latest/List

https://github.com/quietboil/include-sql/blob/master/proc-macro/src/lib.rs
https://github.com/quietboil/include-sql/blob/master/proc-macro/src/sql.rs
https://github.com/dtolnay/syn/blob/master/examples/lazy-static/lazy-static/src/lib.rs
https://doc.rust-lang.org/1.30.0/book/first-edition/const-and-static.html
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://github.com/Geal/nom
https://github.com/tagua-vm/parser/search?q=nom&unscoped_q=nom
https://github.com/xshade-lang/xshade/blob/master/src/parser.rs
https://docs.rs/nom/5.0.1/nom/
https://github.com/Geal/nom/blob/master/doc/making_a_new_parser_from_scratch.md
https://docs.rs/nom/5.0.1/nom/number/complete/index.html
https://docs.rs/nom/5.0.1/nom/character/index.html
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://stevedonovan.github.io/rust-gentle-intro/nom-intro.html
https://github.com/dtolnay/quote
https://docs.rs/quote/1.0.2/quote/macro.quote.html

https://github.com/folkertdev/elm-sha2/blob/1.0.0/src/SHA512.elm

-->

<!--

https://github.com/pest-parser/pest
https://pest.rs/
https://pest.rs/book/intro.html
https://docs.rs/pest/2.1.3/pest/?search=assoc
https://www.google.com/search?hl=en&q=rust%20as_slice
https://doc.rust-lang.org/std/vec/struct.Vec.html
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.fuse
https://doc.rust-lang.org/std/primitive.slice.html#method.chunks_exact
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://docs.rs/itertools/0.9.0/itertools/trait.Itertools.html#method.chunks
https://www.reddit.com/r/rust/comments/8fpubp/how_to_remove_the_1st_character_from_str/
https://www.google.com/search?safe=off&hl=en&sxsrf=ALeKk00GN9BCdk4MuOTvZw_hS5mPGli8ng%3A1585201186539&ei=IkB8XvPHIMLi-gSc2Y94&q=rust+enum+compare&oq=rust+enum+compare&gs_l=psy-ab.3..35i39j0j0i22i30l6.4167.4241..4704...0.3..0.210.338.0j1j1......0....1..gws-wiz.......0i71.0LUIF6OVxJU&ved=0ahUKEwjz4PvMtrfoAhVCsZ4KHZzsAw8Q4dUDCAo&uact=5
https://en.wikipedia.org/wiki/Shunting-yard_algorithm
https://en.wikipedia.org/wiki/Operator-precedence_parser
https://effbot.org/zone/simple-top-down-parsing.htm
https://en.wikipedia.org/wiki/Operator-precedence_parser#Example_execution_of_the_algorithm
https://www.google.com/search?hl=en&q=rust%20chop%20off%20first%20character%20string
https://www.reddit.com/r/rust/comments/8fpubp/how_to_remove_the_1st_character_from_str/
https://stackoverflow.com/questions/38447780/how-to-crop-characters-off-the-beginning-of-a-string-in-rust
https://www.google.com/search?hl=en&q=rust%20hashmap%20union
https://stackoverflow.com/questions/27244465/merge-two-hashmaps-in-rust
https://hub.packtpub.com/introducing-llvm-intermediate-representation/
https://github.com/Geal/nom
https://docs.rs/nom/5.1.1/nom/macro.alt.html
https://stevedonovan.github.io/rust-gentle-intro/nom-intro.html

https://medium.com/@ericdreichert/how-to-print-during-rust-tests-619bdc7ccebc
https://doc.rust-lang.org/book/ch11-02-running-tests.html
https://doc.rust-lang.org/book/ch11-03-test-organization.html
https://doc.rust-lang.org/cargo/guide/tests.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNRj5AlghFWqB5JmBk-FevdHrhbOEQ%3A1573787493246&ei=ZRfOXfrSDqDC0PEPqciDuAY&q=rust+iter+tap&oq=rust+iter+tap&gs_l=psy-ab.3..33i160.5201.6463..6631...0.1..0.201.1277.10j2j1....2..0....1..gws-wiz.......0i71j35i39j0i67j0j0i20i263j0i273j0i10j0i22i30.X1IKZrtD2UI&ved=0ahUKEwi6mfKjn-vlAhUgITQIHSnkAGcQ4dUDCAo&uact=5
https://doc.rust-lang.org/beta/std/iter/trait.Iterator.html
https://docs.rs/tap/0.2.0/tap/
https://docs.rs/tap/0.4.0/tap/
https://stackoverflow.com/questions/36941851/whats-an-idiomatic-way-to-print-an-iterator-separated-by-spaces-in-rust
https://doc.rust-lang.org/std/primitive.slice.html#method.sort
https://doc.rust-lang.org/rust-by-example/fn/closures/input_parameters.html
https://www.google.com/search?hl=en&q=rust%20impl%20hash
https://doc.rust-lang.org/std/hash/trait.Hash.html
https://www.google.com/search?hl=en&q=base64%20efficiency
https://en.wikipedia.org/wiki/Binary-to-text_encoding
https://en.wikipedia.org/wiki/Ascii85#RFC_1924_version
https://en.wikipedia.org/wiki/Ascii85#RFC_1924_version
https://en.wikipedia.org/wiki/YEnc
https://github.com/diafygi/Offset248
https://en.wikipedia.org/wiki/Hexadecimal
https://varkor.github.io/blog/2019/01/11/const-types-traits-and-implementations-in-Rust.html#opting-out-of-const-trait-bounds-with-const
https://github.com/seanmonstar/reqwest
https://www.google.com/search?hl=en&q=rust%20run%20an%20async%20function%20inside%20synchronous
https://dev.to/gruberb/explained-how-does-async-work-in-rust-46f8
https://www.google.com/search?hl=en&q=rust%20async
https://rust-lang.github.io/async-book/01_getting_started/04_async_await_primer.html?highlight=block#asyncawait-primer
https://www.google.com/search?hl=en&q=rust%20block_on
https://users.rust-lang.org/t/what-is-the-equivalent-of-block-on-from-futures-0-2-in-futures-0-1-25/22393/2
https://docs.rs/futures/0.3.1/futures/future/fn.poll_fn.html
https://jsdw.me/posts/rust-asyncawait-preview/
https://rust-lang.github.io/async-book/05_streams/02_iteration_and_concurrency.html
https://www.youtube.com/watch?v=wxPehGkoNOw
https://www.google.com/search?hl=en&q=rust%20parse
https://doc.rust-lang.org/stable/std/str/trait.FromStr.html
https://doc.rust-lang.org/stable/std/str/trait.FromStr.html#associatedtype.Err
https://doc.rust-lang.org/std/str/trait.FromStr.html
https://www.google.com/search?hl=en&q=rust%20cli%20arguments
https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html
https://rust-lang-nursery.github.io/cli-wg/tutorial/cli-args.html
https://docs.rs/clap/2.33.0/clap/
https://github.com/clap-rs/clap
https://www.google.com/search?hl=en&q=rust%20uri
https://docs.rs/reqwest/0.10.0-alpha.2/reqwest/
https://docs.rs/reqwest/0.10.0-alpha.2/reqwest/fn.get.html
https://doc.rust-lang.org/std/fmt/trait.Display.html
https://github.com/Geal/nom/blob/master/doc/error_management.md
https://docs.rs/nom/5.0.0/nom/error/trait.ParseError.html
https://doc.rust-lang.org/std/str/trait.FromStr.html
https://github.com/clap-rs/clap
https://github.com/clap-rs/clap_generate
https://stackoverflow.com/questions/55148856/how-do-i-use-stdin-if-no-positional-arguments-are-given-with-clap
https://www.google.com/search?hl=en&q=rust%20stdin
https://doc.rust-lang.org/std/io/fn.stdin.html
https://doc.rust-lang.org/std/io/struct.Stdin.html
https://doc.rust-lang.org/std/io/trait.Read.html#method.read_to_end
https://github.com/Geal/nom
https://docs.rs/nom/5.0.1/nom/macro.alt.html?search=alt
https://www.google.com/search?hl=en&q=nom%20context
https://www.reddit.com/r/rust/comments/7a80l5/parsing_with_nom_keeping_track_of_position_in/
https://github.com/fflorent/nom_locate
https://docs.rs/nom_locate/1.0.0/nom_locate/struct.LocatedSpanEx.html#method.get_column
https://docs.rs/nom/5.0.1/nom/error/trait.ParseError.html
https://docs.rs/nom/5.0.1/nom/error/fn.make_error.html
https://docs.rs/nom/5.0.1/nom/error/struct.VerboseError.html
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
http://unhandledexpression.com/general/2019/06/17/nom-5-is-here.html
https://stackoverflow.com/questions/54735672/how-do-i-use-nom-to-parse-a-string-with-sign-into-an-i32
https://github.com/Geal/nom/tree/master/doc
https://github.com/rust-bakery/generator_nom/blob/master/src/main.rs
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://www.google.com/search?hl=en&q=the%20return%20type%20of%20a%20function%20must%20have%20a%20statically%20known%20size
https://doc.rust-lang.org/book/ch10-02-traits.html#traits-as-parameters
https://github.com/Geal/nom/blob/master/doc/error_management.md
https://github.com/Geal/nom/blob/5405e1173f1052f7e006dcb0b9cfda2b06557b65/examples/json.rs#L209-L286
https://www.google.com/search?hl=en&q=rust%20lifetimes%20closures
https://users.rust-lang.org/t/explicit-lifetime-required-in-closure/23356/11
https://users.rust-lang.org/t/need-help-with-closure-lifetimes/15155
https://stevedonovan.github.io/rustifications/2018/08/18/rust-closures-are-hard.html
https://stackoverflow.com/questions/31403723/how-to-declare-a-lifetime-for-a-closure-argument
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://www.google.com/search?hl=en&q=nom%20line%20comments
https://stackoverflow.com/questions/55009665/how-do-i-make-a-nom-whitespace-parser-that-also-skips-line-oriented-comments
https://github.com/Geal/nom/issues/14
https://doc.rust-lang.org/std/primitive.f64.html
https://doc.rust-lang.org/rust-by-example/std_misc/channels.html
https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.contains_key
https://www.google.com/search?hl=en&q=simple%20recursive%20function
https://en.wikipedia.org/wiki/Recursion_(computer_science)
https://www.wolframalpha.com/input/?i=9%21
https://docs.rs/rust-crypto/0.2.36/crypto/sha2/index.html
https://doc.rust-lang.org/std/vec/struct.Vec.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNSPauOcMFWtfnom5NFwQsIKg1d4BQ%3A1575241186562&ei=4kXkXd3zIZfN-gSu4bzgDg&q=rust+impl+iter&oq=rust+impl+iter&gs_l=psy-ab.3..35i39l2j0j0i22i30l3.1111.1503..1744...0.2..0.124.319.1j2......0....1..gws-wiz.......0i71.x0mVMLBvHkY&ved=0ahUKEwjd7PDaxpXmAhWXpp4KHa4wD-wQ4dUDCAo&uact=5
https://doc.rust-lang.org/rust-by-example/trait/iter.html
https://stackoverflow.com/questions/30218886/how-to-implement-iterator-and-intoiterator-for-a-simple-struct
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNSwmnQa1sV8amaXFt3qboblCRU8Jg%3A1575243279746&ei=D07kXeaJLcv5-gTFyoHgCw&q=rust+coerce+type+trait&oq=rust+coerce+type+trait&gs_l=psy-ab.3..33i160.3743.5166..5455...0.1..0.114.626.2j4......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30.bLbGZFc3E1M&ved=0ahUKEwimzf7AzpXmAhXLvJ4KHUVlALwQ4dUDCAo&uact=5
https://doc.rust-lang.org/nomicon/coercions.html
https://www.google.com/search?hl=en&q=rust%20return%20trait%20different%20types
https://blog.jcoglan.com/2019/04/22/generic-returns-in-rust/
https://www.ncameron.org/blog/abstract-return-types-aka--impl-trait-/
https://www.google.com/search?hl=en&q=rust%20return%20abstract%20type
https://www.ncameron.org/blog/abstract-return-types-aka--impl-trait-/
https://doc.rust-lang.org/std/option/enum.Option.html#method.map_or_else
https://www.youtube.com/results?search_query=type+inference
https://www.youtube.com/watch?v=ytPAlhnAKro
https://github.com/kritzcreek/fby19/blob/master/src/Typechecker.hs#L47
https://github.com/bollu/timi/blob/master/src/machine.rs
https://github.com/segeljakt/type-theory/tree/master/src
https://langserver.org/
https://docs.rs/codespan/0.3.0/codespan/
https://github.com/Geal/nom/blob/master/src/multi/mod.rs#L238
https://github.com/Geal/nom/blob/851706460a9311f7bbae8e9b7ee497c7188df0a3/src/sequence/mod.rs#L28
https://github.com/Geal/nom/blob/851706460a9311f7bbae8e9b7ee497c7188df0a3/src/internal.rs
https://github.com/Geal/nom/blob/092df74d3565590f0cd414c1ec2e60b55535d0be/src/branch/mod.rs
https://github.com/Geal/nom/blob/master/src/combinator/mod.rs#L75
https://github.com/Geal/nom/blob/master/doc/error_management.md
https://doc.rust-lang.org/std/primitive.str.html
https://stackoverflow.com/questions/43820696/how-can-i-find-the-index-of-a-character-in-a-string-in-rust
https://docs.rs/xmlparser/0.1.0/xmlparser/struct.StrSpan.html
https://www.reddit.com/r/rust/comments/apan2c/what_is_the_best_way_to_index_into_strings/
https://news.ycombinator.com/item?id=18869191
https://www.google.com/search?hl=en&q=rust%20impl%20from
https://doc.rust-lang.org/std/convert/trait.Into.html
https://docs.rs/chrono/0.4.10/chrono/struct.DateTime.html
https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#convert-date-to-unix-timestamp-and-vice-versa
https://doc.rust-lang.org/std/path/struct.Path.html
https://www.google.com/search?hl=en&q=rust%20clap%20exclusion
https://docs.rs/clap/1.1.2/clap/struct.App.html
https://docs.rs/clap/2.33.0/clap/struct.ArgGroup.html
https://docs.rs/clap/2.33.0/clap/struct.ArgMatches.html
https://github.com/kwrooijen/cargo.el
https://github.com/fflorent/nom_locate
https://www.google.com/search?hl=en&q=nom_locate%20verboseerror
https://github.com/fflorent/nom_locate/issues/36
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNTPgOt_-V2I1EvpU3VgiQNVxX5r0A%3A1578634474297&ei=6gwYXo_bEZXO0PEPlNGe-AQ&q=impl+parseerror&oq=impl+parseerror&gs_l=psy-ab.3..33i160l2j33i299l2.6533.9637..9905...2.1..0.175.1709.11j6......0....1..gws-wiz.......0i71j35i39j0i273j0i131j0j0i67j0i20i263j0i22i30j0i22i10i30j0i8i13i30j0i8i13i10i30.FYA1x_SQu9Y&ved=0ahUKEwiP-MfYp_jmAhUVJzQIHZSoB08Q4dUDCAo&uact=5
https://docs.rs/human-size/0.4.0/human_size/enum.ParsingError.html
https://docs.rs/human-size/0.2.0/human_size/enum.ParsingError.html
https://doc.rust-lang.org/1.31.0/std/string/enum.ParseError.html
https://doc.rust-lang.org/1.0.0/std/string/struct.ParseError.html
https://github.com/Geal/nom/blob/master/doc/error_management.md
https://github.com/fflorent/nom_locate
https://stackoverflow.com/questions/25569865/how-to-escape-curly-braces-in-a-format-string-in-rust
https://www.google.com/search?hl=en&q=rust%20warn%20unused_variables
https://stackoverflow.com/questions/25877285/how-to-disable-unused-code-warnings-in-rust
https://doc.rust-lang.org/rustc/lints/levels.html
https://doc.rust-lang.org/rustc/lints/listing/warn-by-default.html
https://users.rust-lang.org/t/how-to-print-any-float-number-with-point/10085
https://doc.rust-lang.org/std/fmt/
https://docs.rs/num-rational/0.2.3/num_rational/struct.Ratio.html#method.denom
https://www.google.com/search?hl=en&q=rust%20escape%20string
https://doc.rust-lang.org/reference/tokens.html
https://rahul-thakoor.github.io/rust-raw-string-literals/
https://www.google.com/search?hl=en&q=rust%20print%20string%20escaped
https://www.google.com/search?hl=en&q=nom%20escaped_transform
https://docs.rs/nom/5.1.0/nom/bytes/complete/fn.escaped_transform.html
https://github.com/Geal/nom/search?q=escaped_transform&unscoped_q=escaped_transform
https://github.com/Geal/nom/blob/f8e32ba4af26fd587f260b1a69518a0356ee1ff9/tests/escaped.rs
https://github.com/Geal/nom/blob/504ff533ac0eba80792bfdc9e849ad918d32d6bd/src/bytes/complete.rs
https://docs.rs/snailquote/0.1.1/x86_64-pc-windows-msvc/snailquote/fn.unescape.html
https://doc.rust-lang.org/nightly/std/primitive.char.html#method.escape_unicode
https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html
https://stackoverflow.com/questions/28572101/what-is-a-clean-way-to-convert-a-result-into-an-option
https://doc.rust-lang.org/core/option/enum.Option.html
https://www.google.com/search?hl=en&q=rust%20assign%20reference
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://users.rust-lang.org/t/marking-the-iteration-variable-as-a-reference-iter-vs-iter-mut/782/2
https://stackoverflow.com/questions/39622783/how-can-i-do-a-mutable-borrow-in-a-for-loop
https://doc.rust-lang.org/rust-by-example/flow_control/if_let.html
https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.values_mut
https://stackoverflow.com/questions/27244465/merge-two-hashmaps-in-rust
https://doc.rust-lang.org/std/iter/trait.Extend.html
https://doc.rust-lang.org/core/option/enum.Option.html#method.unwrap_or
https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.new
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNTk65vcaLYhTq4nQj7xCZ2jVQG4Gg%3A1578782861043&ei=jVAaXpSgAtCe-gT89KT4Aw&q=rust+hashmap+init&oq=rust+hashmap+init&gs_l=psy-ab.3..0l2j0i333l4.3916.4216..4391...0.3..0.212.703.0j2j2....3..0....1..gws-wiz.......0i71.2a_1KjeBCdM&ved=0ahUKEwjUmvC80PzmAhVQj54KHXw6CT8Q4dUDCAo&uact=5
https://doc.rust-lang.org/std/collections/struct.HashSet.html#method.union
https://doc.rust-lang.org/std/collections/struct.HashMap.html
https://github.com/kwrooijen/cargo.el
https://stackoverflow.com/questions/52987181/how-can-i-convert-a-hex-string-to-a-u8-slice
https://docs.rs/base64/0.11.0/base64/fn.decode.html
https://www.google.com/search?hl=en&q=rust%20disable%20tests
https://doc.rust-lang.org/1.5.0/book/testing.html
https://doc.rust-lang.org/book/ch11-02-running-tests.html
https://doc.rust-lang.org/1.30.0/book/first-edition/crates-and-modules.html
https://www.flycheck.org/en/latest/user/troubleshooting.html
https://github.com/racer-rust/emacs-racer
https://github.com/fflorent/nom_locate
https://www.google.com/search?hl=en&q=rust%20lifetime%20of%20another%20lifetime
https://doc.rust-lang.org/1.30.0/book/second-edition/ch19-02-advanced-lifetimes.html
https://www.google.com/search?hl=en&q=rust%20clone%20each%20vec
https://stackoverflow.com/questions/37797242/how-to-get-a-slice-of-references-from-a-vector-in-rust?rq=1
https://www.google.com/search?hl=en&q=rust%20moving
https://stackoverflow.com/questions/44117951/why-does-accessing-a-field-on-a-pointer-to-a-struct-work-in-rust
https://doc.rust-lang.org/rust-by-example/trait/iter.html
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.zip
https://www.google.com/search?hl=en&q=type%20occurs%20check
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNQTsDG9oWFLOF4VSVUmqcwMbsjV2A%3A1579321241021&ei=mYciXqp4kdX6BLX5rfAF&q=occurs+check+union+type&oq=occurs+check+union+type&gs_l=psy-ab.3...5350.5793..6026...0.3..0.90.416.5......0....1..gws-wiz.......0i71.MaCRmSfzWOY&ved=0ahUKEwjqqLqMpoznAhWRqp4KHbV8C14Q4dUDCAo&uact=5
https://www.google.com/search?hl=en&q=sum%20type%20occurs%20check
http://gallium.inria.fr/~fpottier/publis/emlti-final.pdf
https://doc.rust-lang.org/std/iter/trait.IntoIterator.html
https://doc.rust-lang.org/std/iter/index.html#implementing-iterator
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.skip
https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.take
https://docs.rs/itertools/0.8.2/itertools/trait.Itertools.html#method.concat
https://doc.rust-lang.org/edition-guide/rust-2018/trait-system/impl-trait-for-returning-complex-types-with-ease.html
https://doc.rust-lang.org/edition-guide/rust-2018/cargo-and-crates-io/cargo-workspaces-for-multi-package-projects.html
https://users.rust-lang.org/t/what-is-the-difference-between-cargo-new-lib-and-cargo-new-bin/19009/5
https://doc.rust-lang.org/cargo/reference/manifest.html#the-project-layout
https://doc.rust-lang.org/1.30.0/book/first-edition/crates-and-modules.html
https://github.com/rust-lang/api-guidelines/issues/167
https://github.com/TheDan64/inkwell
https://github.com/rtfeldman/roc/search?q=position%28%29&unscoped_q=position%28%29
https://github.com/Marwes/combine/blob/a358c88933bb58c4df0d9a0212b4a33d2b24be7b/tests/parser.rs
https://docs.rs/combine/4.0.0/combine/index.html
https://github.com/Marwes/combine/wiki
https://github.com/Marwes/combine/wiki/Tutorial
https://docs.rs/combine/4.0.0/combine/fn.position.html?search=
https://docs.rs/combine/4.0.0/combine/trait.Parser.html#method.with
https://docs.rs/combine/4.0.0/combine/parser/repeat/fn.escaped.html
https://github.com/Marwes/combine/wiki/Error-Handling
https://github.com/Marwes/combine-language
https://www.reddit.com/r/rust/comments/6bj7gv/what_lifetime_has_a_boxed_value/
https://doc.rust-lang.org/1.30.0/book/second-edition/ch15-01-box.html
https://manishearth.github.io/blog/2015/05/27/wrapper-types-in-rust-choosing-your-guarantees/
https://blog.sentry.io/2018/04/05/you-cant-rust-that
https://jeenalee.com/2016/08/29/move-clone-copy.html
https://docs.rs/nom/5.1.0/nom/combinator/fn.peek.html
https://github.com/Geal/nom/blob/master/doc/choosing_a_combinator.md
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.append
https://docs.rs/itertools/0.8.2/itertools/trait.Itertools.html#method.batching
https://doc.rust-lang.org/std/iter/trait.FromIterator.html?search=
https://doc.rust-lang.org/std/convert/trait.TryFrom.html
https://doc.rust-lang.org/std/iter/trait.IntoIterator.html
https://doc.rust-lang.org/std/iter/struct.Chain.html
https://stackoverflow.com/questions/50458144/what-is-the-easiest-way-to-pad-a-string-with-0-to-the-left
https://doc.rust-lang.org/std/fmt/struct.Error.html
https://www.wolframalpha.com/input/?i=512+bits+to+bytes
https://doc.rust-lang.org/std/fmt/
https://docs.rs/rust-crypto/0.2.36/src/crypto/sha3.rs.html#346-444
https://www.google.com/search?hl=en&q=rust%20serialize
https://www.reddit.com/r/rust/comments/aozhy6/prospects_for_impl_trait_in_traits/
https://doc.rust-lang.org/rust-by-example/std_misc/channels.html
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.last_mut
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNTtZlYQYT4a3cgUf3D0Y7Nh556xAw%3A1579848992453&ei=IJUqXu-mG6PA0PEPrNG4wA8&q=stack+parser&oq=stack+parser&gs_l=psy-ab.3..35i39j0i20i263j0i10l8.35729.38440..38695...0.1..1.206.1685.13j3j1......0....1..gws-wiz.......0i71j0j0i22i30j0i67j0i273j0i131i273.N9QlN9ZHIUM&ved=0ahUKEwjvtvmP1JvnAhUjIDQIHawoDvgQ4dUDCAo&uact=5
https://en.wikipedia.org/wiki/Shift-reduce_parser
https://en.wikipedia.org/wiki/Operator-precedence_parser
https://www.google.com/search?hl=en&q=lisp%20parser
https://github.com/rtfeldman/roc/blob/trunk/src/solve.rs
https://users.rust-lang.org/t/storing-a-function-taking-a-function-in-a-struct/14434/3
https://stackoverflow.com/questions/33704592/performance-comparison-of-a-vec-and-a-boxed-slice
https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort_by_key
https://en.wikipedia.org/wiki/Typed_lambda_calculus
https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system
https://www.lesswrong.com/posts/vTS8K4NBSi9iyCrPo/a-reckless-introduction-to-hindley-milner-type-inference
https://arxiv.org/pdf/1106.1234.pdf
https://gist.github.com/AndrasKovacs/7377727
https://personal.utdallas.edu/~hamlen/cs6371sp14/lecture20.pdf
http://dev.stephendiehl.com/fun/006_hindley_milner.html
https://www.google.com/search?safe=off&hl=en&sxsrf=ACYBGNSSWRzsWAu-MX8r4AwGPjZfeS8pbA%3A1580348470417&ei=NjQyXv6GGcS50PEPu96B0AE&q=how+ncurses+works&oq=how+ncurses+works&gs_l=psy-ab.3..0j0i22i30.5861.8443..8648...0.2..0.111.1601.14j3......0....1..gws-wiz.......0i71j0i67j0i131j35i39j0i273j0i10j0i20i263.iNjYdxTSMiQ&ved=0ahUKEwj--czpmKrnAhXEHDQIHTtvABoQ4dUDCAo&uact=5
https://en.wikipedia.org/wiki/Ncurses
https://docs.python.org/3/library/curses.html
https://www.mirbsd.org/htman/i386/manDOCS/curses/hackguide.html
https://guide.elm-lang.org/webapps/
https://guide.elm-lang.org/interop/flags.html
https://package.elm-lang.org/packages/elm/browser/latest/Browser#element
https://package.elm-lang.org/packages/elm/core/latest/Platform-Cmd
https://package.elm-lang.org/packages/elm/core/latest/Platform
https://hexdocs.pm/elixir/Supervisor.html
https://en.wikipedia.org/wiki/Units_of_information
https://package.elm-lang.org/packages/elm/core/latest/Task
http://yargs.js.org/
https://github.com/tj/commander.js/
https://unix.stackexchange.com/questions/326766/what-are-the-standard-error-codes-in-linux
https://en.wikipedia.org/wiki/Bad_command_or_file_name
https://www.google.com/search?hl=en&q=haskell%20actor%20model
https://hackage.haskell.org/package/hactors-0.0.3.1/docs/Control-Concurrent-Actor.html
https://github.com/haskell-distributed/distributed-process/wiki/The-Actor-Model
https://github.com/transient-haskell/transient/wiki/Transient-and-the-Actor-Model-(Erlang-OTP,-Cloud-Haskell,-Scala-Akka)
https://www.reddit.com/r/haskell/comments/b7anj/actors_are_not_a_good_concurrency_model/
http://pchiusano.blogspot.com/2010/03/follow-up-to-actors-are-not-good.html
https://www.google.com/search?hl=en&q=how%20websockets%20work
https://www.google.com/search?hl=en&q=erlang%20channels
https://wiki.haskell.org/State_Monad
https://en.wikibooks.org/wiki/Haskell/Understanding_monads/State
https://www.google.com/search?hl=en&q=unix%20argv
https://unix.stackexchange.com/questions/315812/why-does-argv-include-the-program-name
https://stackoverflow.com/questions/2050961/is-argv0-name-of-executable-an-accepted-standard-or-just-a-common-conventi
https://ece.uwaterloo.ca/~dwharder/icsrts/C/05/
http://people.cs.pitt.edu/~khalifa/cs132/Slides/shell/UnixShellScripts.htm
https://www.google.com/search?hl=en&q=unix%20exit%20code
https://en.wikipedia.org/wiki/Exit_status
https://www.google.com/search?hl=en&q=bash%20pipe%20exit%20code
https://www.thesaurus.com/browse/sewer?s=t
https://en.wikipedia.org/wiki/Synchronization_(computer_science)
https://en.wikipedia.org/wiki/History_monoid
https://en.wikipedia.org/wiki/Concurrent_computing
https://en.wikipedia.org/wiki/Asynchronous_I/O
https://en.wikipedia.org/wiki/Chu_space
https://en.wikipedia.org/wiki/Flow-based_programming
https://en.wikipedia.org/wiki/Process_calculus
https://en.wikipedia.org/wiki/Actor_model_and_process_calculi
https://en.wikipedia.org/wiki/%CE%A0-calculus
https://en.wikipedia.org/wiki/Petri_net
https://www.google.com/search?hl=en&q=preemptive%20concurrency
https://www.google.com/search?hl=en&q=emacs%20syntax%20highlighting
http://ergoemacs.org/emacs/elisp_define_face.html
https://www.emacswiki.org/emacs/GenericMode
https://github.com/search?utf8=%E2%9C%93&q=font+lock+emacs&type=Repositories&ref=searchresults
https://www.wilfred.me.uk/blog/2014/09/27/the-definitive-guide-to-syntax-highlighting/
https://github.com/Lindydancer/e2ansi
https://package.elm-lang.org/packages/elm/parser/latest/Parser#Problem
https://github.com/elm/parser/tree/master/examples
https://www.google.com/search?hl=en&q=rust%20stdin
https://doc.rust-lang.org/std/io/fn.stdin.html
https://doc.rust-lang.org/rust-by-example/std_misc/file/open.html
https://www.google.com/search?hl=en&q=how%20to%20compile%20to%20machine%20code
https://softwareengineering.stackexchange.com/questions/387296/how-does-a-compiler-work-when-its-not-directly-compiling-to-machine-code
https://www.quora.com/How-does-a-compiler-generate-machine-code
https://www.google.com/search?hl=en&q=compile%20to%20llvm
https://www.wilfred.me.uk/blog/2015/02/21/my-first-llvm-compiler/
http://llvm.org/docs/LangRef.html
https://www.ibm.com/developerworks/library/os-createcompilerllvm1/index.html
https://www.google.com/search?hl=en&q=lisp%20llvm%20ir
https://github.com/zehnpaard/lisp-llvm-compiler
https://llvm.org/devmtg/2012-04-12/Slides/Workshops/David_Chisnall.pdfw

-->

<!--


- scrap.land
- scrap.garden
- get all the scrap domains you can

- eventually change to simpler lexer model
- possible literals
  - \`01010101 byte
  - \`\`AbCdEF== bytes (base64)
  - \`#C0FFEE multihash
  - #C0FFEE multihash reference
  - ##list-concat builtin/machinery 
  - @taysar scrap-site
  - @@8.8.8.8:443 location (ipv6 too and port is required)
  - 'a char
  - "hello" text
  - 1 +1 -1 int
  - 1.0 +1.0 -1.0 float
  - 1/1 +1/1 -1/1 ratio
  - 1+1i +1+1i -1+1i complex
  - 1+ 1.0+ 1/1+ 1+1i+ unsigned
  - ~2020-01-01 date
  - ~1300h ~12:00PM ~12:00:00PM ~12:00:00.000PM time
  - ~2020-01-01|1300h datetime
  - / paths
  - >=1 <=1 1<-=>2 >~1300h ranges
  - [] list / vec / stack
  - <[] vecdeque
  - ~[] dict
  - =[] set
  - \ function
  - : union
  - ::: type
  - :: kind
  - % type abstraction
  
- "starting a company in the scraps ecosystem"
  - scrap-camp (also make a management interface)
  - hosted company scrapbooks
  - entire companies should be "version-controlled"
  - people should be able to collaborate over scrawl and scrapsheets and browser
    - i.e. editing-state should be abstracted/generalized into "editing" or "editor" so that different editors can manipulate the same stuff
  - sales, payment, code, reports, code, devops, hr, marketing, customer support, management, and comms should all be scraps and domain-specific scrapplications
    - everything should be automatable
    - everything should be shared and real-time
    - everything should be historical and referential and manipulatable
    - everything should be analyzable
    - everything should be secure and access-controlled
    - everything should be documented / annotated
    - everything should be discoverable
    - everything should be offline
  - e.g. create-employee, schedule-marketing-email, mark-ticket-as-complete, generate-sales-report
  
- for a concurrency model, i like the idea of defining sewers/servers in one step and linking them together with pipes/messages afterward

- we can make paths like /tmp/ first-class citizens
  - things that start with / are paths
  - no globbing or stars
  - things that end with / are directories
  - sub-paths can be concatenated with /var/ >+ /tmp/ >+ /file

- servers need the ability to say "i charge $0.00001 per call"
  - clients need the ability to say "i am willing to pay for this up to $10 per month using this account"
    - this can be done by an open, common service that charges per call
- also implement an easy money subscription service

- eventually, sites should work with @my-scrap and @http://google.com and produce an http-response
  - this will allow the scrap-browser to work with the old internet, and provide a seamless transition

- multihash

- because scrapscript types can be arbitrarily sized, we can make two typing schemes for the ast
  - `scrapscript : int int | list (list scrapscript)`
    - easier to deal with, but less efficient
  - `scrapscript-int : int ; scrapscript-list a => list a`
    - the resulting type is essentially the entire program
    - wayyyy more efficient but useless without impl
      - we can do impl like `\ x -> x.to-text ? (.to_text -> text) ; t1 : a text . to-text \ :a s -> s ; t2 : b . to-text \ _ -> ""`
      
- apps
  - scrap-browser: code as splat
  - scrap-sheets: code as data
    - domains
      - real-estate
      - science
  - scrawl: code as text
    - domains
      - splats
      - arduino
      - servers
      
- scrawl
  - two main panes
    - editor (the source can be _anything editable_, like non-code things like fs trees, network, system info, etc)
      - text
        - search/autocomplete is essential
          - results should show popularity/ratings
        - run (scrapscript -> scrapscript) functions on source code
          - indent
          - optimize
      - visual file system
      - visual scrapscript/scrap
    - contextual debugger/inspector (dependent on cursor or locked)
      - documentation
      - scrapland documentation
      - parser
      - binary
      - unix-process
      - ast
      - splat
      - tests

- consider making an imperative counterpart to scrapscript that's like a micro rust/go
  - or consider adding borrow annotations to a fork of scrapscript (sasm? low-level scrapscript?)
```
t :: a => x => : ok a | err x ;

-- $ is mut
-- & is shared
-- a. is lifetime
-- b.a. is lifetime b in lifetime a
$xs = vec/new 3 
    |> vec/push 1
    |> vec/push 2
    |> vec/push 3
    ;

$&xs 
|> for-each 
   \ $&a.x -> { 
     debug-log &a.x ;
     ~ &a.x % 2 
     | 0 => { $&a.x = &a.x + 1 }
     | _ => {}
   }
   ;

&xs |> for-each debug-log ;
```

- smell-shell: start from first-principles: what should a shell look like?
  - does not have to be all "files" and "file-system"-first
  - runnable in cloud and sharable via link
  - consider making it ALL 8-bit graphics rather than rasterized text
  - composable applications (partial and full-screen ones)
    - cursor application! equivalent of contextual right-clicking
      - publish scrap at cursor, get help, etc
      
- smell-shell & scrawl interactivity
  - fundamentally, you open data and you have a window of interactivity
    - the key here is to view each separate window with shared state as an editor (that may choose to just view rather than edit)
      - and you may open an editor on specific _part_ of the model like the currently-selected paragraph, or whatever
    - things like auto-complete/spell-correction may not even need an interface
    - this also extends to collaborativity -- a model may be on somebody else's machine!
    - multiple interactive windows can "subscribe" to the same underlying model (or parts of it)
      - playable video game scrap with a bunch of inspectors of underlying model
      - song scrap with autocomplete, text-editor, piano-roll, and playback controls
    - so within smell-shell, you should be able to focus on anything and everything as a model and attach interfaces to it (possibly with their own models and interfaces attached to the sub-models)
      - in some sense, smell-shell is just a model with submodels with submodels
      
- interactive educational guides for botany, math, neuroscience, etc.

- killer apps
  - scraps (byte format)
    - scrap-servers
      - scrap-yards
        - scrap-books
          - scrap-gui
            - scrap-terminal (first principles!)
              - smell-shell
          - scrap-comment / scrap-mark / stink.ink
          - scrawl (real-time collaborative editor)
          - srcap-junk (compete with wolfram)
          - scrap-chat (a chat server . @surprisetalk/lobby/chat -> (net/interface chat/server-in chat/server-out (net/location/http my-chat-server-location)))
          - scrap-mail (a mail server literally just accepts messages. @surprisetalk/mail -> (net/interface mail/server-in mail/server-out (net/location/http my-mail-server-location)))
          - scrap-notes / scrap-todos system
          - data-science/machine-learning (compete with r/swift/python)
          - everything that wolfram language offers
          - scrap-net
            - splat
              - taysar
              - scrap pay
                - scrap-patron
                - scrap store (like app store)
                - scrap-sheets
                - spew.tv
                - peace & progress
                - alternatives to every major site on the internet
                - chiptune tracker
                - daw
          - quack
          - croak

- servers need to be instantiated so that we know whether or not they're referring to the same server or not
  - this is particularly useful for reusing connections
    - so ( sewer.start counter1 >> sewer.start counter1 ) is different than ( sewer.start ( counter1 >> counter1 ) )
      - in the first case, each counter has its own state
    

- The next step is combining clients and servers into new servers.
  - The OS offers its API as a server.
    - And by hooking up a client, you can create a new server! i.e. server + client = server

- monoids can be run/served in parallel
  - a -> a -> a
    - wait, we also need a Language for types...
      - or make a map/reduce pattern for multicore systems
      
- scrapscript.org
  - left pane
    - overview (logo)
      - features (with graphics and non-interactive examples)
    - getting started
      - (links to guides)
    - interactive examples
      - (these examples should BEG to be customized/played-with)
      - sorting/searching/renaming files
      - web page
      - web server
      - game
      - searching scrap.land
    - guides
      - for non-programmers
      - for imperative/oop devs
      - for functional devs
      - for mathematicians
      - for data-scientists
      - for devops engineers
      - for managers (what should a business look like? how to track progress?)
      - for seasoned scraplings (advanced)
    - official specs (as scraplets)
      - scrapscript
      - scraplets
      - slivers
      - yards
    - contributing
  - right pane
    - whatever's selected on the left
    - single page, so scrolling will take you to prev/next example/section

- look at jsonb for inspiration

- case-insensitive everything

- scratch files like unison?
  - can be implemented using smellshell language
  
- more number literals
  - `5%` percentage
  - `0+=` non-negative int
  - `0+` strictly positive
  - `0-=` non-positive int
  - `0-` strictly negative
  - `1/2+` non-negative rat
  - other exotic data types?
    - date / time / datetime
    - ranges
  
- keep model/view/updates/subscriptions separate
  - in the scrap browser, be clear about WHAT view you're using
    - it'd be nice if people used scraplord/document instead of splats with formatting
    - options
      - data (default)
        - document -> splat
        - splat -> splat
        - customer -> splat
      - ast (fallback)
        - int -> splat

- splatscript
  - splattributes (in scrapscript)
    - `%( red =( splat.attributes.color color.red )
          ( box
            [ http-link [ red ] "google.com"
              http-link+ %{ pos [ red ] } "google.com"
            ]
          )
       )`
    - make a tree/attribute language for splat script
      - `( box
           . box 
           | link red
           | link+ %{ pos [ red ] }
           ^
           . box
           | box green
         )`
      - `( box
           . box 
           . . http-link "google.com" : red
           . . http-link+ "google.com" : %{ pos [ red ] }
           . box
           . . box : green
           . . . text "hello"
           . box : red : round 5% , text "hello" : green
         )`
       

  
- sewerscript / smellshell
  - make the shell app with live-preview results on the right
    - kinda like ranger on crack
  - use type inference to decide whether string or function
    - `test.csv |> file  == 1,2,3`
    - `test.csv |> path  == test.csv`
    - `test.csv |> path  csv  col 1  sort-alpha  dedup`
    - `test.csv |> path  is-file? && has-ext? .csv`
      - operators should also act as combinators
    - `test |> echo`
    - `"test" |> echo`
    - `paste  |> http get  body  html  crawl <a>  sort`
    - `paste  |> http get  ={ .head  .Accept  list } ={ .body  find-text  regex-mime }  collect [ .head .body ]  sort`
    - `define |> http-get [ http get ]`
    - `history -1 |> explain`
    - `history -1 |> exec`
    - by default, a plain function should apply itself to the previous results


-->

