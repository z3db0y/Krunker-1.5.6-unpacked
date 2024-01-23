module.exports = function (cW5, cW6, cW7, cWb, cWc) {
  cW5.config = cW6;
  if (cW7) {
    cW5.code = cW7;
  }
  cW5.request = cWb;
  cW5.response = cWc;
  cW5.isAxiosError = true;
  cW5.toJSON = function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return cW5;
};