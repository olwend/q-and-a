describe("Question", function() {

var Question = require('../script');
var question;
var answer;

beforeEach(function() {
  qanda = new Qanda();
  q1 = new Question();
  a1 = new Answer();
  q6 = new Question();
  a6 = new Answer();
// go to file:///Users/DOE/Projects/q-and-a/src/index.html# set up #a objects
});

  it(" can add a question and answer", function(){
    qanda.add(q6);
    qanda.add(a6);
    expect(qanda.size()).toEqual(6);

  });

  it("can remove a question", function(){

  });

  it("stores question count", function(){

  });

  it("displays associated answer when question is clicked", function(){

  });

  it("retains focus on current answer when scrolling through questions", function(){

  });
});
