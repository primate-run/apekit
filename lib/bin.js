#!/usr/bin/env node
import args from "@rcompat/args";
import assert from "@rcompat/assert";
import json from "@rcompat/package/json";
if (args[0] === "bump") {
    const type = args[1];
    assert(["major", "minor", "patch"].includes(type), "can only bump major, minor or patch");
    const package_json = await json.json();
    const { version } = package_json;
    const match = version.match(/^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$/);
    if (match?.groups) {
        let major = 0;
        let minor = 0;
        let patch = 0;
        if (type === "major") {
            major = Number(match.groups.major) + 1;
            minor = 0;
            patch = 0;
        }
        if (type === "minor") {
            minor = Number(match.groups.minor) + 1;
            patch = 0;
        }
        if (type === "patch") {
            patch = Number(match.groups.patch) + 1;
        }
        package_json.version = `${major}.${minor}.${patch}`;
        await json.write(JSON.stringify(package_json, undefined, 2));
        console.log(`bumped ${version} -> ${package_json.version}`);
    }
    else {
        console.error(`couldn't match package.json's version`);
    }
}
//# sourceMappingURL=bin.js.map