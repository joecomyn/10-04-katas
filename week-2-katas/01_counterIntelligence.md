# Counter Intelligence

For this kata, you need to write a function called `counterIntelligence`. It takes an encrypted string as the argument and should return a decoded string. 

We've intercepted a channel of communication between spies! The messages have been encrypted by shifting the letters by a random number, but we know whoever has been sending them always signs off with a kiss ('x'). Using the last letter, establish how the messages have been shifted, and return the decoded string. 

Punctuation is not encrypted and so can be ignored. 

The messages should be returned in uppercase.

## Examples: 

```javascript
counterIntelligence('Y') // should return 'X' - the string has been shifted by 1. 

counterIntelligence('BCD Y') // should return 'ABC X' - the string has been shifted by 1

counterIntelligence('NKRRU YCKKZNKGXZ D') // should return 'HELLO SWEETHEART X'

counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G') // should return 'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X'

counterIntelligence('ngbk g toik jge :) d') // should return 'HAVE A NICE DAY :) X'
```
