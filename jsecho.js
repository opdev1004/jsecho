/*
 * JS echo that can be used within the document.
 * This will let people to write document contents within js without inditcating certain element.
 * ex). document.getElementsById("ID").outerHTML = ""; with <div id="ID"></div>
 * This can not be used dynamically. And not built for dynamic contents.
 * This is same as PHP echo. Just static contents.
 */
function echo(x)
{
  var echo_index = document.getElementsByTagName("script").length - 1;
  var echo_content = x;
  // Check for null and undefined and making sure boolean is printed.
  if(typeof comment === 'undefined') echo_content = "undefined";
  else if(comment === null) echo_content = "null";
  else if(typeof echo_content === 'boolean')
  {
    if(echo_content) echo_content = "TRUE";
    else echo_content = "FALSE";
  }
  document.getElementsByTagName("script")[echo_index].outerHTML = echo_content + document.getElementsByTagName("script")[echo_index].outerHTML ;
}
