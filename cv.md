# **Dmitry Svatko**
# **Email:** gasada.dev@gmail.com
# **Working in IT. Always learn new things**
# **Skills:** 
* HTML
* CSS, SCSS
* JS
* Git, Github
* Markdown
* VS CODE
# **Code example:**

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

```
function mygcd(x,y){
    x = Math.abs(x); 
    y = Math.abs(y); 
    if (x > y) {
      let temp = x; x = y; y = temp; 
    }
    while (true) {
        if (y === 0) return x;
        x %= y;
        if (x === 0) return y;
        y %= x;
    }
}
```

# **Experience** https://github.com/gasada-dev/Shelter
# **Education:** No
# **English:** A1