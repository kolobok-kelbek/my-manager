package config

import "embed"

//go:embed **
var ConfigDir embed.FS
