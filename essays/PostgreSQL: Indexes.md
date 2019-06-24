## _TL;DR_

Databases store junk in tables. And they use indexes to record _where_ junk is stored.

With too many indexes, databases waste time recording _where_ junk is stored. With too few indexes, databases waste time looking for junk.

Different indexes are suited for different types of junk. 

When you combine indexes, databases search one place instead of searching two places.

Databases needn't deal with the junk you omit from indexes.

Indexes usually only record _where_ junk is stored, but you can also dump that junk directly into the indexes.

Indexes can be a pain to maintain.

---

<!-- TODO: Move the queries inline, rather than at the beginning of each "day". -->

# The Library of Postgres: Indexes

``` sql
SELECT * FROM books WHERE title = 'Frog Blood 4';
```

The librarian asks, "how can I help you today?"

"I'm looking for a book called _Frog Blood 4_."

"Okay, give me just one second."

_26 minutes later._

"Alright, here is your book."

"Thank you so much! I hate to be rude, but may I ask what took so long?"

"Well, today is my first day at this library and I had to search through every shelf until I found your books. `Sequential Scan`s are tiring."

"Oh my, that sounds like a lot of work!"

"Yes, yes, but I'm sure I'll become more clever with time."

``` sql
SELECT * FROM books WHERE title = 'Frog Blood 5';
```

"Sorry to make you do more work, but can you also help me find _Frog Blood 5_?"

"Sure thing! I'll be right back."

_26 minutes later._

"Here you go."

"I hate to ask, but did you search through every shelf again?"

"Yes, I'm so sorry. I couldn't remember where I found the first book; I have quite the terrible memory. So I just did another `Sequential Scan`."

"Well I've been enjoying this series. Thank you so much!"

"No problem! Come back again soon."

***

``` sql
CREATE INDEX title_idx ON books ( title );
```

"Hello? Anybody there?"

The librarian looks up from her mounds of index cards, "Hello again! Welcome back."

"You look quite busy there, what are all those cards?"

"Well, I was wasting a lot of time searching through every book, so my manager recommended that I write down the title of each book and where it's stored."

``` sql
SELECT * FROM books WHERE title = 'Frog Blood 6';
```

"Wow, how clever! In that case, could you help me find _Frog Blood 6_?"

The librarian quickly looks through each library card alphabetically to until she finds _Frog Blood 6_. After writing down its location, she says, "I'll be right back."

_26 seconds later._

"Wow, that was fast! Thank you! I bet your life is a lot easier now with those index cards."

"Yes, it's much easier to find books with an `Index Scan`, but —"

``` sql
COPY books FROM STDIN;
```

A shipment of new book donations slide onto her desk from a worn conveyor belt. For each book, she writes down its title and where she wants to put it, and then runs over to put the book on its shelf.

"Sorry about that. As I was saying, it's much easier to find books with an `Index Scan`, but it means I have to do a lot of work when new books come in."

``` sql
SELECT * FROM books WHERE isbn = '0345391802';
```

"I see. Well, do you think you could help me out with one more request? My friend asked me to grab a book with an ISBN of _0345391802_."

"Do you have the title by any chance? That would make things a lot easier for me."

"I'm sorry, my friend didn't give me the title —"

"Okay then, I'll be back in a jiffy."

_33 minutes later._

"Here you go! Sorry for the wait; I haven't recorded any ISBNs, so I don't know where to look, so i had to do a `Sequential Scan`."

``` sql
SELECT * FROM books WHERE title = 'New Moon Rising';
```

"I figured — thanks anyway. And I have one last request: do you have _New Moon Rising_ by any chance? It's, uh, for my sister."

"Oh, another `Index Scan`? I'd be happy to." The librarian looks flips through her index cards, "yes, yes," and scurries off."

_25 seconds later._

The librarian drops off a book on her desk.

_15 seconds later._

The librarian returns with another book. "You didn't specify which one, so I grabbed _New Moon Rising_ by J.R. Rain and Matthew S. Cox and _New Moon Rising_ by Eugenia Price."

"Ah, I was actually just looking for the J.R. Rain one. So thanks! See you again soon."

