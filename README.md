# timeShaper
Custom date time filters for angularjs  demo available at https://codepen.io/samdeesh/pen/jLJZxP
Quick doc:
Example usage is as :
 * Difference between dates(Now and then) in seconds {{now|duration:then}}
 * Format seconds to HH:MM:SS {{123|toHMS}}
 * Difference between dates(Now and then) in HH:MM:SS: {{now|duration:then|toHMS}}
 * Get latest/max date from unsorted array {{dateArray}}: {{dateArray|latest|date:"dd,MM,yyyy HH:mm:ss"}}
 * Get oldest/min date from unsorted array {{dateArray}}: {{dateArray|oldest|date:"dd,MM,yyyy HH:mm:ss"}}
