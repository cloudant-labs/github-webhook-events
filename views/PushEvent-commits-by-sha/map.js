function(doc) {
  if ('commits' in doc) {
    doc.commits.forEach(function(commit) {
      emit(commit.sha, commit);
    });
  }
}
/*
PushEvent unique fields:
    head
    ref
    size
    commits
    commits[][sha]
    commits[][message]
    commits[][author]
    commits[][author][name]
    commits[][author][email]
    commits[][url]
    commits[][distinct]
http://developer.github.com/v3/activity/events/types/#pushevent
*/