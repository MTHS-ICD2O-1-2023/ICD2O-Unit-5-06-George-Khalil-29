// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html


function multiply() {
  var num1 = parseInt(document.getElementById("num1").value)
  var num2 = parseInt(document.getElementById("num2").value)
  var result = 0

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Please enter valid integers."
    return
  }

  var absNum1 = Math.abs(num1)
  var absNum2 = Math.abs(num2)

  if (absNum1 === 0 || absNum2 === 0) {
    result = 0
  } else {
    for (var i = 0; i < absNum2; i++) {
      result += absNum1
    }
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
      result = -result
    }
  }

  document.getElementById("result").innerHTML = "Result:" + result 
}