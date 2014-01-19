// editorconfig.js
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //document is ready. Do your stuff here
var opts = {
  container: 'epiceditor',
  textarea: 'textarea_toMkdw',
  basePath: 'js/lib/epiceditor',
  clientSideStorage: true,
  localStorageName: 'epiceditor',
  useNativeFullscreen: true,
  parser: marked,
  file: {
    name: 'epiceditor',
    defaultContent: '',
    autoSave: 100
  },
  theme: {
    base: '/themes/base/epiceditor.css',
    preview: '/themes/preview/preview-dark.css',
    editor: '/themes/editor/epic-dark.css'
  },
  button: {
    preview: true,
    fullscreen: true,
    bar: "show"
  },
  focusOnLoad: true,
  shortcut: {
    modifier: 18,
    fullscreen: 70,
    preview: 80
  },
  string: {
    togglePreview: 'Toggle Preview Mode',
    toggleEdit: 'Toggle Edit Mode',
    toggleFullscreen: 'Enter Fullscreen'
  },
  autogrow: true
  // autogrow.minHeight:100
}
var editor = new EpicEditor(opts).load();
// var editor = new EpicEditor(opts);
   }

// window.onresize = function () {
//   editor.reflow(function (data) {
//     console.log('width: ', data.width, ' ', 'height: ', data.height);
//   });
// }


}