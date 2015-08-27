
// mocha_bdd_template
describe('Task A', function() {
  this.timeout(5000); // 設定每個 task 的執行上限時間, default: 2000 ms
  before(function(done) {
    // do something before testing
    done();
  });

  after(function(done) {
    // do something after testing
    done();
  });

  beforeEach(function(done) {
    // do something before each testing
    done();
  });

  afterEach(function(done) {
    // do something after each testing
    done();
  });

  it('should describe something about your testing', function(done) {
    // your assertion
    done();
  });
});