***

``` sql
CREATE UNIQUE INDEX isbn_idx ON books ( isbn );

CREATE INDEX    author_idx ON books ( author    );
CREATE INDEX     pages_idx ON books ( pages     );
CREATE INDEX    copies_idx ON books ( copies    );
CREATE INDEX published_idx ON books ( published );
```

"Welcome back!"

"Hey! How's it going?"

"Well, my boss asked me to keep track of even more index cards since I last saw you, which has been a bit overwhelming."

``` sql
EXPLAIN SELECT * FROM books WHERE title ILIKE 'A%';
```

"Hello there! Hey, here's a hypothetical question for you: if I asked you to fetch all the books starting with the letter 'A', would you do an `Index Scan` or `SequentialScan`?"

"I'd probably do a `Sequential Scan`."

"Really, why? I thought `Sequential Scan`s were slower."

"Well, when you ask for a lot of books that are spread all over the library, it ends up taking more time looking through index cards than just looking through books one-by-one."

"But don't you have all book titles alphabetized in your cards? It should be really quick to find all the names."

"Yes, but remember that the physical books aren't grouped by name. Rather than running back and forth through the library to each individual location described in the index cards, it's surprisingly faster to take the slow route and read every book title!"

"Oh, thanks for the explanation! I feel like you're really getting good at these things."

"Thanks, I —"

``` sql
INSERT INTO books 
( isbn
, title
, author
, published
, body
)
VALUES
( '0545291585'
, 'Animorphs #6: The Capture'
, 'K.A. Applegate'
, '2012-03-01'
, $1
)
;
```

A single book donation slides onto the desk from the conveyor belt. The librarian frantically edits 5 different index cards from 5 different stacks. And then runs to put the book on the shelf.

"Sorry, my manager recently asked me to track every books' ISBNs, authors, and number of copies. I have to track _everything_, which is a bit of a pain —"

``` sql
INSERT INTO books 
( isbn
, title
, author
, published
, body
)
VALUES
( '0545291585'
, 'Animorphs #6: The Capture'
, 'K.A. Applegate'
, '2012-03-01'
, $1
)
ON CONFLICT DO UPDATE SET copies = EXCLUDED.copies + 1
;
```

Another copy of the book slides in from the conveyor belt. First, the librarian pulls out the stack of ISBN cards; she already forgot that another copy of the book already exists. She sifts through the stack of index cards that records how many copies of each book there are. In order to update the indexed number of copies, first she must erase the original entry ordered with the 1s, and then insert the location into the 2s.

"Sorry again! It helps to know that each book has a unique ISBN, because it saves me some record-keeping trouble, and also reduces the amount of things I have to read through. But it's a real pain to update the number of copies, because I keep everything sorted in that stack. So I have to erase one of the cards and then find a new place for the new book value somewhere in the stack."

``` sql
-- Select from some pg_* function that shows the internals.
```

"Wow, you're so diligent! By the way, I've been curious, what exactly do you write on those cards? You seem to shuffle through them in a very strange order. How are they organized?"

"Well, when my manager doesn't specify an indexing method, I like using the `BTREE` method. It works quite well for most cases."

"What's a `BTREE`?"

"Let me show you," the librarian scribbles a diagram on the back of a napkin, "Conceptually, this is how things are laid out:"

