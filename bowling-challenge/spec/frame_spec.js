describe("Frame", function() {

  describe("#roll", function() {
    it("adds to the frame score", function() {
      var frame = new Frame();
      frame.roll(5);
      expect(frame.getScore()).toBe(5);
    })
    })

  describe("#frameover", function() {
    it("knows when a frame isn't over", function() {
      var frame = new Frame([5]);
      var frameover = frame.frameover();
    expect(frameover).toBe(false);
    })
  })

  describe("#frameover", function() {
    it("knows when a frame is over", function() {
      var frame = new Frame([3, 5]);
      var frameover = frame.frameover();
      expect(frameover).toBe(true);
    })
  })

  describe("#Strike!", function() {
    it("knows when a player has hit a strike", function() {
      var frame = new Frame([10]);
      var strike = frame.strike()
      var frameover = frame.frameover();
      expect(strike).toBe(true);
    })
  })

  describe("#Spare!", function() {
    it("knows when a player has hit a spare", function() {
      var frame = new Frame([4, 6]);
      var spare = frame.spare()
      expect(spare).toBe(true);
    })
  })

});
