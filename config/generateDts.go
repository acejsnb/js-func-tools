package main

import (
	"log"
	"os"
	"path/filepath"
)

func main() {
    pwd, _ := os.Getwd()

	data, errRead := os.ReadFile(filepath.Join(pwd, "src/declaration.ts"))
	if errRead != nil {
		log.Fatal("errRead-----", errRead)
	}
	errWrite := os.WriteFile(filepath.Join(pwd, "dist/index.d.ts"), data, 0666)
	if errWrite != nil {
		log.Fatal("errWrite-----", errWrite)
	}
}
