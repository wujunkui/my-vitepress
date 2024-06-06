/**
 * 自动获取目录下面的md文件，并生成商品数据 
 * TODO
 */

import startCase from "lodash/startCase"
import sortBy from "lodash/sortBy"
import remove from "lodash/remove"
import { sep } from "path"
import { glob } from "glob"

// handle md file name
const getName = (path: string) => {
  let name = path.split(sep).pop() || path
  const argsIndex = name.lastIndexOf("--")
  if (argsIndex > -1) {
    name = name.substring(0, argsIndex)
  }

  // "001.guide" or "001-guide" or "001_guide" or "001 guide" -> "guide"
  name = name.replace(/^\d+[.\-_ ]?/, "")

  return startCase(name)
}

// handle dir name
const getDirName = (path: string) => {
  let name = path.split(sep).shift() || path
  name = name.replace(/^\d+[.\-_ ]?/, "")

  return startCase(name)
}

// Load all MD files in a specified directory
const getChildren = function (
  parentPath: string,
  ignoreMDFiles: Array<string> = []
) {
  const pattern = "/**/*.md"
  const files = glob.sync(parentPath + pattern).map((path) => {
    const newPath = path.slice(parentPath.length + 1, -3)
    if (
      ignoreMDFiles?.length &&
      ignoreMDFiles.findIndex((item) => item === newPath) !== -1
    ) {
      return undefined
    }
    return { path: newPath }
  })

  remove(files, (file) => file === undefined)
  // Return the ordered list of files, sort by 'path'
  return sortBy(files, ["path"]).map((file) => file?.path || "")
}

interface Options {
  ignoreDirectory?: Array<string> // Directoty path to ignore from being captured.
  ignoreMDFiles?: Array<string> // File path to ignore from being captured.
}

export const getShopItems = (baseDir: string, options?: Options) => {
  const mdFiles = getChildren(baseDir, options?.ignoreMDFiles)
  console.log("mdFiles", mdFiles);
  

  const shopItems = []
  // strip number of folder's name
  mdFiles.forEach((item) => {
    const dirName = getDirName(item)
    if (
      options?.ignoreDirectory?.length &&
      options?.ignoreDirectory.findIndex(
        (item) => getDirName(item) === dirName
      ) !== -1
    ) {
      return
    }
    const mdFileName = getName(item)
    console.log("mdFileName", mdFileName)
  })

  console.info("shopItems is create:", JSON.stringify(shopItems))
  return shopItems
}
