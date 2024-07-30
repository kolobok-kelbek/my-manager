package main

import (
	"fmt"
	"net/http"

	"github.com/kolobok-kelbek/my-manager/config"
	"github.com/kolobok-kelbek/my-manager/pkg/server"

	"github.com/kolobok-kelbek/cong"
)

type Config struct {
	Server server.Config
}

func main() {
	loader := cong.NewLoader[Config]()
	cfg, err := loader.LoadFromEmbedFS("MyManager", config.ConfigDir, cong.YamlExt)
	if err != nil {
		panic(err)
	}

	srv := server.NewServer(cfg.Server)

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "hello world12343214321\n")
	})

	mux.HandleFunc("GET /path/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "got path\n")
	})

	mux.HandleFunc("/article/{articleID}/", func(w http.ResponseWriter, r *http.Request) {
		articleID := r.PathValue("articleID")
		fmt.Fprintf(w, "reading article with articleID=%v\n", articleID)
	})

	srv.Run()
}
