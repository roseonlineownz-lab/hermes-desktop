/**
 * Default models seeded on first install.
 *
 * Contributors: add new models here! They'll be available to all users
 * on fresh install. Format:
 *   { name: "Display Name", provider: "provider-key", model: "model-id", baseUrl: "" }
 *
 * Provider keys: openrouter, anthropic, openai, custom, goclaw, ollama-launch
 * For openrouter models, use the full path (e.g. "anthropic/claude-sonnet-4-20250514")
 * For direct provider models, use the provider's model ID (e.g. "claude-sonnet-4-20250514")
 * For goclaw models, use GoClaw model IDs (e.g. "goclaw:nova")
 * For ollama-launch models, use Ollama model tags (e.g. "qwen3-coder:480b-cloud")
 */

export interface DefaultModel {
  name: string;
  provider: string;
  model: string;
  baseUrl: string;
}

const DEFAULT_MODELS: DefaultModel[] = [
  // ── GoClaw (NovaMaster primary — local model router) ────────────────────
  {
    name: "Nova (GoClaw)",
    provider: "goclaw",
    model: "goclaw:nova",
    baseUrl: "http://127.0.0.1:18790/v1",
  },
  {
    name: "Nova Coding (GoClaw)",
    provider: "goclaw",
    model: "goclaw:nova-coding",
    baseUrl: "http://127.0.0.1:18790/v1",
  },
  {
    name: "Nova Fast (GoClaw)",
    provider: "goclaw",
    model: "goclaw:nova-fast",
    baseUrl: "http://127.0.0.1:18790/v1",
  },

  // ── Ollama Launch (local + cloud models) ────────────────────────────
  {
    name: "Qwen3 Coder 480B Cloud",
    provider: "ollama-launch",
    model: "qwen3-coder:480b-cloud",
    baseUrl: "http://127.0.0.1:11434/v1",
  },
  {
    name: "Gemma 4 31B Cloud",
    provider: "ollama-launch",
    model: "gemma4:31b-cloud",
    baseUrl: "http://127.0.0.1:11434/v1",
  },

  // ── OpenRouter (200+ models via single API key) ──────────────────────
  {
    name: "Claude Sonnet 4",
    provider: "openrouter",
    model: "anthropic/claude-sonnet-4-20250514",
    baseUrl: "",
  },

  // ── Anthropic (direct) ───────────────────────────────────────────────
  {
    name: "Claude Sonnet 4",
    provider: "anthropic",
    model: "claude-sonnet-4-20250514",
    baseUrl: "",
  },

  // ── OpenAI (direct) ──────────────────────────────────────────────────
  {
    name: "GPT-4.1",
    provider: "openai",
    model: "gpt-4.1",
    baseUrl: "",
  },

  // ── DeepSeek (direct) ────────────────────────────────────────────────
  {
    name: "DeepSeek Chat V3",
    provider: "deepseek",
    model: "deepseek-chat",
    baseUrl: "https://api.deepseek.com/v1",
  },

  // ── Groq (direct) ────────────────────────────────────────────────────
  {
    name: "Llama 4 Maverick (Groq)",
    provider: "groq",
    model: "meta-llama/llama-4-maverick",
    baseUrl: "https://api.groq.com/openai/v1",
  },

];

export default DEFAULT_MODELS;
