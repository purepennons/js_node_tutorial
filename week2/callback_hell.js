asyncFun1(function(err, result) {
  asyncFun2(function(err, result) {
    asyncFun3(function(err, result) {
      asyncFun4(function(err, result) {
        asyncFun5(function(err, result) {
          asyncFun6(function(err, result) {
            asyncFun7(function(err, result) {
              asyncFun8(function(err, result) {
                asyncFun9(function(err, result) {
                  // do something
                });
              });
            });
          });
        });
      });
    });
  });
});
