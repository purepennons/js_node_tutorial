var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var expect = chai.expect
  , assert = chai.assert
;

chai.should();
chai.use(chaiAsPromised);

// 要測的 function
var factorial = require('../testing/test_example.js').factorial;
var readFile = require('fs').readFile;
var readFileAsync = require('../testing/test_example.js').readFileAsync;


describe('#factorial()', function() {
  before(function() {
    // do something
  });

  it('should return 6 with given 3', function() {
    expect(factorial(3, 1)).to.be.equal(6);
  });

  it('should return 24 with given 4', function() {
    factorial(4, 1).should.be.equal(24);
  });

  it('should return 120 with given 5', function() {
    assert.equal(factorial(5, 1), 120);
  });

  after(function() {
    // do something
  });
});

// test readFile by callback and promise
describe('#readFileAsync()', function() {

  this.timeout(5000);

  before(function() {
    // do something
  });

  // callback
  it('should read a file by callback and return an object with given testfile.json', function(done) {
    readFile('./test/testfile.json', function(err, data) {
      expect(err).to.be.null;
      try {
        var obj = JSON.parse(data.toString());
        expect(obj).to.be.an('object');
      } catch(error) {
        expect(error).to.be.null;
      }
      done(); // 記得呼叫
    });
  });

  // promise
  it('should read a file by promise and return an object with given testfile.json', function(done) {
    readFileAsync('./test/testfile.json')
    .then( function(data) {
      try {
        var obj = JSON.parse(data.toString());
        expect(obj.file).to.be.a('string');
      } catch(error) {
        expect(error).to.be.null;
      }
      done();
    })
    .catch( function(err) {
      expect(error).to.be.null;
      done();
    });
  })

  // test promise function by using chai-as-promised
  it('chai-as-promised demo', function() {
    expect( readFileAsync('not_exist_file') ).be.rejected;
    expect( readFileAsync('./test/testfile.json') ).be.fulfilled;
  });

  after(function() {
    // do something
  });
});
