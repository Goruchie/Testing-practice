const reverse = require('./stringReverse');
//Assert
test ('the string must be reversed', () => {
    expect (reverse("jose")).toMatch("esoj")
});
