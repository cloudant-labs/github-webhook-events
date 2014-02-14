function(doc) {
  if ('commits' in doc) {
    doc.commits.forEach(function(commit) {
      index("author",
        [commit.author.name, commit.author.email].join(' '),
        {store: true});
      index("message",
        commit.message,
        {store: true});
      index("default",
        [commit.message, commit.author.name, commit.author.email].join(' '),
        {store: true});
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
