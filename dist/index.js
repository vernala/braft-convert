"use strict";

var _interopRequireDefault = require("/home/ccic/CCIC/braft-convert/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertRawToHTML = exports.convertRawToEditorState = exports.convertHTMLToRaw = exports.convertHTMLToEditorState = exports.convertEditorStateToRaw = exports.convertEditorStateToHTML = void 0;
var _objectSpread2 = _interopRequireDefault(require("/home/ccic/CCIC/braft-convert/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _draftConvert = require("draft-convert");
var _configs = require("./configs");
var _draftJs = require("draft-js");
var defaultConvertOptions = {
  fontFamilies: _configs.defaultFontFamilies
};
var convertRawToHTML = function convertRawToHTML(rawContent, options) {
  options = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, defaultConvertOptions), options);
  try {
    var contentState = (0, _draftJs.convertFromRaw)(rawContent);
    options.contentState = contentState;
    return (0, _draftConvert.convertToHTML)((0, _configs.getToHTMLConfig)(options))(contentState);
  } catch (error) {
    console.warn(error);
    return '';
  }
};
exports.convertRawToHTML = convertRawToHTML;
var convertHTMLToRaw = function convertHTMLToRaw(HTMLString, options, source) {
  options = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, defaultConvertOptions), options);
  try {
    var contentState = (0, _draftConvert.convertFromHTML)((0, _configs.getFromHTMLConfig)(options, source))(HTMLString);
    return (0, _draftJs.convertToRaw)(contentState);
  } catch (error) {
    console.warn(error);
    return {};
  }
};
exports.convertHTMLToRaw = convertHTMLToRaw;
var convertEditorStateToHTML = function convertEditorStateToHTML(editorState, options) {
  options = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, defaultConvertOptions), options);
  try {
    var contentState = editorState.getCurrentContent();
    options.contentState = contentState;
    return (0, _draftConvert.convertToHTML)((0, _configs.getToHTMLConfig)(options))(contentState);
  } catch (error) {
    console.warn(error);
    return '';
  }
};
exports.convertEditorStateToHTML = convertEditorStateToHTML;
var convertHTMLToEditorState = function convertHTMLToEditorState(HTMLString, editorDecorators, options, source) {
  options = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, defaultConvertOptions), options);
  try {
    return _draftJs.EditorState.createWithContent((0, _draftConvert.convertFromHTML)((0, _configs.getFromHTMLConfig)(options, source))(HTMLString), editorDecorators);
  } catch (error) {
    console.warn(error);
    return _draftJs.EditorState.createEmpty(editorDecorators);
  }
};
exports.convertHTMLToEditorState = convertHTMLToEditorState;
var convertEditorStateToRaw = function convertEditorStateToRaw(editorState) {
  return (0, _draftJs.convertToRaw)(editorState.getCurrentContent());
};
exports.convertEditorStateToRaw = convertEditorStateToRaw;
var convertRawToEditorState = function convertRawToEditorState(rawContent, editorDecorators) {
  try {
    return _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(rawContent), editorDecorators);
  } catch (error) {
    console.warn(error);
    return _draftJs.EditorState.createEmpty(editorDecorators);
  }
};
exports.convertRawToEditorState = convertRawToEditorState;
//# sourceMappingURL=index.js.map