# Interactive Bingo
## Goal: A bingo game playable in the web browser.

Features:
- can receive a number of inputs that is higher than the total number of boxes on the bingo card itself
  - will fill each card with a randomly selected subset of facts from the total pool of facts
  - will place the facts into boxes in a random order

- each card has 16 bingo boxes (4x4 grid), and thus displays at most 16 out of a total 30 unique facts
- each fact text fits neatly inside the bingo box that contains it, is easy to read, and looks good
- the user can mark a bingo box complete, making it contribute to their victory
- when a box is marked complete, it changes visually so that it's easy to tell it's complete
- the user can write text on a bingo box that is separate from the fact in that box. this text field can be used for, at the very least, writing the name of the person they think the fact corresponds to

- the background is the canva art designed by Emily

// Goal: Display some user input (i.e. user's name shows up over the card)
// Goal: let a user mark a cell complete/incomplete and display it differently accordingly
// Goal: some CYOA, i.e. localStorage
// login feature would count as CYOA

// 1. A unique user name owns a unique card object
// 2. the user name submission should enforce that it is a first name and a last name, and that it is capitalized properly
// 3. the form should inform the user of what format it expects them to enter their name in
// 4. a card object knows which data it has and what order that data is in (it should be a random order unique to each card, but it is not necessary to enforce uniqueness)
// 5. eventually a card object will know which cells have been "solved"
// 6. eventually the app will notice if the card has boxes solved that happen to form a bingo victory condition (i.e. 4 diagonally, 4 across, 4 in a column)
// 7. a card object knows which username it belongs to
// 8. when a user submits a name that we haven't seen before, we generate a fresh card just for them. we make sure that card knows it belongs to them so that the next time they provide the same name they can get the same card
// 9. when provided the user's name, the application retrieves the card that was assigned to that name, and it's the same card (with the same contents in the same order) each time
