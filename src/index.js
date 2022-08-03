module.exports = function reverse(n) {
   let s = '';
   if (n < 0) { n = n * (-1) }
   s = String(n).split("").reverse().join("")

   return s
}