<!-- TODO: Make a better picture, with stuff drawn on miniature index-cards. -->
![B-Tree](http://patshaughnessy.net/assets/2014/11/11/figure2.png)

<!-- TODO: Provide another picture of the index cards as index pages, depicted on https://www.postgresql.org/docs/11/storage-page-layout.html or on the 54th slide here: https://momjian.us/main/writings/pgsql/internalpics.pdf -->

"Alright, so you can think of the entire stack of index cards as a file on your computer. But when the stack gets over 1GB, I split it into multiple stacks so it's easier to carry."

"Odd analogy, but —"

"Each card is exactly 8kb — I'm a bit of a perfectionist, ya know — and the first card in the stack is usually a metacard that has some indicators to help me remember information about the index itself. After that, I have my _branch_-cards, and then all my _leaf_-cards."

"How do you use the branch-cards?"

"Hmm. Tell me a book title and I'll show you."

"How about _Frankenstein_?"

"Good choice. Well, first I start at the _trunk_, which is somewhere after the metacard —"
<!-- TODO: how does postgres know where the _trunk_ is? -->

<!-- TODO: Picture. -->

"— which takes me to another tree-card —"

<!-- TODO: Picture. -->

"— and then —"

<!-- TODO: Picture. -->

"Tada! And that's how tree-cards work."

"Neato! Well, what do you do with the leaf-card?"

"Oh, that's my favorite part! The leaf-cards are still 8kb, but I pack a lot of information into them, so I skip through them like this:"

<!-- TODO: Binary search. -->

"Whoa! That's quite a system you got there! And once you find _Frankenstein_ on the index card —"

"Yes, yes, I know precisely where it is on the shelves."

<!-- TODO: Picture. -->

"Wow. Okay, so what if I asked you to grab all books that start with 'Frank—'?"

"Great question. `BTREE`s are sorted, so it's very easy for me to do anything where the values are comparable with `<`, `=`, and `>`."

"Uh, sorry, I'm not sure I follow."

"Well, not all values can be compared easily. For instance, is `(1,2)` greater than `(2,1)`? It's unclear. And I refuse to do anything I don't know how to do. You know?"

"Umm—"

"Oh yes, you're looking for things that start with 'Frank—'. Well, because everything in these cards are sorted by title, all I have to do is find where 'Frank' starts, and then read through until it doesn't start with 'Frank' anymore."

"What happens if there is 'Frank—' stuff stored on multiple cards? How do you know which card is next? Are the cards sorted too?"

"Actually no, the cards themselves are not sorted. For `BTREE` cards, I scribble the locations of the 'previous' and 'next' card on the bottom of the card like this:"

<!-- TODO: Picture. -->

"— and so when I'm reading through each 'Frank—' entry, I can always find the next card if I hit the end of the current card."

"Why don't you just sort the cards?"

"..."

"Okay, never mind."

"Ha! Well, did you come here for a particular book today?"

``` sql
EXPLAIN ( BUFFERS ) SELECT * FROM books WHERE author = 'Asimov, Isaac';
                    SELECT * FROM books WHERE author = 'Asimov, Isaac';
```

"Yeah, I'm looking for any books you have by Asimov."

"Oh, Asimov, huh? He was quite the prolific fellow! Did you know that he's featured in 9 of the 10 major sections of the Dewey Decimal System? That means his works are completely scattered throughout the library."

"That's amazing! But does that mean it's more work for you?"

"Sort of. It just means I have to hold some stuff in memory — excuse me — in short-term memory. Every `Bitmap Index Scan` with a `Bitmap Heap Scan` means I have to hold stuff in my head, rather than using paper."

"I see. Wait, no, why are you using those scans rather than `Index Scan` or `Sequential Scan`?"

"When I grab too many things with `Index Scan`, I have to run back and forth a lot. But when I grab too few things with `Sequential Scan`, I waste my time running through the library. So these scans are a fine middle-ground when I have to grab a moderate quantity of books from all over the library."

"Got it. So why do you need two different scans?"

"It sounds like two different scans, but you can think of them as only one scan for now. In smaller libraries `Bitmap Index Scan`, I imagine a yawning-kitty —"

"Did you say 'yawning-kitty'? How, uh, cute."

"Yeah, I imagine a yawning-kitty for every _book location_ that matches the condition and a sad-cactus for every book location that doesn't match the condition."

"Wow, that's way too many books!"

"Yeah, I know! That's why I imagine yawning-kitties and sad-cacti as _shelf locations_ for large libraries like this. I guess book-locations are kind of like row-_tuple_-locations and shelf-locations are like data-heap-_page_-locations."

<!-- TODO: picture! make sure to use a thought bubble. -->

"Your analogies are a bit—"

"Anyway, so first I look in my author cards for the beginning of 'Asimov, Isaac'. Every shelf in my head starts off with a sad-cactus, but as I read through the index cards, I imagine all the shelves with 'Asimov, Isaac' on them transforming into yawning-kitties."

"Wait, if you're just memorizing the _shelf_ locations. How do you find the actual books?"

"Ah, yes, I'm glad you asked. During the `Bitmap Heap Scan`, I have to do a `Recheck Condition` on every book on the shelf. In other words, I go to all the yawning-kitty shelves in order, checking each book to see if it's by Isaac Asimov, and placing them all on my cart. Anyway, let me go do that before I forget where the yawning-kitties are."

_14 minutes later._

<!-- TODO: picture! make sure to use a thought bubble. -->




<!-- TODO: using an OR condition to do bitmap ORs -->

<!-- TODO: make a query that requires multiple look-ups from multiple indexes: finding biographies of author of "The Brothers Karamazov" -->

<!-- TODO: make a query that requires multiple look-ups from multiple indexes -->

*** 

<!-- TODO: compound indexes -->

<!-- TODO: index-only scan: i can tell you the name of the book just from the index -->

<!-- TODO: no more look-ups from multiple indexes, e.g. looking up biographies of the author of "The Brothers Karamazov" -->

<!-- TODO:  -->

``` sql
CREATE UNIQUE INDEX genre_idx ON books ( genre );
-- TODO: genre is an array of enums
-- TODO: gin/gist or whatever

```

<!-- TODO: index tradeoffs -->

<!-- TODO: primary and foreign keys -->

<!-- TODO: 1: use the right index. 2: err on the side of multicolumn, but make sure to order them correctly. 3: make it as small and specific as possible -->

<!-- TODO: expression/functional indexes i.e. indexing on functions -->

<!-- TODO: manager comes in and asks why everything is starting to take longer, and why everything is so messy: what happens when you reindex? cluster? -->

<!-- TODO: index configuration/tuning, e.g. fillfactor -->

<!-- 
TODO: index inspection 
TODO:   SELECT relname, indexrelname, idx_scan
TODO:     FROM   pg_catalog.pg_stat_user_indexes
TODO:     WHERE  schemaname = 'public';
TODO:   https://pgdash.io/blog/postgres-btree-index.html
TODO:   select * from pg_relation_size('ix_year');
TODO:   select * from pgstattuple('ix_year'::regclass);
TODO:   select * from pgstatindex('ix_year'::regclass);
TODO:   select * from bt_page_stats('ix_year', 13);
TODO:   select * from bt_page_items('ix_year', 13) limit 5;
TODO:   select pg_relpages('ix_year');
-->

<!-- TODO: when to tune/upgrade -->

---

## Further Reading

- Internals
  - [Bruce Momjian's PostgreSQL Internals through Pictures](https://momjian.us/main/writings/pgsql/internalpics.pdf)
  - [The Internals of PostgreSQL](http://www.interdb.jp/pg/index.html)
  - [Database Page Layout](https://www.postgresql.org/docs/11/storage-page-layout.html)
- Indexes
  - [CREATE INDEX](https://www.postgresql.org/docs/11/sql-createindex.html)
  - [Indexes in PostgreSQL - 1](https://habr.com/en/company/postgrespro/blog/441962/)
  - [Indexes in PostgreSQL - 2](https://habr.com/en/company/postgrespro/blog/442546/)
  - [Efficient Use of PostgreSQL Indexes](https://devcenter.heroku.com/articles/postgresql-indexes)
- B-Trees
  - [Busying Oneself with B-Trees](https://medium.com/basecs/busying-oneself-with-b-trees-78bbf10522e7)
  - [Discovering the Computer Science Behind Postgres Indexes](http://patshaughnessy.net/2014/11/11/discovering-the-computer-science-behind-postgres-indexes)
  - [B-Trees](https://www.cs.utexas.edu/users/djimenez/utsa/cs3343/lecture16.html)
  - [Notes on PostgreSQL B-Tree Indexes](https://pgdash.io/blog/postgres-btree-index.html)
  - [Indexes in PostgreSQL - 4 (Btree)](https://habr.com/en/company/postgrespro/blog/443284/)
