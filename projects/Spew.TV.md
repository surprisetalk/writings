
Coming soon!

<!--

- connect external wallet

- implement everything in a smart-contract
  - make almost everythting off-chain
  
-------

- creators, distributors, viewers, curators and moderators

- viewers can consume arbitrary content
  - viewers pay creators, distrtibutors, and mods proportionally
  - all earn reputation for good behavior, which makes the system cheaper and more accessible
    - for instance, viewers cannot watch low reputation content until their reputation has increased
      - watching low-reputation content is more expensive and will lower the viewers reputation

- mods tag random 2048-bytes (2-10 seconds?) segments of content
  - tags
    - tag: illegal in <country>
    - tag: copy of <original content>
    - tag: remix of <original content>
  - mods earn money for consensus
  - mods with low reputation can only approve relatively high-repuation contentt
  - number of opportunities to mod are proportional to stake
  
- curators: add metadata to 

- creators can post content
  - moderators can earn money by a system of staking, voting, and reputation
    - automated moderators like Pex could make lots of money
  - creators must stake money inversely proportional to their reputation
    - money from video strikes are paid to mods

- distributors store and distribute content
  - distributors get paid for distributing content quickly
  - they lose stake/reputation for distributing illegal videos and missing deliveries
  
------

similar idea

- get rid of mods in favor of challenges
- get rid of explicit reputattion in favor of implicit reputation (if the penalties are good, the people will automattically gain/lose reputation)

- creators, viewers, and distributors

- creators must "invest" (stake) to keep content uploaded
  - good behavior: earn money from viewers for uploading good content
    - stake proportionally to bytes and earning power (price)
  - bad behavior: lose stake from challengers for uploading illegal content
    - stake is divided among challengers if taken down
      - if not taken down, challenging stake is divided among conservative votes
        - (it's a prediction market!)
      
- distributors must "invest" (stake) to keep distributing coontent
  - good behavior: earn money from viewers for quickly and cheaply distributing legal content
    - stake proportionally to amount of content actively distributing
  - bad behavior: lose stake for distributing illegal content
    - any distributors of a lost challenge will also lose stake
      
- viewers must "invest" (stake) to get access to content
  - good behavior: viewers consume legal videos
  - bad behavior: viewers consume illegal videos
    - distributors can reduce their penalties by snitching on viewers with view receipts
    - viewers can reduce their penalty by submitting their own view receipts
    
One of the coolest part of this is that we have a prisoners' dilemma thing going on, where viewers/distributors can reduce their penalty by snitching on each other.
Viewers can absolve themselves of penalties by submitting the first challenge.

We need a system of avoiding "baiting": creators should not be able to profit off of uploading illegal content and challenging themselves and playing both siddes of the betting market.

Aaaaand we're back to moderators. We don't want the creators and distributors and viewers to overwhelm the challenge system with "no"s on everything, rendering it useless. Nor do we want challengers to overwhelm the system with false accusations that get "yes"s on everything.
Yeah, so we might have to submit random chunks of media to random "moderators" that are rewarded for hand-validated attribution. Maybe split up solving/verifying, so that finding an ISRC is valuable, and verifying it is less valuable?
When choosing random content to show moderators, only show a 1/4 (or 1/16?) of the video for a few seconds. Likewise, for audio, we can introduce noise.
Actually, yeah, that's pretty good. If we _require_ them to find the original segment somewhere on the system, then that requires attribution and work and moderation. Holy crap. It's brilliant.
So the system is constantly "testing" the existing corpus by providing rewards to those who can successfully attribute small bits of media.


-->

<!--

Older idea:

- to file a copyright claim, one must stake a cost in proportion to the _violating_ content-creator (and the particular piece of content)
  - claiming against pewdepie would require more stake than mike-ropar
  
- accuser stakes amount
  - accused either folds (incurring a devaluation that makes future stakes more expensive) or stakes an amount to enter arbitration
    - arbitrator stakes an amount
      - if all parties agree with arbitrator, the winning party and arbitrator split loser's stake
      - if no parties come to an agreement, an even greater penalty is applied to both parties
        - this needs to be formalized in a prisoners-dilemma form
        
- actually, i like the idea of both parties submitting a list of trusted arbitrators and that being the final decision
  - and then 5 arbitrators anonymously stake money and vote
  - every failed round of choosing arbitrators penalizes future staking cost
    - choosing a few untrusted arbitrators will penalize less than choosing a lot of the most trusted arbitrators
    
- arbitrators' histories should be public
    
- the system needs to self-heal against corruption -- unpopular opnions should lead to bigger earnings
  - actually, showing accused/accuser favoritism percentages will natuarally balance things, because only moderate arbitrators will be chosen by both parties
    - and "moderate" will be decided by the market. 70/30 accuser/accused may be the "moderate" average
        
- there needs to be a backdoor to the courts
      
- winning/losing arbitrations decreases/increases future stakes

- okay, to recap
  - accuser stakes in proportion to accused (and klout) to file a claim
    - accused may counter-stake in proportion to accusation (and klout)
      - accuser may stake additional amount to enter arbitration
        - now both parties submit N arbitrators until agreement is made
          - list of arbitrators with history and favoritism percentages is public
          - failed arbitration rounds cost claimaints klout inverse-proportionally to the klout of the chosen arbitrators
            - so choosing bad arbitrators will make future stakes more expensive
            - once 11(?) arbitrators are chosen they anonymously stake and vote
              - arbitrators stake in proportion to case and klout
              - winners split money

-->
