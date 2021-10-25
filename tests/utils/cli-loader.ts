import { existsSync } from "fs";
import * as path from 'path';
import { cliArguments, reloadFromConfigFile } from 'cli-argument-parser'
export function loadArguments() {
    const envFile = `${process.cwd()}${path.sep}.env`;
    const isExists = existsSync(envFile)
    if(isExists) {
        reloadFromConfigFile(envFile);
    }
    if(!cliArguments.browser) {
        cliArguments.browser = 'chrome:headless'
    }
}