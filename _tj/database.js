import {readFileSync} from "fs"
import {load} from "js-yaml"

export function get_database(absoluteFilename) {
    return load(readFileSync(absoluteFilename, 'utf8'));
}
