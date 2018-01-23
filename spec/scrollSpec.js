describe("Scroll", function() {

  it("displays next link when next is clicked", function(){
    // The next link - browser tests
    // - go to page, click Next question (to move from 1 to 2 - will fail)
    // - Answer 1 -> Answer 1, X
    // - Answer 1 -> Answer 2,
    // - Answer 2 -> Answer 3
    // - Answer 3 -> Answer 4
    // - Answer 4 -> Answer 5 X
    //selecting "next" on the final question should cycle to the first.
    // click Question5 link - Next question
  })

  it("displays previous link when prev is clicked", function(){

    // - go to page, click Next question (to move from 5 to 4 - will fail)
    //selecting "back" on the first question should cycle to the last.
    // Click Question1 - Prev question
  })
  it("retains focus on current answer when scrolling through questions", function(){

  });

})
