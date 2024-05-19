package main

import (
	"fmt"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "hello world123\n")
	})

	mux.HandleFunc("GET /path/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "got path\n")
	})

	mux.HandleFunc("/article/{articleID}/", func(w http.ResponseWriter, r *http.Request) {
		articleID := r.PathValue("articleID")
		fmt.Fprintf(w, "reading article with articleID=%v\n", articleID)
	})

	http.ListenAndServe("0.0.0.0:8080", mux)
}
