function(doc) {
  if ('pages' in doc) {
    doc.pages.forEach(function(page) {
      emit([page.page_name, page.action], page);
    });
  }
}
/*
GollumEvent unique fields:
    pages
    pages[][page_name]
    pages[][title]
    pages[][action]
    pages[][sha]
    pages[][html_url]
http://developer.github.com/v3/activity/events/types/#gollumevent
*/