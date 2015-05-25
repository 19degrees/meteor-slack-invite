Package.describe({
  name: '19degrees:slack-invite',
  version: '1.1.10',
  // Brief, one-line summary of the package.
  summary: 'A fork of studiointeract:slack-invite to add loader support.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/19degrees/meteor-slack-invite',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({request: "2.53.0"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.use('templating');
  api.use('mongo');
  api.use('http');
  api.use('reactive-var');
  api.use('sacha:spin@2.0.0', ['client']);

  api.export('Slack');

  api.addFiles('slack-invite.html', 'client');
  api.addFiles('slack-invite.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('studiointeract:slack-invite');
  api.addFiles('slack-invite-tests.js');
});
