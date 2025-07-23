#!/usr/bin/env node
import args from "@rcompat/args";
import assert from "@rcompat/assert";
import json from "@rcompat/package/json";

if (args[0] === "bump") {
  const type = args[1];
  assert(["major", "minor", "patch"].includes(type),
    "can only bump major, minor or patch")
  const package_json = await json.json();

  const match = version.match(/^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$/);
  if (match?.groups) {
    const groups = { ...match.groups };
    const old = match[type];
    match[type] = Number(match[type]) + 1;
    package_json.version = Object.values(group).join(".");
    await json.write(JSON.stringify(package_json, null, 2));
    console.log(`bumped ${type} from ${old} to ${match[type]}`);
  } else {
    console.error(`couldn't match package.json's version`);
  }
}
