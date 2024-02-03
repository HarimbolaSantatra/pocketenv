import { dir } from "../deps.ts";

export const VERSION = "0.1.0";

export const POCKETENV_DIR = `${dir("home")}/.pocketenv`;

export const POCKETENV_CACHE_DIR = `${POCKETENV_DIR}/cache`;

export const POCKETENV_WORKSPACES_DIR = `${POCKETENV_DIR}/workspaces`;
