
# JSON Considered Harmful

-- So you want to make a server, and a client to accompany it.
-- Both systems are running on separate machines that have insane amounts of processing power. Network capacity may be limited, but both systems, in general, are capable of pretty much anything.
-- So what's the current state of affairs in "modern" software development? We have an extremely verbose, low-level common notation (JSON) that takes up a lot of network capacity AND a reasonable amount of encoding/decoding processing power.
-- Seriously, even if two systems are capable of speaking the same programming language, we encode ALL our communications into lists of numbers and strings. And there's no formalized method for sharing schemas, or even a vague amount of discovery of APIs.

-- https://www.youtube.com/watch?v=K_AfmRc-TLE&feature=youtu.be&t=21m30s


So you want to powerful systems to talk to each other over a network with limited capacity and unreliable connections?

Let's try to build the worst "universal" notation possible:

1. Ensure that the common notation that all the systems speak is extremely low-level, so that you have to encode/decode all the complexity of modern programming languages back-and-forth from lists of strings and numbers and booleans. Please don't add any data-types for `NaN`, `Infinity`, `undefined`, time, dates, currency, rationals, enumerable types, sets, symbols, tags, regular expressions, errors, functions, ADTs, IDs, paths, addresses, characters, or objects. Don't include these, especially if its parent language understands them completely. It's completely reasonable to expect that systems on both sides will always perfectly understand what the value is supposed to mean, and that we can encode/decode them with no errors.

2. Make absolutely no formalized system of discovery. No documentation standards, no schemas, nothing. The developers on both ends of communication will surely double-check that the `id` that they're passing back-and-forth refers to the same data on both systems. And because it's encoded in a low-level notation (see #1), they'll absolutely make sure to document things in such a way that other developers can refer back to exactly what each key means in an associative array.

3. We don't want computers that are able to figure out how to communicate with each other, either! Don't give a common repository of objects/schemas for both systems to agree upon, so that they can ease the programmer's burden. Otherwise, how will engineers get paid?

4. Under no circumstances should this notation have any capacity to talk about functions. It would be ridiculous to enable computers to talk about the most fundamental part of programming. It's much better if programmers have to encode/decode data into code, and check for vulnerabilites at the data level.

5. If you make API generators, make sure that they're only in languages that nobody uses.

6. Make sure that everything can be optional! Every system will equivalently handle missing keys with those keys set to null.

7. Even though we only have numbers, strings, and arrays, make sure that every time we make an API, we have to manually program the constraints of each range. Under no circumstances should we make libraries to check that something is say, not negative. It doesn't make sense, in any language, to make libraries that generate interfaces based on schemas. Because obviously we want to re-write the interface in every system that touches the data.

8. Please require that the top-level data CANNOT be a single value. Even though the language is just arrays, strings, and numbers, you definitely shouldn't be able to send strings or numbers without wrapping them.

9. Give us way of executing programs on other machines (JSON-RPC), and make sure that nobody uses.

10. Make sure that the system is not extensible! Nobody will ever want to change the protocol to fit their needs.

11. Make sure that unescaped strings break the languages that it's designed for!

12. Make inconsistent standards on parsing scientific numbers (e.g. `4e-21`). Of course computers won't want to ever talk about very large or very small numbers.

13. Even if processing is cheap and bandwidth is expensive, make sure it takes up as much space as possible in the network. Oh, and don't make it easy to encode/decode either. Unique data-types would help reduce the size of messages, but we don't want that.

14. Never, ever, send programs to computers! Especially if it's just talking to a database and it makes sense to send a query. Don't put any work into formalizing database security and sanitization. It makes much more sense to extend our API every time we want a slightly different query.

15. Even if two computers speak the same language, don't serialize native data-types in a common way. Make the programmer do it by hand.

16. Use different protocols for everything! If it's good enough for remote connections, it's probably not good-enough for inter-process communication. We want to make as many different interfaces as possible, which won't affect security or development time.

17. Make it hard to stream! Computers don't need to stream things.

18. Don't make any formalized system of authentication using this notation. If you do, make JSON Web-Tokens, which are hard to use and have serious vulnerabilities.

19. Actually, put vulnerabilities in all the major parsers that people use. Nobody will ever try to make the parsers work extra hard in order to crash remote systems.

20. Don't make any easy ways to convert one notation to another. And if you do, reimplement it from scratch in each language rather than making a common meta-schema that each language can implement just once and be done.

21. Don't standardize any objects or APIs. Everybody is unique!

22. Make support for references, but then break every parser that tries to use them.

23. Don't make it "zero-copy". We want every computer to use its memory inefficiently when trying to read it from the socket.

24. Don't package any recommendations for how to read the data with the data object itself. It's too confusing to send encoders with the data. Let's just have different programmers make encoders/decoders for every system.

25. Under no circumstances should encoders/decoders work both ways! Encoders and decoders are not mirror-images of each other, and they shouldn't be. Systems won't break if we interpret in different ways on different systems. Plus, we want to write everything twice! After all, our notation is very complicated, despite the fact it has no complex data-types and is pretty much reversible in every mapping we can imagine.

26. Don't package any indication of the serialization format with the data. That way, we have to use `JSON.parse`, `XML.parse`, etc. rather than having a singular `parse` function.

27. Make sure that all parsers interpret common values like `undefined`, `NaN`, and `Infinity` as strings, with no warnings or errors. It's much more exciting to hunt down the bug when it happens in production.

28. The alternatives to the "universal notation" should be orders-of-magnitude worse than the most popular option. Stockholm Syndrome forever!

29. Most parsers shouldn't give you the line and character where the mistake occurred. Programmers love trying to find single-character syntactical errors in large bodies of text!

30. Make a universally-accepted text-encoding (Unicode) and don't properly support it.

31. Don't allow comments!

32. Even though the types are simple enough for most databases to read the notation, force programmers to encode the data before putting it into the database. You definitely need to have three different layers of encoding for simple insert/update operations.

33. Make the universal language unconnected to byte streams! There's no reason to ever connect packets of arbitrary data (like video) to higher-level data types. Make them do extra network calls for images! There's no reason to allow images inside of this format, for any reason.

34. Make the universal language resistant to skipping! The parser must read everything, even if it doesn't need to!

35. When you make an API, only define the outer interface for it, in a non-standardized format. Make sure that every person that wants to interact with your system has to read your documentation and re-implement the same thing. Of course they don't want to drop in a schema and automatically generate a type-safe boundary layer! They really want to do all the dirty work and figure out the quirks of your poorly-implemented API.

