package main

import "fmt"

func main() {
	for i := 0; i < 100; i++ {
		var result string = ""
		if i%3 == 0 {
			result += "Fizz"
		}
		if i%5 == 0 {
			result += "Buzz"
		}
		// result == "" ? i : result is not supported
		if result == "" {
			fmt.Println(i)
		} else {
			fmt.Println(result)
		}
	}
}
