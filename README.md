# Bug Report

This project contains some sample code for a bug report.

This code does not run or compile!

# How to Reproduce:
 * Try to call a variadic function, a.k.a. a function with rest parameters, in TypeScript.
 * Use an object literal for the argument to the function.
 * Leave a field out of the object literal, so it will _not_ match required the argument type. 
 * When VS code warns you that you are missing a field, select "Quick Fix..." then "Add missing properties".
 * VS code will insert the wrong fields!  The code will be worse than before it made any changes.