// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html


function multiply() {
  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById("num2").value)
  let result = 0

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Please enter valid integers."
    return
  }

  const absNum1 = Math.abs(num1)
  const absNum2 = Math.abs(num2)

  if (absNum1 === 0 || absNum2 === 0) {
    result = 0
  } else {
    let i = 0
    while (i < absNum2) {
      result += absNum1
      i++
    }
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
      result = -result
    }
  }

  document.getElementById("result").innerHTML = "Result:" + result
}