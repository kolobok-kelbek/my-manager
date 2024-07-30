package server

import "net/http"

type Config struct {
	Host    string
	Timeout uint8
}

type Server struct {
	mux *http.ServeMux
	cfg Config
}

func NewServer(cfg Config, routing map[string]http.Handler) *Server {
	m := http.NewServeMux()

	for path, handler := range routing {
		m.Handle(path, handler)
	}

	return &Server{
		mux: m,
		cfg: cfg,
	}
}

func (s *Server) Run() {
	http.ListenAndServe(s.cfg.Host, s.mux)
}
