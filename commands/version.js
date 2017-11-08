const package_json = require('./package.json')
version = () => {
  process.stdout.write(package_json.version + '\n')
}
export.version = version
