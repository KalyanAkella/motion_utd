function MotionFrame(_topWhiteArea, _bottomWhiteArea, _leftWhiteArea, _rightWhiteArea) {
  this.topWhiteArea = _topWhiteArea;
  this.bottomWhiteArea = _bottomWhiteArea;
  this.leftWhiteArea = _leftWhiteArea;
  this.rightWhiteArea = _rightWhiteArea;

  this.difference = function(anotherFrame) {
    var result = {};
    result.top = this.topWhiteArea - anotherFrame.topWhiteArea;
    result.bottom = this.bottomWhiteArea - anotherFrame.bottomWhiteArea;
    result.left = this.leftWhiteArea - anotherFrame.leftWhiteArea;
    result.right = this.rightWhiteArea - anotherFrame.rightWhiteArea;

    return result;
  };

}
