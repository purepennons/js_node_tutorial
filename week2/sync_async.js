// Synchronization
toastBread();
getBread();
brewCoffee();
getCoffee();
eatBreakfast();

/**
 * Asynchronization
 * executive times = max(toastBreadAsync(), brewCoffeeAsync()) + eatBreakfast() 
 */
toastBreadAsync(function() {
  emit('done', getBread);
});
brewCoffeeAsync(function() {
  emit('done', getCoffee)
});

var count = 0;
eventListener.on('done', function(callback) {
  callback();
  count++;
  if(count === 2) {
    eatBreakfast();
  }
});
