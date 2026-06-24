# Run all targets from the repository root.
# Requires: Docker Compose v2, env files per environment (see .env.example).

COMPOSE := docker compose
COMPOSE_FLAGS := --project-directory .
DOCKER_DIR := docker

# Docker Desktop on Linux: ~/.docker/desktop/docker.sock often returns HTTP 500;
# the engine socket at /var/run/docker.sock is reliable for compose CLI.
ifeq ($(wildcard /var/run/docker.sock),/var/run/docker.sock)
  export DOCKER_HOST := unix:///var/run/docker.sock
endif

COMPOSE_DEV := $(DOCKER_DIR)/compose.dev.yml
COMPOSE_TEST := $(DOCKER_DIR)/compose.test.yml
COMPOSE_UAT := $(DOCKER_DIR)/compose.uat.yml
COMPOSE_PROD := $(DOCKER_DIR)/compose.prod.yml

ENV_DEVELOPMENT := .env.development
ENV_TEST := .env.test
ENV_UAT := .env.uat
ENV_PRODUCTION := .env.production

COMPOSE_DEV_CMD := $(COMPOSE) $(COMPOSE_FLAGS) -f $(COMPOSE_DEV) --env-file $(ENV_DEVELOPMENT)
COMPOSE_TEST_CMD := $(COMPOSE) $(COMPOSE_FLAGS) -f $(COMPOSE_TEST) --env-file $(ENV_TEST)
COMPOSE_UAT_CMD := $(COMPOSE) $(COMPOSE_FLAGS) -f $(COMPOSE_UAT) --env-file $(ENV_UAT)
COMPOSE_PROD_CMD := $(COMPOSE) $(COMPOSE_FLAGS) -f $(COMPOSE_PROD) --env-file $(ENV_PRODUCTION)

.PHONY: help ensure-docker doctor \
	build-development run-development stop-development logs-development \
	build-test run-test stop-test logs-test \
	build-uat run-uat stop-uat logs-uat \
	build-production run-production stop-production logs-production

help:
	@echo "Nextjs frontend template site — Docker commands (run from repo root)"
	@echo ""
	@echo "Development (built Next.js standalone, .env.development):"
	@echo "  make build-development  Build image"
	@echo "  make run-development    Start detached → http://localhost:3002"
	@echo "  make stop-development   Stop"
	@echo "  make logs-development   Follow logs"
	@echo ""
	@echo "Test (.env.test, port 3002):"
	@echo "  make build-test  make run-test  make stop-test  make logs-test"
	@echo ""
	@echo "UAT (.env.uat, port 3003):"
	@echo "  make build-uat  make run-uat  make stop-uat  make logs-uat"
	@echo ""
	@echo "Production (.env.production, port 3000):"
	@echo "  make build-production  make run-production  make stop-production  make logs-production"
	@echo ""
	@echo "Troubleshooting:"
	@echo "  make doctor             Check Docker / Compose connectivity"

ensure-docker:
	@docker version >/dev/null 2>&1 || (echo "Docker is not running. Start Docker Desktop and retry." >&2; exit 1)

doctor: ensure-docker
	@echo "DOCKER_HOST=$${DOCKER_HOST:-<default>}"
	@docker context show 2>/dev/null || true
	@docker compose version
	@docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}' 2>/dev/null || true

# --- Development ---

build-development: ensure-docker
	$(COMPOSE_DEV_CMD) build

run-development: ensure-docker build-development
	$(COMPOSE_DEV_CMD) up -d

stop-development: ensure-docker
	$(COMPOSE_DEV_CMD) down --remove-orphans

logs-development: ensure-docker
	$(COMPOSE_DEV_CMD) logs -f

# --- Test ---

build-test: ensure-docker
	$(COMPOSE_TEST_CMD) build

run-test: ensure-docker build-test
	$(COMPOSE_TEST_CMD) up -d

stop-test: ensure-docker
	$(COMPOSE_TEST_CMD) down --remove-orphans

logs-test: ensure-docker
	$(COMPOSE_TEST_CMD) logs -f

# --- UAT ---

build-uat: ensure-docker
	$(COMPOSE_UAT_CMD) build

run-uat: ensure-docker build-uat
	$(COMPOSE_UAT_CMD) up -d

stop-uat: ensure-docker
	$(COMPOSE_UAT_CMD) down --remove-orphans

logs-uat: ensure-docker
	$(COMPOSE_UAT_CMD) logs -f

# --- Production ---

build-production: ensure-docker
	$(COMPOSE_PROD_CMD) build

run-production: ensure-docker build-production
	$(COMPOSE_PROD_CMD) up -d

stop-production: ensure-docker
	$(COMPOSE_PROD_CMD) down --remove-orphans

logs-production: ensure-docker
	$(COMPOSE_PROD_CMD) logs -f
