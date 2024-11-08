function _delete(filePath) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(filePath)]
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  _delete
};