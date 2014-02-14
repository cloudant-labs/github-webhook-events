function(doc) {
  if ('action' in doc && doc.action === 'started')
  emit(doc.sender.login, doc.sender);
}
/*
WatchEvent unique fields:
    action  string  The action that was performed. Currently, can only be started.
http://developer.github.com/v3/activity/events/types/#watchevent
*/