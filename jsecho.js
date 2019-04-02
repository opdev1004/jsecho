/*
 * Find first class of script element and add the string
 *
 */
function echo(x) {
  if (checkClass('echo')) {
    document.getElementsByClassName('echo')[0].outerHTML = x + document.getElementsByClassName("echo")[0].outerHTML;
  }
}


/*
 * Always close at the end of each script element with ccho().
 *
 */
function ccho() {
  if (checkClass('echo')) {
    document.getElementsByClassName('echo')[0].outerHTML = '';
  }
}


/*
 * Check Class.
 *
 */
function checkClass(x) {
  var theClass = document.getElementsByClassName(x);
  if (theClass.length > 0) {
    return true;
  } else {
    return false;
  }
}
