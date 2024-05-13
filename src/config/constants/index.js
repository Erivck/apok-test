export const PORT = Number(process.env.PORT) ?? 3000;

export const DB_URL = process.env.DB_URL ?? "";

export const LOG_ERRORS_TO_CONSOLE = process.env.LOG_ERRORS_TO_CONSOLE === "true" ? true : false;

export const TRANSLATE_API_KEY = process.env.TRANSLATE_API_KEY ?? "";