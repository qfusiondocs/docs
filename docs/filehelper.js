const fs = require('fs')

const excludes = ['.DS_Store']

const filehelper = {
  getFileName: (rpath) => {
    let fileNames = []
    fs.readdirSync(rpath).forEach((file) => {
      if (excludes.indexOf(file) < 0) {
        fullpath = rpath + '/' + file
        const fileInfo = fs.statSync(fullpath)

        if (fileInfo.isFile()) {
          if (file === 'README.md') {
            file = ''
          } else {
            file = file.replace('.md', '')
          }
          fileNames.push(file)
        }
      }
    })

    console.log('fileNames', fileNames)
    fileNames.sort()
    console.log(fileNames)
    return fileNames
  },
}

filehelper.getFileName('./document')
// module.exports = filehelper
